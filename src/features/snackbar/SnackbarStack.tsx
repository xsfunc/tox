import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux';
import { selectFirstSnackbarId } from './snackbarSlice';

const Snackbar = dynamic(() => import('features/snackbar/Snackbar'));

export default function SnackbarStack() {
  const id = useSelector(selectFirstSnackbarId);

  if (id === undefined) return null;
  return <Snackbar key={id} id={id} />;
}
