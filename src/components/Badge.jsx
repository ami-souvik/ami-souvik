import { createElement } from 'react';
import { Box, keyframes, useTheme } from '@mui/material';

const spin = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`;

export const Badge = ({ id, label, icon }) => {
  const theme = useTheme();
  const badgePathId = `${id}-path`;
  return (
    <Box
      position="relative"
      width={160}
      height={160}
      p={1}
      borderRadius="50%"
      border={`2px solid ${theme.palette.primary.main}`}
      sx={{
        animation: `${spin} 10s linear infinite`,
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          id={badgePathId}
          /*
          M (CENTER_X - RADIUS), CENTER_Y
          a RADIUS,RADIUS 0 1,1 (2 * RADIUS),0
          RADIUS,RADIUS 0 1,1 (-2 * RADIUS),0
          */
          d="M 10, 50
            a 40,40 0 1,1 80,0
            40,40 0 1,1 -80,0"
          fill="transparent"
        ></path>
        <text style={{ fill: theme.palette.primary.main }}>
          <textPath href={`#${badgePathId}`}>{label}</textPath>
        </text>
      </svg>
      <Box position="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
        {createElement(icon, { fontSize: 'large' })}
      </Box>
    </Box>
  );
};
