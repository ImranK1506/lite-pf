/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: { extend: {} },
	plugins: [require('@tailwindcss/typography') ,require('daisyui')],
	daisyui: {
		themes: ['winter', 'night'],
		darkMode:['selector', '[data-theme="night"]'],
		// Example of adding a custom theme
		// themes: [
		// 	{
		// 		mytheme: {
		// 			primary: "#f3c614",
		// 			"primary-focus": "#f7ca4d",
		// 			"primary-content": "#000",
		//
		// 			secondary: "#f000b8",
		// 			"secondary-focus": "#bd0091",
		// 			"secondary-content": "#fff",
		//
		// 			accent: "#37cdbe",
		// 			"accent-focus": "#2aa79b",
		// 			"accent-content": "#fff",
		//
		// 			neutral: "#3d4451",
		// 			"neutral-focus": "#2a2e37",
		// 			"neutral-content": "#ffffff",
		// 		},
		// 	}
		// ]
	},
}
