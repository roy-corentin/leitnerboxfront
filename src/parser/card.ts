export interface CardApi {
    id: string;
    card_type: string;
    content: {
        front: string;
        back: string;
        description: string;
    };
    deck_id: string;
    last_review: string | null;
}

export function parseCard(cardApi: CardApi): Card {
    const lastReview = cardApi.last_review ? new Date(cardApi.last_review) : null;
    return {
        id: cardApi.id,
        cardType: cardApi.card_type,
        front: cardApi.content.front,
        back: cardApi.content.back,
        description: cardApi.content.description,
        deckId: cardApi.deck_id,
        lastReview,
    };
}

export function parseCards(cardsApi: { cards: CardApi[] }): Card[] {
    return cardsApi.cards.map(parseCard);
}
