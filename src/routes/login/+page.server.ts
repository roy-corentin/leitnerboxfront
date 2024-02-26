import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email) {
      return fail(400, { emailMissing: true });
    }
    if (!password) {
      return fail(400, { passwordMissing: true });
    }

    const response = await fetch("http://localhost:3000/sign_ins", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ user: { email, password } }),
    });

    const json = await response.json();

    if (response.ok) {
      cookies.set("sessionId", json.token, { path: "/" });
      throw redirect(303, "/");
    } else {
      return fail(400, { error: true, message: json.details });
    }
  },
};
