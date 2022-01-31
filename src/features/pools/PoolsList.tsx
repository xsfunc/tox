import { Typography, Card, CardHeader, CardContent, Pagination, Divider } from '@mui/material';
import { BasicTable } from 'components/BasicTable';
import { useGetPoolsQuery } from 'features/api/mockApiSlice';
import { PoolTableRow } from './PoolTableRow';

export function PoolsList() {
  const { data: pools } = useGetPoolsQuery();

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardHeader title=" Your Pools" />
        <CardContent>
          <Typography color="text.secondary">Saved pools will appear here</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="All Pools" />
        
        <BasicTable>
          {pools?.map((pool, index) => (
            <PoolTableRow key={pool.id} index={index} {...pool} />
          ))}
        </BasicTable>
        <Divider />

        <CardContent sx={{ px: 1, display: 'flex', flexDirection: 'row-reverse' }}>
          <Pagination count={5} />
        </CardContent>
      </Card>
    </>
  );
}
