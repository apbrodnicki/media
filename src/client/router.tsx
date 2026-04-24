import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { App } from './components/App';
import { MoviesAndShows } from './components/MoviesAndShows';
import { Music } from './components/Music';
import { routes } from './models/routes';

const rootRoute = createRootRoute({ component: App });

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/'
});

const moviesAndShowsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: routes.moviesAndShows.path,
	component: MoviesAndShows
});

const musicRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: routes.music.path,
	component: Music
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	moviesAndShowsRoute,
	musicRoute
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
