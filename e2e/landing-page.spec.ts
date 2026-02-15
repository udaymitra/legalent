import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Legalent/i);
  });

  test("all sections are visible", async ({ page }) => {
    // Hero
    await expect(page.getByText("Build the Law Firm")).toBeVisible();

    // Core Beliefs
    await expect(page.getByText("Our Core Beliefs")).toBeVisible();

    // Infrastructure
    await expect(page.getByText("Why Infrastructure Matters")).toBeVisible();

    // Team
    await expect(page.getByText("Built by Industry Leaders")).toBeVisible();

    // CTA
    await expect(page.getByText("Let's Build Together")).toBeVisible();

    // Footer
    await expect(page.getByText(/Legalent\.ai\. All rights reserved/)).toBeVisible();
  });

  test("empty email submit shows no success", async ({ page }) => {
    const button = page.getByRole("button", { name: /stay informed/i });
    await button.click();

    await expect(page.getByText(/enter your email/i)).toBeVisible();
    await expect(page.getByText(/you're on the list/i)).not.toBeVisible();
  });

  test("invalid email shows error", async ({ page }) => {
    const input = page.getByPlaceholder("you@lawfirm.com");
    const button = page.getByRole("button", { name: /stay informed/i });

    await input.fill("not-an-email");
    await button.click();

    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test("valid email submission shows success", async ({ page }) => {
    await page.route("**/api/subscribe", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, data: { email: "test@firm.com" } }),
      });
    });

    const input = page.getByPlaceholder("you@lawfirm.com");
    const button = page.getByRole("button", { name: /stay informed/i });

    await input.fill("test@firm.com");
    await button.click();

    await expect(page.getByText(/you're on the list/i)).toBeVisible();
  });
});
