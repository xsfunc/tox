import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type WalletState = {
  address: string | null;
  balance: number | null;
  isConnected: boolean;
};

const initialState = {
  address: null,
  balance: null,
  isConnected: false,
} as WalletState;

export type WalletConnected = {
  address: string;
  balance: number;
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    walletConnected: (state, { payload }: PayloadAction<WalletConnected>) => {
      state.address = payload.address;
      state.balance = payload.balance;
      state.isConnected = true;
    },
    walletDisconnected: () => initialState,
  },
});

export const selectWallet = (state: RootState) => state.wallet;
export const { walletConnected, walletDisconnected } = walletSlice.actions;
export default walletSlice.reducer;
