import { fail } from "@sveltejs/kit";

export const actions: import("./$types").Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const passwordConfirmation = data.get("password-confirmation");

    if (!email) {
      return fail(400, { email, missing: true });
    }

    const response = await fetch("http://localhost:3000/sign_ups", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ user: { email: email, password: password, password_confirmation: passwordConfirmation } }),
    });

    const json = await response.json();
    console.log(json);
    console.log(email, password);

    if (response.ok) {
      return { success: "ok", token: json.token };
    } else {
      return fail(400, { error: true, message: json.details });
    }
  },
};
