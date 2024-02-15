export interface LeitnerBoxApi {
    id: string;
    name: string;
    user_id: string;
    cards_id: string[];
}

export function parseBox(boxApi: LeitnerBoxApi): LeitnerBox {
    return {
        id: boxApi.id,
        name: boxApi.name,
        userId: boxApi.user_id,
        cardsId: boxApi.cards_id,
    };
}
