import { getGenreFrequency } from '@client/helper/helper';
import type { CsvRecord } from '@client/models/models';
import { BarChart } from '@mui/x-charts';
import React from 'react';

interface GenresBarProps {
	records: CsvRecord[];
}

export const GenresBar = ({ records }: GenresBarProps): React.JSX.Element => {
	const genreFrequency = getGenreFrequency(records);

	return (
		<BarChart
			series={[{ data: Object.values(genreFrequency) }]}
			xAxis={[{
				scaleType: 'band',
				data: Object.keys(genreFrequency)
			}]}
			height={400}
			width={1800}
		/>
	);
};
