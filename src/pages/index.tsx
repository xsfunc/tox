import React, { ReactElement } from 'react';
import { Welcome } from 'components/Welcome';
import { PageLayout } from 'layout/PageLayout';
import { MainLayout } from 'layout/main';

export default function Page() {
  return (
    <PageLayout title="Tox">
        <Welcome />
    </PageLayout>
  );
}

Page.getLayout = (page: ReactElement) => <MainLayout children={page} />;
