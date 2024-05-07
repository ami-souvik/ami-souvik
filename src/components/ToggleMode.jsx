import { Switch, styled, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useApp } from '@context';

const Toggle = styled(Switch)(({ theme }) => ({
  width: 44,
  height: 28,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 1,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}22`,
    },
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
      transform: 'translateX(16px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.text.primary,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.text.primary,
    width: 24,
    height: 24,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.text.primary,
    borderRadius: 20,
  },
}));

export const ToggleMode = () => {
  const theme = useTheme();
  const { toggleMode } = useApp();
  return (
    <Toggle
      onClick={toggleMode}
      checkedIcon={<LightModeIcon />}
      icon={<DarkModeIcon htmlColor={theme.palette.secondary.main} />}
    />
  );
};
