import { fail, redirect } from "@sveltejs/kit";

interface Props {
  boxId: FormDataEntryValue;
  sessionId: string;
  front: FormDataEntryValue | null;
  back: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
  deckId?: FormDataEntryValue | null;
  cardId?: FormDataEntryValue | null;
}

export class SaveCardService {
  boxId: FormDataEntryValue;
  sessionId: string;
  front: FormDataEntryValue | null;
  back: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
  deckId?: FormDataEntryValue | null;
  cardId?: FormDataEntryValue | null;

  constructor({ boxId, sessionId, front, back, description, deckId, cardId }: Props) {
    this.boxId = boxId;
    this.sessionId = sessionId;
    this.front = front;
    this.back = back;
    this.description = description;
    this.deckId = deckId;
    this.cardId = cardId;
  }

  async exec() {
    if (this.isNewCard()) await this.createCard();
    else await this.updateCard();
  }

  private async createCard() {
    const result = await fetch(`http://localhost:3000/leitner_boxes/${this.boxId}/cards`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.sessionId}` },
      body: JSON.stringify(this.body()),
    });

    if (result.ok) throw redirect(301, `/box/${this.boxId}`);
    return fail(311, { error: "Failed to create card" });
  }

  private async updateCard() {
    const result = await fetch(
      `http://localhost:3000/leitner_boxes/${this.boxId}/decks/${this.deckId}/cards/${this.cardId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.sessionId}` },
        body: JSON.stringify(this.body()),
      }
    );

    console.log(result);

    if (result.ok) throw redirect(301, `/box/${this.boxId}/deck/${this.deckId}/card/${this.cardId}`);
    return fail(311, { error: "Failed to create card" });
  }

  private body() {
    return {
      card: {
        card_type: "text",
        content: {
          front: this.front,
          back: this.back,
          description: this.description,
        },
      },
    };
  }

  private isNewCard(): boolean {
    return !this.deckId || !this.cardId;
  }
}
