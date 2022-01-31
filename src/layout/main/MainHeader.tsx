import NextLink from 'next/link';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography, Stack } from '@mui/material';
import { HEADER } from 'config';
import { Logo } from 'components/Logo';
import { cssStyles } from 'utils/cssStyles';
import useOffSetTop from 'hooks/useOffSetTop';
import { paths } from 'routes';

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

export function MainHeader() {
  const theme = useTheme();
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />
          <Stack direction="column" sx={{ ml: 2 }}>
            <Typography fontWeight={'bold'}>TOX</Typography>
            <Typography variant="body2" color="text.secondary">
              Ton Dex
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />
          <NextLink href={paths.swap} passHref>

          <Button variant="contained">Launch app</Button>
          </NextLink>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
