import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack, Avatar } from '@mui/material';
import { paths } from 'routes';
import { Iconify } from 'components/Iconify';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled('img')({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

const tokensImages = [
  "https://ton.org/download/toncoin_symbol.png",
  "https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png",
  "https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0/logo.png",
  "https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1/logo.png",
  "https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a/logo.png"
]

export function Welcome() {
  return (
    <>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/images/overlay.svg"
        />

        <HeroImgStyle alt="hero" src="https://ton.org/img/img_1.svg" />

        <Container>
          <ContentStyle>
            <Typography fontWeight='normal' variant="h1" sx={{ color: 'common.white' }}>
              TOX
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                &nbsp;PROTOCOL
              </Typography>
            </Typography>

            <Typography sx={{ color: 'common.white' }}>
              Swap, earn, and build <br/>on the leading decentralized crypto trading protocol.
            </Typography>

            <NextLink href={paths.swap} passHref>
              <Button
                sx={{ width: 200 }}
                size="large"
                variant="contained"
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Launch app
              </Button>
            </NextLink>

            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: 'primary.light' }}>
                Available Tokens
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                {tokensImages.map((image, index) => (
                  <Avatar
                    key={index}
                    src={image}
                  />
                ))}
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
