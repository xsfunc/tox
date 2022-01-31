import type { DialogType } from './dialogSlice';
import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { selectDialog } from './dialogSlice';

const SwapSettingsDialog = dynamic(() => import('features/dialog/SwapSettingsDialog'));
const TokenSelectDialog = dynamic(() => import('features/dialog/TokenSelectDialog'));

type Dialogs = {
  [key in DialogType]: ComponentType;
};

const dialogs: Dialogs = {
  ['SwapSettings']: SwapSettingsDialog,
  ['TokenSelect']: TokenSelectDialog,
};

export function RootDialog() {
  const { dialogType, dialogProps } = useSelector(selectDialog);
  if (!dialogType) return null;

  const SpecificDialog = dialogs[dialogType];
  return <SpecificDialog {...dialogProps} />;
}
