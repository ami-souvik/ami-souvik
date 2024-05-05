import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const Background = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary,
}));
