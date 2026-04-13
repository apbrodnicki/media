import '@client/css/index.css';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router';
import { theme } from './theme';

createRoot(document.getElementById('root') as Element).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>,
);
