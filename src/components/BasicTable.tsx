import { Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from '@mui/material';

export function BasicTable({ children }) {
  return (
    <TableContainer sx={{ minWidth: 800, mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell>Pool</TableCell>
            <TableCell align="right">TVL</TableCell>
            <TableCell align="right">Volume 24H</TableCell>
            <TableCell align="right">Volume 7D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
