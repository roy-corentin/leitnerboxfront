// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface LeitnerBox {
		id: string;
		name: string;
		userId: string;
		cardsId: string[];
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
			user: User;
			sessionId: string | undefined;
		}
	}
}

export { User, LeitnerBox };
