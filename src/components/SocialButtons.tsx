import { alpha } from '@mui/material/styles';
import { Link, Stack, Button, Tooltip, IconButton } from '@mui/material';
import { social } from 'routes';
import { Iconify } from 'components/Iconify';

const SOCIALS = [
  {
    name: 'Telegram channel',
    icon: 'bx:bxl-telegram',
    socialColor: '#E02D69',
    path: social.telegram,
  },
  {
    name: 'Twitter',
    icon: 'eva:twitter-fill',
    socialColor: '#00AAEC',
    path: social.twitter,
  },
  {
    name: 'Discord',
    icon: 'akar-icons:discord-fill',
    socialColor: '#1877F2',
    path: social.discord,
  },
];

export function SocialLinks({ initialColor = false, simple = true, sx, ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;

        return simple ? (
          <Link key={name} href={path}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...(initialColor && {
                    color: socialColor,
                    '&:hover': {
                      bgcolor: alpha(socialColor, 0.08),
                    },
                  }),
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
