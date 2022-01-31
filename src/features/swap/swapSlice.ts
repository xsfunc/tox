import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export type TokenState = {
  name: string;
  symbol: string;
  logoURI: string;
  price?: number;
  balance?: number;
};

export type SlippageVariants = 0.3 | 0.5 | 1;
export type TokenType = 'input' | 'output';
type SwapSettings = {
  slippage: SlippageVariants;
};

type SelectedToken = {
  type: TokenType;
  symbol: string;
  logoURI: string;
};

export type SwapState = {
  input: TokenState | null;
  output: TokenState | null;
  settings: SwapSettings;
};

const initialState: SwapState = {
  input: {
    name: 'Toncoin',
    symbol: 'TONCOIN',
    logoURI: 'https://ton.org/download/toncoin_symbol.png',
    price: 2.55,
    balance: 88.434,
  },
  output: {
    name: 'True USD',
    symbol: 'TUSD',
    logoURI:
      'https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png',
    price: 0.996,
    balance: 30.734,
  },
  settings: {
    slippage: 0.5,
  },
};

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    settingsUpdated: (state, { payload }: PayloadAction<SwapSettings>) => {
      state.settings = { ...state.settings, ...payload };
    },
    tokenSelected: (state, { payload }: PayloadAction<SelectedToken>) => {
      const { type, symbol, logoURI } = payload;
      state[type].logoURI = logoURI;
      state[type].symbol = symbol;
    },
    tokenTypeSwapped: (state) => {
      const inputCache = state.input;
      state.input = state.output;
      state.output = inputCache;
    },
  },
});

export default swapSlice.reducer;
export const { settingsUpdated, tokenSelected, tokenTypeSwapped } = swapSlice.actions;
export const selectSwap = (state: RootState) => state.swap;
export const selectSettings = (state: RootState) => state.swap.settings;
export const selectSlippage = (state: RootState) => state.swap.settings.slippage;
export const selectToken = (state: RootState, type: TokenType) => state.swap[type];
