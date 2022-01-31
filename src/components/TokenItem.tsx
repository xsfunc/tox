import { ListItemAvatar, Avatar, ListItemButton, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectDialogProps } from 'features/dialog/dialogSlice';
import { useDialog } from 'features/dialog/useDialog';
import { tokenSelected } from 'features/swap/swapSlice';

export type Token = {
  key: string;
  name: string;
  address: string;
  symbol: string;
  logoURI: string;
};

export function TokenItem({ name, symbol, logoURI }: Token) {
  const dispatch = useAppDispatch();
  const { close } = useDialog();
  const { type } = useAppSelector(selectDialogProps);

  const selectToken = () => {
    dispatch(
      tokenSelected({
        type,
        symbol,
        logoURI,
      })
    );
    close();
  };

  return (
    <ListItemButton onClick={selectToken}>
      <ListItemAvatar>
        <Avatar alt={name} src={logoURI} />
      </ListItemAvatar>
      <ListItemText id={symbol} primary={symbol} secondary={name} />
    </ListItemButton>
  );
}
