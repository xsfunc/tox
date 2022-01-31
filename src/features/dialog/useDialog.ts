import { useAppDispatch } from 'app/hooks';
import { dialogClosed, dialogOpened } from './dialogSlice';
import { DialogState } from './dialogSlice';

export function useDialog<T extends DialogState>(dialog: T) {
  const dispatch = useAppDispatch();
  const open = () => dispatch(dialogOpened(dialog));
  const close = () => dispatch(dialogClosed());

  return { open, close, dispatch };
}
