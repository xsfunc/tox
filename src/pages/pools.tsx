import { PageLayout } from 'layout/PageLayout';
import { ReactElement } from 'react';
import { styled } from '@mui/material';
import { AppLayout } from 'layout/app';
import { PoolsList } from 'features/pools/PoolsList';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

export default function Page() {
  return (
    <PageLayout title="Pools">
      <RootStyle>
        <PoolsList />
      </RootStyle>
    </PageLayout>
  );
}

Page.getLayout = (page: ReactElement) => <AppLayout children={page} />;
