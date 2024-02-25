import type { PageServerLoad } from "./$types";
import { parseBox } from "../../../parser/box";
import { parseCards } from "../../../parser/card";

export const load: PageServerLoad = async ({ cookies, params, url }) => {
    const cardQuery = url.searchParams.get("cards");
    const boxId = params["id"];
    const sessionId = cookies.get("sessionId");
    let box = null;
    let cards: Card[] = [];

    const boxResponse = await fetch(`http://localhost:3000/leitner_boxes/${boxId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${sessionId}` },
    });

    if (boxResponse.ok) {
        const boxApi = await boxResponse.json();
        box = parseBox(boxApi);
        const cardsResponse = await fetch(`http://localhost:3000/leitner_boxes/${boxId}/cards`, {
            method: "GET",
            headers: { Authorization: `Bearer ${sessionId}` },
        });
        const cardsApi = await cardsResponse.json();
        cards = parseCards(cardsApi);
    }
    return {
        box,
        cards,
        tab: cardQuery === "" ? "cards" : "decks",
    };
};
