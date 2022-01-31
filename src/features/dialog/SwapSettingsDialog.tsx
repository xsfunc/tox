import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useDialog } from './useDialog';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectSlippage, settingsUpdated, SlippageVariants } from 'features/swap/swapSlice';

export default function SwapSettingsDialog() {
  const dispatch = useAppDispatch();
  const slippageSettings = useAppSelector(selectSlippage);
  const [slippage, setSlippage] = useState<SlippageVariants>(slippageSettings);
  const { close } = useDialog();

  const handleAlignment = (_, newValue: SlippageVariants) => setSlippage(newValue);
  const saveSwapSettings = () => {
    dispatch(settingsUpdated({ slippage }));
    close();
  };

  return (
    <Dialog fullWidth maxWidth="sm" onClose={close} open>
      <DialogTitle sx={{ mb: 3 }}>Swap settings</DialogTitle>

      <DialogContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Slippage Tolerance</Typography>

          <ToggleButtonGroup size="small" value={slippage} onChange={handleAlignment} exclusive>
            <ToggleButton value={0.3} aria-label="0.3">
              0.3%
            </ToggleButton>
            <ToggleButton value={0.5} aria-label="0.5">
              0.5%
            </ToggleButton>
            <ToggleButton value={1} aria-label="0.5">
              1%
            </ToggleButton>
            <ToggleButton value={2} aria-label="0.5">
              2%
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={saveSwapSettings}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
