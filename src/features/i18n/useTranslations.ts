import { useAppSelector } from 'app/hooks';
import { useLazyGetTranslationQuery } from 'features/api/mockApiSlice';
import { selectLang, selectSupportedLangs, selectTranslation } from './i18nSlice';

export function useTranslations() {
  const t = useAppSelector(selectTranslation);
  const lang = useAppSelector(selectLang);
  const supportedLangs = useAppSelector(selectSupportedLangs);
  
  const [setLang] =  useLazyGetTranslationQuery()

  return {
    t,
    lang,
    setLang,
    supportedLangs,
  };
}
