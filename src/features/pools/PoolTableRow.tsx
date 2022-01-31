import { Avatar, AvatarGroup, Stack, TableCell, TableRow } from '@mui/material';
import { Token } from 'components/TokenItem';

export type Pool = {
  id: string;
  tvl: string;
  volume24h: string;
  volume7d: string;
  index: number;
  token0: Token;
  token1: Token;
};

export function PoolTableRow({ index, tvl, volume24h, volume7d, token0, token1 }: Pool) {
  return (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell component="th" scope="row">
        <Stack direction="row" alignItems="center">
          <AvatarGroup sx={{ alignItems: 'center', mr: 1 }} >
            <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src={token0.logoURI} />
            <Avatar sx={{ width: 30, height: 30 }} alt="Travis Howard" src={token1.logoURI} />
          </AvatarGroup>
          {token0.symbol} / {token1.symbol}
        </Stack>
      </TableCell>
      <TableCell align="right">{tvl}</TableCell>
      <TableCell align="right">{volume24h}</TableCell>
      <TableCell align="right">{volume7d}</TableCell>
    </TableRow>
  );
}
