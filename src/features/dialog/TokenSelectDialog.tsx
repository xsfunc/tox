import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useDialog } from './useDialog';
import { TokenList } from 'components/TokenList';

export default function TokenSelectDialog() {
  const { close } = useDialog();

  return (
    <Dialog fullWidth maxWidth="sm" onClose={close} open>
      <DialogTitle>Select Token</DialogTitle>

      <DialogContent>
        <TokenList />
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
