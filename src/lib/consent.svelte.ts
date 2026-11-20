/**
 * Cookie consent for Microsoft Clarity.
 *
 * Clarity is only loaded after the visitor presses "Accept". The choice is remembered in
 * localStorage and can be changed any time from "Cookie settings" in the footer.
 * Set VITE_CLARITY_ID (the Clarity project ID) in Vercel → Settings → Environment Variables;
 * with no ID, no banner is shown and nothing is loaded.
 *
 * In Clarity → Settings → Setup, turn Cookies OFF so Clarity waits for this consent signal.
 */
export const CLARITY_ID: string | undefined = import.meta.env.VITE_CLARITY_ID || undefined;

const KEY = 'kd-cookie-consent';
type Choice = 'granted' | 'denied';

export const consent = $state<{ choice: Choice | null; open: boolean }>({ choice: null, open: false });

let loaded = false;

function read(): Choice | null {
	try {
		const v = localStorage.getItem(KEY);
		return v === 'granted' || v === 'denied' ? v : null;
	} catch {
		return null;
	}
}

function write(choice: Choice) {
	try {
		localStorage.setItem(KEY, choice);
	} catch {
		/* storage unavailable: the choice lasts for this visit only */
	}
}

function loadClarity(id: string) {
	if (loaded) return;
	loaded = true;
	const w = window as Window & { clarity?: ClarityFn };
	w.clarity =
		w.clarity ||
		function (...args: unknown[]) {
			(w.clarity!.q = w.clarity!.q || []).push(args);
		};
	const s = document.createElement('script');
	s.async = true;
	s.src = `https://www.clarity.ms/tag/${encodeURIComponent(id)}`;
	document.head.appendChild(s);
}

function signal(choice: Choice) {
	const clarity = (window as Window & { clarity?: ClarityFn }).clarity;
	clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: choice });
}

/** Call once on the client (root layout). */
export function initConsent() {
	if (!CLARITY_ID) return;
	consent.choice = read();
	if (consent.choice === 'granted') {
		loadClarity(CLARITY_ID);
		signal('granted');
	} else if (consent.choice === null) {
		consent.open = true;
	}
}

export function acceptCookies() {
	consent.choice = 'granted';
	consent.open = false;
	write('granted');
	if (CLARITY_ID) {
		loadClarity(CLARITY_ID);
		signal('granted');
	}
}

export function declineCookies() {
	const wasGranted = consent.choice === 'granted';
	consent.choice = 'denied';
	consent.open = false;
	write('denied');
	if (wasGranted && loaded) {
		signal('denied');
		// Erase Clarity cookies already set on this device
		(window as Window & { clarity?: ClarityFn }).clarity?.('consent', false);
	}
}

export function openCookieSettings() {
	consent.open = true;
}

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
