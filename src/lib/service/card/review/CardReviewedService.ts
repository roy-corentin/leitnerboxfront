import { fail, redirect } from "@sveltejs/kit";

interface Props {
  boxId: FormDataEntryValue;
  sessionId: string;
  cardId: FormDataEntryValue;
  deckId: FormDataEntryValue;
  isCorrect: boolean;
}

export class CardReviewedService {
  boxId: FormDataEntryValue;
  sessionId: string;
  cardId: FormDataEntryValue;
  deckId: FormDataEntryValue;
  isCorrect: boolean;

  constructor({ boxId, sessionId, cardId, deckId, isCorrect }: Props) {
    this.boxId = boxId;
    this.sessionId = sessionId;
    this.deckId = deckId;
    this.cardId = cardId;
    this.isCorrect = isCorrect;
  }

  async exec() {
    const result = await fetch(
      `http://localhost:3000/leitner_boxes/${this.boxId}/decks/${this.deckId}/cards/${this.cardId}/reviewed`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.sessionId}` },
        body: JSON.stringify(this.body()),
      }
    );

    if (result.ok) throw redirect(303, "/study");
    return { status: "error" };
  }

  private body() {
    return {
      is_correct: this.isCorrect,
    };
  }
}
