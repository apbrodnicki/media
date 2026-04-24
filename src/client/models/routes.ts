interface RouteDefinition {
	title: string;
	path: string;
}

type RouteKeys = 'moviesAndShows' | 'music';

export type RouteRecords = Record<RouteKeys, RouteDefinition>;

export const routes: RouteRecords = {
	moviesAndShows: {
		title: 'Movies and Shows',
		path: '/movies-and-shows'
	},
	music: {
		title: 'Music',
		path: '/music'
	}
} as const;
