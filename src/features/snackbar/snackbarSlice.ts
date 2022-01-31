import { createEntityAdapter, createSelector, createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const snackbarNames = {
  mint: 'mint',
  message: 'message',
};

export const snackbarAdapter = createEntityAdapter();

type Data = {
  message: string;
};

const transformData = (data: Data) => ({
  id: nanoid(),
  snackbarType: 'message',
  severity: 'info',
  ...data,
});

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: snackbarAdapter.getInitialState(),
  reducers: {
    snackbarAddedMany: {
      reducer: snackbarAdapter.addMany,
      prepare: (data) => ({
        payload: data.map(transformData),
      }),
    },

    snackbarAdded: {
      reducer: snackbarAdapter.addOne,
      prepare: (data) => ({ payload: transformData(data) }),
    },

    snackbarRemoved: snackbarAdapter.removeOne,
  },
});

const selectSnackbar = (state: RootState) => state.snackbar;

export default snackbarSlice.reducer;
export const { snackbarAddedMany, snackbarAdded, snackbarRemoved } = snackbarSlice.actions;

export const {
  selectById: selectSnackbarById,
  selectIds: selectSnackbarIds,
  selectTotal: selectSnackbarTotal,
} = snackbarAdapter.getSelectors(selectSnackbar);

export const selectFirstSnackbarId = createSelector(selectSnackbarIds, (ids) => ids?.[0]);
