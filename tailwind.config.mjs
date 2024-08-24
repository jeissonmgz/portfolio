/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'bounce-little': 'bounce-little 3s ease infinite',
			  },
			  keyframes: {
				'bounce-little': {
				  '0%, 100%': {
					transform: 'translateY(-10%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
				 },
				  '50%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
				}
				},
			  },
		},
	},
	plugins: [],
}
