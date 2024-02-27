import { parseCard } from "../../../../parser/card";

interface Props {
  boxId: string;
  sessionId: string;
}

export class StudyBoxService {
  boxId: string;
  sessionId: string;

  constructor({ boxId, sessionId }: Props) {
    this.boxId = boxId;
    this.sessionId = sessionId;
  }

  async exec(): Promise<Card | null> {
    const response = await fetch(`http://localhost:3000/leitner_boxes/${this.boxId}/next_card_to_study`, {
      headers: { Authorization: `Bearer ${this.sessionId}` },
    });

    if (!response.ok) return null;

    const data = await response.json();
    if (data.ok) return null;
    console.log(data);
    const card = parseCard(data);
    return card;
  }
}
