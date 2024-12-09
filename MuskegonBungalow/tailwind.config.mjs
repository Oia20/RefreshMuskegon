/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sage: {
					50: '#f6f7f6',
					100: '#e3e5e3',
					200: '#c7cbc7',
					300: '#a5aca5',
					400: '#848c84',
					500: '#6b746b',
					600: '#555d55',
					700: '#444944',
					800: '#363936',
					900: '#2d302d',
				},
			},
		},
	},
	plugins: [],
}
