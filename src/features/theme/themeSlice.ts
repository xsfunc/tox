import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

type ThemeMode = 'dark' | 'light';

interface ThemeState {
  themeMode: ThemeMode;
}

const initialState: ThemeState = {
  themeMode: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeModeChanged: (theme, action: PayloadAction<ThemeMode>) => {
      theme.themeMode = action.payload;
    },
  },
});

export const { themeModeChanged } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;
