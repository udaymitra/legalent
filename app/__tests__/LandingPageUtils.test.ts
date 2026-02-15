import { isValidEmail, subscribeEmail } from "@/app/LandingPageUtils";

describe("isValidEmail", () => {
  it("returns false for empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  it("returns false for missing @", () => {
    expect(isValidEmail("userdomain.com")).toBe(false);
  });

  it("returns false for missing domain", () => {
    expect(isValidEmail("user@")).toBe(false);
  });

  it("returns false for string with spaces", () => {
    expect(isValidEmail("user @domain.com")).toBe(false);
  });

  it("returns true for standard email", () => {
    expect(isValidEmail("user@domain.com")).toBe(true);
  });

  it("returns true for email with subdomain", () => {
    expect(isValidEmail("user@sub.domain.com")).toBe(true);
  });
});

describe("subscribeEmail", () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    global.fetch = mockFetch;
  });

  it("rejects empty email without calling fetch", async () => {
    const result = await subscribeEmail("", "legal");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/enter your email/i);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("rejects whitespace-only email without calling fetch", async () => {
    const result = await subscribeEmail("   ", "legal");
    expect(result.success).toBe(false);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("rejects invalid email without calling fetch", async () => {
    const result = await subscribeEmail("notanemail", "legal");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/valid email/i);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("trims and lowercases email before sending", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: true, data: { email: "user@domain.com" } }),
    });

    await subscribeEmail("  User@Domain.COM  ", "legal");

    expect(mockFetch).toHaveBeenCalledWith("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@domain.com", source: "legal" }),
    });
  });

  it("returns success on successful response", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: true, data: { email: "user@domain.com" } }),
    });

    const result = await subscribeEmail("user@domain.com", "legal");
    expect(result.success).toBe(true);
  });

  it("returns error on error response", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: false, error: "Already subscribed" }),
    });

    const result = await subscribeEmail("user@domain.com", "legal");
    expect(result.success).toBe(false);
    expect(result.error).toBe("Already subscribed");
  });

  it("returns error on network failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await subscribeEmail("user@domain.com", "legal");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/something went wrong/i);
  });
});
