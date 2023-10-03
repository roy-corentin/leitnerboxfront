// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface User {
		email: string;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			user: User;
		}
	}
}

export {};
