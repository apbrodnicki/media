import type { CsvRecord } from '@client/models/models';
import { useState } from 'react';
import { GenresBar } from './charts/GenresBar';
import { RatingsGauge } from './charts/RatingsGauge';
import { RatingsVotesScatter } from './charts/RatingsVotesScatter';
import { UserRatingsPie } from './charts/UserRatingsPie';
import { ImdbFileUpload } from './ImdbFileUpload';
import { MoviesAndShowsDataGrid } from './MoviesAndShowsDataGrid';

export const MoviesAndShows = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<ImdbFileUpload setCsvRecords={setCsvRecords} />
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
		</>
	);
};
