// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface ImportMetaEnv {
		/** Microsoft Clarity project ID; set in Vercel. Unset = no banner, no tracking. */
		readonly VITE_CLARITY_ID?: string;
	}
}

export {};
