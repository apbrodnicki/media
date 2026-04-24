import { SnackbarProvider } from '@client/contexts/snackbar/SnackbarProvider';
import '@client/css/Runner.css';
import { routes } from '@client/models/routes';
import { Box, Grid, Paper } from '@mui/material';
import { Link, Outlet, useLocation } from '@tanstack/react-router';
import { CustomSnackbar } from './custom/CustomSnackbar';
import { Footer } from './runner/Footer';
import { Header } from './runner/Header';

export const App = (): React.JSX.Element => {
	const location = useLocation();

	return (
		<Box className='page-layout'>
			<SnackbarProvider>
				<Header />
				<Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, width: '100%' }}>
					{location.pathname === '/' ? (
						<Grid container spacing={2} sx={{ width: '85%' }}>
							{Object.values(routes).map(routeDefinition => (
								<Link to={routeDefinition.path} key={routeDefinition.title}>
									<Grid size={{ xs: 12, sm: 6 }}>
										<Paper elevation={1}>
											{routeDefinition.title}
										</Paper>
									</Grid>
								</Link>
							))}
						</Grid>
					) : (
						<Outlet />
					)}
				</Box>
				<Footer />
				<CustomSnackbar />
			</SnackbarProvider>
		</Box>
	);
};
