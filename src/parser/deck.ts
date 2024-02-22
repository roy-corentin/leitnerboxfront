export type PeriodType = "day" | "week" | "month" | "year";

export interface DeckApi {
    id: string;
    leitner_box_id: string;
    period_unit: number;
    period_type: PeriodType;
    level: number;
    last_review: Date | null;
    card_ids: string[];
}

export function parseDeck(deckApi: DeckApi): Deck {
    return {
        id: deckApi.id,
        leitnerBoxId: deckApi.leitner_box_id,
        periodUnit: deckApi.period_unit,
        periodType: deckApi.period_type,
        level: deckApi.level,
        lastReview: deckApi.last_review,
        cardIds: deckApi.card_ids,
    };
}
