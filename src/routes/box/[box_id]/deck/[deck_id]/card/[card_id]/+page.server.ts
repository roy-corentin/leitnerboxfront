import { fail, type Actions } from "@sveltejs/kit";
import { parseCard } from "../../../../../../../parser/card";
import type { PageServerLoad } from "./$types";
import { SaveCardService } from "$lib/service/card/SaveCardService";

export const load: PageServerLoad = async ({ params, cookies }) => {
  const boxId = params["box_id"];
  const deckId = params["deck_id"];
  const cardId = params["card_id"];

  const sessionId = cookies.get("sessionId");
  let card: Card | null = null;

  if (sessionId) {
    const response = await fetch(`http://localhost:3000/leitner_boxes/${boxId}/decks/${deckId}/cards/${cardId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${sessionId}` },
    });

    if (response.ok) {
      const responseJson = await response.json();
      card = parseCard(responseJson);
    }
  }

  return {
    boxId,
    card,
  };
};

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const sessionId = event.locals.sessionId;
    const front = data.get("question");
    const back = data.get("answer");
    const description = data.get("description");
    const boxId = data.get("box_id");
    const deckId = data.get("deck_id");
    const cardId = data.get("card_id");

    if (!sessionId) return fail(401, { error: "Unauthorized" });
    if (!boxId) return fail(400, { boxId, missing: true });
    if (!deckId) return fail(400, { deckId, missing: true });
    if (!cardId) return fail(400, { cardId, missing: true });
    return new SaveCardService({ boxId, deckId, cardId, sessionId, front, back, description }).exec();
  },
} satisfies Actions;
