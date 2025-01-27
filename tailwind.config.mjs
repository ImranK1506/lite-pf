/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Lexend', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography') ,require('daisyui')],
	daisyui: {
		themes: ['winter', 'night'],
		},
	darkMode:['selector', '[data-theme="night"]'],
}
