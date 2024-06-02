/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: 'rgb(10, 132, 255)',
				green: 'rgb(50, 215, 75)',
				orange: 'rgb(255, 159, 10)',
				yellow: 'rgb(255, 214, 10)',
				red: 'rgb(255, 69, 58)',
				gray: {
					100: '#636366',
					200: 'rgba(118, 118, 128, 0.24)',
					300: 'rgba(235, 235, 245, 0.6)',
				},
				zinc: '#202020',
			},
		},
	},
	plugins: [],
}
