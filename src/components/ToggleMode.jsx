import { Box, Stack, keyframes, styled, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useApp } from '@context';

const right = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(12px);
  }
`;

const left = keyframes`
  from {
    transform: translateX(12px);
  }
  to {
    transform: translateX(0);
  }
`;

const Lever = styled(Box)(() => ({
  padding: '2px',
  borderRadius: '50px',
}));

export const ToggleMode = () => {
  const theme = useTheme();
  const { mode, toggleMode } = useApp();
  return (
    <Stack
      width="40px"
      padding="2px"
      direction="row"
      borderRadius="50px"
      bgcolor="primary.main"
      alignItems="center"
      onClick={toggleMode}
      sx={{ cursor: 'pointer' }}
    >
      <Box fontSize="1rem" lineHeight={0}>
        {mode == 'light' ? (
          <Lever sx={{ animation: `${left} 0.2s linear forwards` }}>
            <LightModeIcon fontSize="inherit" htmlColor={theme.palette.secondary.main} />
          </Lever>
        ) : (
          <Lever sx={{ animation: `${right} 0.2s linear forwards` }}>
            <DarkModeIcon fontSize="inherit" htmlColor={theme.palette.secondary.main} />
          </Lever>
        )}
      </Box>
    </Stack>
  );
};
