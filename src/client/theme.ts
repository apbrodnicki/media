import AnironBold from '@client/assets/font/AnironBold.ttf';
import AnironRegular from '@client/assets/font/AnironRegular.ttf';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Aniron';
					src: url('${AnironRegular}') format('truetype');
					font-weight: 400;
					font-style: normal;
				}
				@font-face {
					font-family: 'Aniron';
					src: url('${AnironBold}') format('truetype');
					font-weight: 700;
					font-style: normal;
				}
			`
		}
	},
	typography: {
		fontFamily: 'Aniron',
		allVariants: {
			color: 'black'
		}
	}
});
