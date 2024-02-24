import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
    card: async (event) => {
        const data = await event.request.formData();
        const sessionId = event.locals.sessionId;
        const question = data.get("question");
        const answer = data.get("answer");
        const description = data.get("description");
        const boxId = data.get("box_id");

        const result = await fetch(`http://localhost:3000/leitner_boxes/${boxId}/cards`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${sessionId}` },
            body: JSON.stringify({ card: { question, answer, description } }),
        });

        if (result.ok) {
            return { status: 200, body: { message: "Card created" } };
        }
        return fail(311, { error: "Failed to create card" });
    },
} satisfies Actions;
