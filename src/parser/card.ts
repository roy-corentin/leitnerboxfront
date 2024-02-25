export interface CardApi {
    id: string;
    card_type: string;
    content: {
        front: string;
        back: string;
        description: string;
    };
    deck_id: string;
    last_review: Date | null;
}

export function parseCard(cardApi: CardApi): Card {
    return {
        id: cardApi.id,
        cardType: cardApi.card_type,
        front: cardApi.content.front,
        back: cardApi.content.back,
        description: cardApi.content.description,
        deckId: cardApi.deck_id,
        lastReview: cardApi.last_review,
    };
}

export function parseCards(cardsApi: { cards: CardApi[] }): Card[] {
    return cardsApi.cards.map(parseCard);
}
