import { SnackbarProvider } from '@client/contexts/snackbar/SnackbarProvider';
import '@client/css/App.css';
import '@client/css/Runner.css';
import { routes } from '@client/models/routes';
import { Box, Grid, Paper, Typography } from '@mui/material';
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
								<Grid size={{ xs: 12, md: 6 }} key={routeDefinition.title}>
									<Link to={routeDefinition.path} className='link'>
										<Paper elevation={1} sx={{ p: 5 }}>
											<Typography>
												{routeDefinition.title}
											</Typography>
										</Paper>
									</Link>
								</Grid>
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
