import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export type DialogType = null | 'SwapSettings' | 'TokenSelect';

export type DialogState = {
  dialogType: DialogType;
  dialogProps: object;
};

const initialState: DialogState = {
  dialogType: null,
  dialogProps: {},
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    dialogOpened: (_, action: PayloadAction<DialogState>) => action.payload,
    dialogClosed: () => initialState,
  },
});

export default dialogSlice.reducer;
export const { dialogOpened, dialogClosed } = dialogSlice.actions;
export const selectDialog = (state: RootState) => state.dialog;
export const selectDialogProps = (state: RootState) => state.dialog.dialogProps;
