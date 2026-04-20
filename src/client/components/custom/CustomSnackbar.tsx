import { useSnackbar } from '@client/contexts/snackbar/SnackbarContext';
import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export const CustomSnackbar = (): React.JSX.Element => {
	const { snackbarOpen, snackbarMessage, snackbarColor, setSnackbarOpen } = useSnackbar();

	return (
		<Snackbar
			open={snackbarOpen}
			autoHideDuration={5000}
			onClose={() => { setSnackbarOpen(false); }}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert
				severity={snackbarColor}
				variant='filled'
				sx={{ width: '100%' }}
			>
				{snackbarMessage}
			</Alert>
		</Snackbar>
	);
};
