import { Stack, Typography } from '@mui/material';
import { useGetCoinPriceQuery } from 'features/api/tonApiSlice';
import { Logo } from 'components/Logo';

export function TonPrice() {
  const { data: price } = useGetCoinPriceQuery();

  if (!price) return null;
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h6">${price}</Typography>
      <Logo disabledLink />
    </Stack>
  );
}
