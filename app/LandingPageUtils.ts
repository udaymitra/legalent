interface SubscribeResult {
  success: boolean;
  data?: { email: string };
  error?: string;
}

export function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function subscribeEmail(rawEmail: string, source: string): Promise<SubscribeResult> {
  const email = rawEmail.trim().toLowerCase();

  if (!email) {
    return { success: false, error: "Please enter your email address." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });

    const result: SubscribeResult = await response.json();
    return result;
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
