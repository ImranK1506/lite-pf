/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['"DM Sans"', 'sans-serif'],
				body: ['"Fira Sans"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
	daisyui: {
		themes: ['winter', 'night']
	},
	darkMode: 'media',
}
