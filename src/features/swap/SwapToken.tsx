import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, Avatar, Typography, Paper, Stack, TextField } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { useDialog } from 'features/dialog/useDialog';
import { selectToken } from './swapSlice';
import { useTranslations } from 'features/i18n/useTranslations';
import type { TokenType } from './swapSlice';
import type { DialogType } from 'features/dialog/dialogSlice';

const dialogType: DialogType = 'TokenSelect';

type Props = {
  type?: TokenType;
};

export function SwapToken({ type = 'input' }: Props) {
  const { t } = useTranslations();
  const { open } = useDialog({ dialogType, dialogProps: {type} });

  const token = useAppSelector((state) => selectToken(state, type));
  const label = type === 'input' ? t.pay : t.recieve;

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField sx={{ flexGrow: 1 }} label={label} type="number" />

        <Paper sx={{ p: 1, width: 200 }} elevation={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src={token.logoURI} />
            
            <Typography sx={{ flexGrow: 1 }}>{token.symbol}</Typography>
            <IconButton onClick={open}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Stack>

      <Stack sx={{ p: 1 }} direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="text.secondary" variant="body2">
          ${token.price}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Typography variant="body2">{t.balance}</Typography>
          <Typography fontWeight="bold" variant="body2">
            {token.balance}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
