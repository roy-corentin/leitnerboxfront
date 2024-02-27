import { StudyBoxService } from "$lib/service/box/study/StudyBoxService";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { CardReviewedService } from "$lib/service/card/review/CardReviewedService";

export const load: PageServerLoad = async ({ locals, cookies }) => {
  let card: Card | null = null;
  let boxId: string | null = null;
  const sessionId = cookies.get("sessionId");

  if (!sessionId) return { status: "unauthorized" };
  for (const box of locals.user?.leitnerBoxes || []) {
    card = await new StudyBoxService({ boxId: box.id, sessionId }).exec();
    if (card) {
      boxId = box.id;
      break;
    }
  }

  return { status: card ? "in-progress" : "terminated", card, boxId };
};

export const actions: Actions = {
  rightAnswer: async (event) => {
    const sessionId = event.cookies.get("sessionId");
    const data = await event.request.formData();
    const cardId = data.get("cardId");
    const deckId = data.get("deckId");
    const boxId = data.get("boxId");
    const isCorrect = true;

    if (!sessionId) return { status: "unauthorized" };
    if (!cardId || !deckId || !boxId) return { status: "error" };
    return await new CardReviewedService({ boxId, sessionId, cardId, deckId, isCorrect }).exec();
  },
  wrongAnswer: async (event) => {
    const sessionId = event.cookies.get("sessionId");
    const data = await event.request.formData();
    const cardId = data.get("cardId");
    const deckId = data.get("deckId");
    const boxId = data.get("boxId");
    const isCorrect = false;

    if (!sessionId) return { status: "unauthorized" };
    if (!cardId || !deckId || !boxId) return { status: "error" };
    return await new CardReviewedService({ boxId, sessionId, cardId, deckId, isCorrect }).exec();
  },
};
