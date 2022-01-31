import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import {
  defaultLang,
  defaultTranslation,
  Language,
  supportedLangs,
  SupportedLanguages,
  Translation,
} from './i18nConfig';

type LocaleState = {
  lang: Language;
  supportedLangs: SupportedLanguages;
  translation: Translation;
};

type LangChangedPayload = {
  lang: Language;
  translation: Translation;
};

const initialState: LocaleState = {
  lang: defaultLang,
  translation: defaultTranslation,
  supportedLangs,
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    langChanged: (state, action: PayloadAction<LangChangedPayload>) => {
      const { lang, translation } = action.payload;
      state.translation = translation;
      state.lang = lang;
    },
  },
});

export const selectLang = (state: RootState) => state.i18n.lang;
export const selectSupportedLangs = (state: RootState) => state.i18n.supportedLangs;
export const selectTranslation = (state: RootState) => ({
  ...defaultTranslation,
  ...state.i18n.translation,
});

export const { langChanged } = i18nSlice.actions;
export default i18nSlice.reducer;
