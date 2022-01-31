import { useAppDispatch, useAppSelector } from 'app/hooks';
import { MessageSnackbar } from './MessageSnackbar';
import { selectSnackbarById, selectSnackbarTotal, snackbarRemoved } from './snackbarSlice';

export default function Snackbar({ id }) {
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectSnackbarTotal);
  const data = useAppSelector((state) => selectSnackbarById(state, id));

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    dispatch(snackbarRemoved(id));
  };

  return <MessageSnackbar {...data} total={total} handleClose={handleClose} />;
}
