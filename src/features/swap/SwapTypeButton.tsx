import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import { IconButton, Stack } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { tokenTypeSwapped } from './swapSlice';

export function SwapTypeButton() {
  const dispatch = useAppDispatch();
  const swapTokensType = () => dispatch(tokenTypeSwapped());

  return (
    <Stack direction="row">
      <IconButton onClick={swapTokensType} sx={{ mx: 'auto', mb: 1 }} aria-label="replace">
        <SwapVertRoundedIcon />
      </IconButton>
    </Stack>
  );
}
