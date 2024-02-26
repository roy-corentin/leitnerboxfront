import { SaveCardService } from "$lib/service/card/SaveCardService";
import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
        default: async (event) => {
                const data = await event.request.formData();

                const sessionId = event.locals.sessionId;
                const front = data.get("question");
                const back = data.get("answer");
                const description = data.get("description");
                const boxId = data.get("box_id");

                if (!sessionId) return fail(401, { error: "Unauthorized" });
                if (!boxId) return fail(400, { boxId, missing: true });
                return new SaveCardService({ boxId, sessionId, front, back, description }).exec();
        },
} satisfies Actions;
