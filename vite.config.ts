import adapter from '@sveltejs/adapter-vercel';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Vercel adapter. Every content page is prerendered to static HTML (see src/routes/+layout.ts);
			// only the legacy-URL redirects run as tiny serverless functions.
			// Swap for @sveltejs/adapter-netlify or @sveltejs/adapter-cloudflare if hosting changes.
			adapter: adapter(),
			paths: {
				origin: 'https://www.kamysdelights.com'
			},
			prerender: {
				entries: ['*', '/sitemap.xml', '/robots.txt'],
				handleHttpError: 'fail'
			}
		})
	]
});
