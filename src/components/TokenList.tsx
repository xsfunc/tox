import { List, TextField, Paper } from '@mui/material';
import { useGetTokensQuery } from 'features/api/mockApiSlice';
import { TokenItem } from './TokenItem';

export function TokenList() {
  const { data: tokens } = useGetTokensQuery();

  return (
    <>
      <TextField sx={{ my: 2 }} fullWidth label="Search token" />

      <Paper elevation={0} sx={{ border: (theme) => `solid 1px ${theme.palette.divider}` }}>
        <List disablePadding sx={{ height: 700, overflowY: 'scroll', mt: 1 }}>
          {tokens?.map((token) => (
            <TokenItem key={token.symbol} {...token} />
          ))}
        </List>
      </Paper>
    </>
  );
}
