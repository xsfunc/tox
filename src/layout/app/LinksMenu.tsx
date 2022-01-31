import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { MenuItem, IconButton, Menu } from '@mui/material';
import { useTranslations } from 'features/i18n/useTranslations';
import { paths } from 'routes';
import type { Translation } from 'features/i18n/i18nConfig';

type Item = {
  key: keyof Translation;
  path: string;
};

const items: Item[] = [
  {
    key: 'about',
    path: paths.about,
  },
  {
    key: 'help',
    path: paths.help,
  },
  {
    key: 'docs',
    path: paths.docs,
  },
  {
    key: 'privacy',
    path: paths.privacy,
  },
];

export function LinksMenu() {
  const [open, setOpen] = useState(null);
  const { t } = useTranslations();

  const handleOpen = (e) => setOpen(e.currentTarget);
  const handleClose = () => setOpen(null);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          ...(open && { bgcolor: 'action.selected' }),
        }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 200,
        }}
      >
        {items.map(({ key, path }: Item) => (
          <MenuItem key={path}>{t[key]}</MenuItem>
        ))}
      </Menu>
    </>
  );
}
