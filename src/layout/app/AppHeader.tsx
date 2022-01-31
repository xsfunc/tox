import NextLink from 'next/link';
import useOffSetTop from 'hooks/useOffSetTop';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link, AppBar, Toolbar, Container } from '@mui/material';
import { HEADER } from 'config';
import { Logo } from 'components/Logo';
import { cssStyles } from 'utils/cssStyles';
import { paths } from 'routes';
import { LinksMenu } from './LinksMenu';
import { ThemeToggle } from './ThemeToggle';
import { LanguageMenu } from './LanguageMenu';
import { useTranslations } from 'features/i18n/useTranslations';
import { ConnectButton } from './ConnectButton';

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

export function AppHeader() {
  const theme = useTheme();
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const { t } = useTranslations();

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

          <NextLink href={paths.swap} passHref>
            <Link sx={{ mx: 3 }} variant="h6" color="text.primary">
              {t.swap}
            </Link>
          </NextLink>

          <NextLink href={paths.pools} passHref>
            <Link variant="h6" color="text.primary">
              {t.pools}
            </Link>
          </NextLink>

          <Box sx={{ flexGrow: 1 }} />

          <ThemeToggle />
          <LanguageMenu />
          <ConnectButton/>
          <LinksMenu />
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
