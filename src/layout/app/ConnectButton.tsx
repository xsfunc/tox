import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useLazyConnectWalletQuery } from 'features/api/mockApiSlice';
import { useTranslations } from 'features/i18n/useTranslations';
import { snackbarAdded } from 'features/snackbar/snackbarSlice';
import { selectWallet, walletDisconnected } from 'features/wallet/walletSlice';
import { shortAddress } from 'utils';

export function ConnectButton() {
  const dispatch = useAppDispatch();
  const { t } = useTranslations();
  const { isConnected, address } = useAppSelector(selectWallet);
  const [connectWallet] = useLazyConnectWalletQuery();

  const disconnect = () => {
    dispatch(walletDisconnected());
    dispatch(snackbarAdded({message: 'Wallet disconnected'}))
  };

  const text = isConnected ? `${t.disconnect} ${shortAddress(address)}` : t.connect;
  const handleClick = isConnected ? disconnect : () => connectWallet(null, false);

  return (
    <Button onClick={handleClick} variant="contained">
      {text}
    </Button>
  );
}
