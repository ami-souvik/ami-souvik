import { Switch, styled, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useApp } from '@context';

const Toggle = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 36,
  padding: 0,
  borderRadius: 20,
  boxShadow: `0px 0px 12px -4px ${theme.palette.primary.main}44`,

  '& .MuiSwitch-switchBase': {
    margin: 3,
    padding: 3,
    backgroundColor: 'transparent',
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'transparent',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    color: 'white',
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
    backgroundColor: 'transparent',
    borderRadius: 20,
    // border: `1px solid ${theme.palette.text.primary}`,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary,
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
