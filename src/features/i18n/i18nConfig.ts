export type Language = 'en' | 'ru';
export type SupportedLanguages = {
  [K in Language]: string;
};

export interface Translation {
  themeMode: string;
  changeLang: string;
  connect: string;
  disconnect: string;
  swap: string;
  pools: string;
  balance: string;
  pay: string;
  recieve: string;
  about: string;
  help: string;
  docs: string;
  privacy: string;
}

export const supportedLangs = {
  en: 'English',
  ru: 'Русский',
} as SupportedLanguages;

export const defaultLang: Language = 'en';
export const defaultTranslation = {
  themeMode: 'Theme mode',
  changeLang: 'Change language',
  connect: 'Connect Wallet',
  disconnect: 'Disconnect',
  swap: 'Swap',
  pools: 'Pools',
  balance: 'Balance:',
  about: 'About',
  help: 'Help Center',
  docs: 'Docs',
  privacy: 'Privacy',
  pay: 'You pay',
  recieve: 'You recieve'
} as Translation;
