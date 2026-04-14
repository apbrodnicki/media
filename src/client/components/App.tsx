import { SnackbarContext } from '@client/contexts/SnackbarContext';
import type { CsvRecord } from '@client/models/models';
import { Box } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { useState } from 'react';
import { GenresBar } from './charts/GenresBar';
import { RatingsGauge } from './charts/RatingsGauge';
import { RatingsVotesScatter } from './charts/RatingsVotesScatter';
import { UserRatingsPie } from './charts/UserRatingsPie';
import { CustomSnackbar } from './custom/CustomSnackbar';
import { FileUpload } from './FileUpload';
import { MoviesAndShowsDataGrid } from './MoviesAndShowsDataGrid';
import { Footer } from './runner/Footer';
import { Header } from './runner/Header';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>('');
	const [snackbarColor, setSnackbarColor] = useState<'success' | 'info' | 'warning' | 'error'>('info');

	return (
		<Box className='page-layout'>
			<SnackbarContext.Provider value={{ snackbarOpen, setSnackbarOpen, snackbarMessage, setSnackbarMessage, snackbarColor, setSnackbarColor }}>
				<Header />
				<Box sx={{ display: 'flex', flex: 1 }}>
					<FileUpload setCsvRecords={setCsvRecords} />
					{csvRecords.length > 0 && (
						<>
							<MoviesAndShowsDataGrid records={csvRecords} />
							<GenresBar records={csvRecords} />
							<RatingsGauge records={csvRecords} />
							<RatingsVotesScatter records={csvRecords} />
							<UserRatingsPie records={csvRecords} />
							{/* <UserRatingsD3Bar records={csvRecords} /> */}
						</>
					)}
					<Outlet />
				</Box>
				<Footer />
				<CustomSnackbar />
			</SnackbarContext.Provider>
		</Box>
	);
};
