import { Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { CenteredBox } from '../custom/Styles';

export const Header = (): React.JSX.Element => {
	return (
		<CenteredBox className='runner'>
			<Link to='/' className='link'>
				<Typography>
					Media Archive
				</Typography>
			</Link>
		</CenteredBox>
	);
};
