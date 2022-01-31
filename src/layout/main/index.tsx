import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { MainHeader } from './MainHeader';
import { MainFooter } from './MainFooter';

type Props = {
  children: ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <Container maxWidth="lg">{children}</Container>
      <MainFooter />
    </>
  );
}
