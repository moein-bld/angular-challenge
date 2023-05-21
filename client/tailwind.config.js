const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,

			primary: '#7367f0',
			secondary: '#f2f2f2',
			accent: '#565360',
			positive: '#21ba45',
			negative: '#ea5455',
			warning: '#ff9f43',
			dark: '#283046',
			dark_page: '#161d31',
		},
		extend: {},
	},
	plugins: [],
};
