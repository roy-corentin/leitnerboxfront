import { parseCard } from "../../../../../../../parser/card";
import type { PageServerLoad } from "./$types";

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
