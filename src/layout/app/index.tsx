import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';

type Props = {
  children: ReactNode;
  maxWidth?: 'lg' | 'sm'
};

export function AppLayout({ children, maxWidth='lg' }: Props) {
  return (
    <>
      <AppHeader />
      <Container maxWidth={maxWidth} sx={{ minHeight: `calc(100% - 72px)` }}>
        {children}
      </Container>
      <AppFooter />
    </>
  );
}
