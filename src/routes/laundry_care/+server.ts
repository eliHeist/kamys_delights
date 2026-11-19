import { redirect } from '@sveltejs/kit';

// Legacy URL from the previous kamysdelights.com site
export const prerender = false;

export function GET() {
	redirect(308, '/laundry-dry-cleaning');
}
