import { Button } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { useLazyConnectWalletQuery } from 'features/api/mockApiSlice';
import { useTranslations } from 'features/i18n/useTranslations';
import { selectWallet } from 'features/wallet/walletSlice';

export function SwapButton() {
  const { t } = useTranslations();
  const { isConnected } = useAppSelector(selectWallet);
  const [connectWallet] = useLazyConnectWalletQuery();

  const text = isConnected ? t.swap : t.connect;
  const handleClick = isConnected ? () => {} : () => connectWallet();

  return (
    <Button onClick={handleClick} sx={{ mt: 2 }} fullWidth variant="contained" size="large">
      {text}
    </Button>
  );
}
