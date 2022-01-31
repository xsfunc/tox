import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { useTranslations } from 'features/i18n/useTranslations';
import { useDialog } from 'features/dialog/useDialog';
import { Paper, IconButton, Typography, Stack } from '@mui/material';
import { SwapToken } from './SwapToken';
import { SwapButton } from './SwapButton';
import { SwapTypeButton } from './SwapTypeButton';
import { snackbarAdded } from 'features/snackbar/snackbarSlice';
import { useAppDispatch } from 'app/hooks';
import type { DialogState } from 'features/dialog/dialogSlice';

const dialog: DialogState = {
  dialogType: 'SwapSettings',
  dialogProps: {},
};

export function Swap() {
  const { open } = useDialog(dialog);
  const { t } = useTranslations();

  const dispatch = useAppDispatch();
  const reloadData = () => dispatch(snackbarAdded({ message: 'Data reloaded' }));

  return (
    <Paper elevation={8} sx={{ px: 2, pb: 2, pt: 1, mt: 2 }}>
      <Stack sx={{ mb: 2 }} direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{t.swap}</Typography>

        <Stack direction="row" alignItems="center">
          <IconButton onClick={reloadData} aria-label="reload">
            <ReplayRoundedIcon />
          </IconButton>

          <IconButton onClick={open} aria-label="settings">
            <SettingsRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>

      <SwapToken type="input" />
      <SwapTypeButton />
      <SwapToken type="output" />
      <SwapButton />
    </Paper>
  );
}
