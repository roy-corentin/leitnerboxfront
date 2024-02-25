// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface LeitnerBox {
		id: string;
		name: string;
		userId: string;
		cardsId: string[];
		decks: Deck[];
	}

	interface Deck {
		id: string;
		leitnerBoxId: string;
		periodUnit: number;
		periodType: PeriodType;
		level: number;
		lastReview: Date | null;
		cardIds: string[];
	}

	interface Card {
		id: string;
		cardType: string;
		front: string;
		back: string;
		description?: string;
		deckId: string;
		lastReview: Date | null;
	}

	interface User {
		email: string;
		leitnerBoxes: LeitnerBox[];
	}

	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			user: User | null;
			sessionId: string | null;
		}
	}
}

export { User, LeitnerBox };
