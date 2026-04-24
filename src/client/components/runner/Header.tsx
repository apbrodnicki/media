import { Typography } from '@mui/material';
import { CenteredBox } from '../custom/Styles';

export const Header = (): React.JSX.Element => {
	return (
		<CenteredBox className='runner'>
			<Typography>
				Media Archive
			</Typography>
		</CenteredBox>
	);
};
