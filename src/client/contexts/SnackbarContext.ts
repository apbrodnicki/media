import type { AlertColor } from '@mui/material';
import { createContext } from 'react';

export interface SnackbarSetProps {
	setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
	setSnackbarColor: React.Dispatch<React.SetStateAction<AlertColor>>;
}
export interface SnackbarContextProps extends SnackbarSetProps {
	snackbarOpen: boolean;
	snackbarMessage: string;
	snackbarColor: AlertColor;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
	snackbarOpen: false,
	setSnackbarOpen: () => {},
	snackbarMessage: '',
	setSnackbarMessage: () => {},
	snackbarColor: 'info',
	setSnackbarColor: () => {}
});
