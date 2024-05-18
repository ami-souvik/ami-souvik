import { Children } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

export const Section = ({ border, children }) => {
  const theme = useTheme();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const spacing = mdw ? 2 : 4;
  return (
    <Grid
      container
      border={border && `1px solid ${theme.palette.text.primary}`}
      spacing={spacing}
      sx={{
        width: '100%',
        padding: mdw
          ? `24px ${spacing * 8 + 12}px ${spacing * 8 + 24}px 12px`
          : `24px ${spacing * 8 + 48}px ${spacing * 8 + 24}px 48px`,
        marginY: '24px',
        marginLeft: 0,
      }}
    >
      {Children.map(children, (element, index) => (
        <Grid key={index} item xs={mdw ? 12 : 6}>
          {element}
        </Grid>
      ))}
    </Grid>
  );
};
