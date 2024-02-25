import type { PageServerLoad } from "./$types";
import { parseBox } from "../../../parser/box";
import { parseCards } from "../../../parser/card";
import { redirect, type Cookies } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies, params, url }) => {
    const tab = url.searchParams.get("tab") ?? "decks";
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
        tab,
    };
};

export const actions = {
    async deleteCard({ cookies, request }: { cookies: Cookies; request: Request }) {
        const data = await request.formData();
        const sessionId = cookies.get("sessionId");
        const boxId = data.get("box_id");
        const deckId = data.get("deck_id");
        const cardId = data.get("card_id");

        const response = await fetch(`http://localhost:3000/leitner_boxes/${boxId}/decks/${deckId}/cards/${cardId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${sessionId}` },
        });
        if (response.ok) {
            throw redirect(303, `/box/${boxId}`);
        }
        return {
            status: response.status,
            statusText: response.body,
        };
    },
};
