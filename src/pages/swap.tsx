import { PageLayout } from 'layout/PageLayout';
import { ReactElement } from 'react';
import { Swap } from 'features/swap/Swap';
import { styled } from '@mui/material';
import { AppLayout } from 'layout/app';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

export default function Page() {
  return (
    <PageLayout title="Swap">
      <RootStyle>
        <Swap />
      </RootStyle>
    </PageLayout>
  );
}

Page.getLayout = (page: ReactElement) => <AppLayout maxWidth='sm' children={page} />;
