import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectTheme, themeModeChanged } from 'features/theme/themeSlice';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslations } from 'features/i18n/useTranslations';

const LightModeIcon = dynamic(() => import('@mui/icons-material/LightModeRounded'));
const DarkModeIcon = dynamic(() => import('@mui/icons-material/DarkModeRounded'));

export function ThemeToggle() {
  const { themeMode } = useAppSelector(selectTheme);
  const { t } = useTranslations();
  const dispatch = useAppDispatch();
  const isLight = themeMode === 'light';

  const toggleTheme = () => {
    const newMode = isLight ? 'dark' : 'light';
    dispatch(themeModeChanged(newMode));
  };

  return (
    <Tooltip title={t.themeMode} placement="bottom">
      <IconButton onClick={toggleTheme}>
        {isLight ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
