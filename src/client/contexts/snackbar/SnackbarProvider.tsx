import type { AlertColor } from '@mui/material';
import { useState } from 'react';
import { ShowSnackbarProps, SnackbarContext } from './SnackbarContext';

export const SnackbarProvider = ({ children }: { children: React.ReactNode; }): React.JSX.Element => {
	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>('');
	const [snackbarColor, setSnackbarColor] = useState<AlertColor>('info');

	const showSnackbar = ({ message, severity }: ShowSnackbarProps): void => {
		setSnackbarOpen(true);
		setSnackbarMessage(message);
		setSnackbarColor(severity);
	};

	return (
		<SnackbarContext value={{ snackbarOpen, snackbarMessage, snackbarColor, showSnackbar, setSnackbarOpen }}>
			{children}
		</SnackbarContext>
	);
};
