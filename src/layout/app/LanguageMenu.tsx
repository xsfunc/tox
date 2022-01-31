import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';
import { MenuItem, IconButton, Menu, Tooltip } from '@mui/material';
import { useTranslations } from 'features/i18n/useTranslations';
import { Language } from 'features/i18n/i18nConfig';

export function LanguageMenu() {
  const [open, setOpen] = useState(null);
  const { t, lang, supportedLangs, setLang } = useTranslations();

  const handleOpen = (e) => setOpen(e.currentTarget);
  const handleClose = () => setOpen(null);

  const changeLang = (lang: Language) => () => {
    setLang(lang);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t.changeLang} placement="bottom">
        <IconButton
          onClick={handleOpen}
          sx={{
            mr: 1,
            ...(open && { bgcolor: 'action.selected' }),
          }}
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>

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
        {Object.entries(supportedLangs).map(([code, name]: [Language, string]) => (
          <MenuItem key={code} selected={code === lang} onClick={changeLang(code)}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
