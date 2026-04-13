import { getUserRatingsPieSlices } from '@client/helper/helper';
import type { CsvRecord } from '@client/models/models';
import { PieChart } from '@mui/x-charts';
import React from 'react';

interface UserRatingsPieProps {
	records: CsvRecord[];
}

export const UserRatingsPie = ({ records }: UserRatingsPieProps): React.JSX.Element => {
	const pieSlices = getUserRatingsPieSlices(records);

	return (
		<PieChart
			series={[
				{
					data: pieSlices
				}
			]}
			width={400}
			height={200}
		/>
	);
};
