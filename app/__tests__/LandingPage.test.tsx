import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("@vercel/analytics", () => ({
  track: jest.fn(),
}));

class MockIntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  constructor() {}
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

import LandingPage from "@/app/LandingPage";

const mockFetch = jest.fn();

beforeEach(() => {
  jest.resetAllMocks();
  global.fetch = mockFetch;
});

describe("CTASection", () => {
  it("renders the email form with input and button", () => {
    render(<LandingPage />);
    expect(screen.getByPlaceholderText("you@lawfirm.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /stay informed/i })).toBeInTheDocument();
  });

  it("shows error for invalid email submission", async () => {
    const user = userEvent.setup();
    render(<LandingPage />);

    const input = screen.getByPlaceholderText("you@lawfirm.com");
    const button = screen.getByRole("button", { name: /stay informed/i });

    await user.type(input, "invalid-email");
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it("shows success message on successful submission", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: true, data: { email: "user@firm.com" } }),
    });

    const user = userEvent.setup();
    render(<LandingPage />);

    const input = screen.getByPlaceholderText("you@lawfirm.com");
    const button = screen.getByRole("button", { name: /stay informed/i });

    await user.type(input, "user@firm.com");
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(/you're on the list/i)).toBeInTheDocument();
    });
  });

  it("disables input and button during loading", async () => {
    let resolveFetch: (value: unknown) => void;
    mockFetch.mockImplementationOnce(
      () => new Promise((resolve) => { resolveFetch = resolve; })
    );

    const user = userEvent.setup();
    render(<LandingPage />);

    const input = screen.getByPlaceholderText("you@lawfirm.com");
    const button = screen.getByRole("button", { name: /stay informed/i });

    await user.type(input, "user@firm.com");
    await user.click(button);

    await waitFor(() => {
      expect(input).toBeDisabled();
      expect(screen.getByRole("button", { name: /submitting/i })).toBeDisabled();
    });

    resolveFetch!({
      json: async () => ({ success: true, data: { email: "user@firm.com" } }),
    });
  });

  it("triggers submission on Enter key", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: true, data: { email: "user@firm.com" } }),
    });

    const user = userEvent.setup();
    render(<LandingPage />);

    const input = screen.getByPlaceholderText("you@lawfirm.com");
    await user.type(input, "user@firm.com");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(screen.getByText(/you're on the list/i)).toBeInTheDocument();
    });
  });
});
