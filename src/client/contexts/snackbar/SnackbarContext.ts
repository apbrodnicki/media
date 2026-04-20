import type { AlertColor } from '@mui/material';
import { createContext, useContext } from 'react';

export interface ShowSnackbarProps {
	message: string;
	severity: AlertColor;
}

interface SnackbarContextProps {
	snackbarOpen: boolean;
	snackbarMessage: string;
	snackbarColor: AlertColor;
	showSnackbar: (showSnackbarProps: ShowSnackbarProps) => void;
	setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SnackbarContext = createContext<SnackbarContextProps | null>(null);

export const useSnackbar = (): SnackbarContextProps => {
	const snackbarContext = useContext(SnackbarContext);

	if (!snackbarContext) {
		throw new Error('Must use within SnackbarProvider.');
	}

	return snackbarContext;
};
