import Head from 'next/head';
import { forwardRef, ReactElement, ReactFragment } from 'react';
import { Box } from '@mui/material';

type Props = {
  title: string;
  children: ReactElement;
};

export const PageLayout = forwardRef<ReactFragment, Props>(({ children, title, ...other }, ref) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));
