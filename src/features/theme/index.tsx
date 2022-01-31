import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectTheme } from './themeSlice';

import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

type Props = {
  children: ReactNode;
};

export function CustomThemeProvider({ children }: Props) {
  const { themeMode } = useSelector(selectTheme);

  const themeOptions = useMemo(
    () => ({
      typography,
      breakpoints,
      shape: { borderRadius: 16 },
      palette: palette[themeMode],
      shadows: shadows[themeMode],
      customShadows: customShadows[themeMode],
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions as any);
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
