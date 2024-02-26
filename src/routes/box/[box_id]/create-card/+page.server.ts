import { fail, type Actions, redirect } from "@sveltejs/kit";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const sessionId = event.locals.sessionId;
        const question = data.get("question");
        const answer = data.get("answer");
        const description = data.get("description");
        const boxId = data.get("box_id");

        const body = {
            card: {
                card_type: "text",
                content: {
                    front: question,
                    back: answer,
                    description: description,
                },
            },
        };

        const result = await fetch(`http://localhost:3000/leitner_boxes/${boxId}/cards`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${sessionId}` },
            body: JSON.stringify(body),
        });

        if (result.ok) throw redirect(301, `/box/${boxId}`);
        return fail(311, { error: "Failed to create card" });
    },
} satisfies Actions;
