import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

type Props = {
  sx?: object;
  icon: string;
  width: number,
  height: number,
};

export function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
