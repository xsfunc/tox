import { Container, Stack } from '@mui/material';
import { SocialLinks } from 'components/SocialButtons';
import { TonPrice } from './TonPrice';

export function AppFooter() {
  return (
    <Container maxWidth="lg">
      <Stack sx={{ py: 2 }} direction="row" justifyContent="space-between">
        <SocialLinks />
        <TonPrice />
      </Stack>
    </Container>
  );
}
