import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default_box: async (event) => {
    const sessionId = event.locals.sessionId;

    if (!sessionId) return fail(401, { error: "Unauthorized" });

    const result = await fetch("http://localhost:3000/leitner_boxes/default_box", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${sessionId}` },
      body: JSON.stringify({ leitner_box: { name: "default_box" } }),
    });

    if (result.ok) {
      console.log("Box created");
      redirect(303, "/");
    } else {
      return fail(311, { error: "Failed to create box" });
    }
  },
} satisfies Actions;
