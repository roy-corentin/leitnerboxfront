import { parseDeck, type DeckApi } from "./deck";

export interface LeitnerBoxApi {
    id: string;
    name: string;
    user_id: string;
    cards_id: string[];
    decks?: DeckApi[];
}

export function parseBox(boxApi: LeitnerBoxApi): LeitnerBox {
    return {
        id: boxApi.id,
        name: boxApi.name,
        userId: boxApi.user_id,
        cardsId: boxApi.cards_id,
        decks: (boxApi.decks ?? []).map(parseDeck),
    };
}
