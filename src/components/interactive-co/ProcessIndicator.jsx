import { useEffect, useState } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const Element = ({ data: { media, subtitle } = {}, active, sx }) => {
  const theme = useTheme();
  return (
    <Stack spacing={1} alignItems="flex-start" sx={{ opacity: active ? 0.9 : 0.4, ...sx }}>
      <Box width="60px" height="4px" bgcolor="text.primary" borderRadius="4px" />
      <Box
        p={1.5}
        lineHeight={0}
        bgcolor="#121212"
        boxShadow={`0px 0px 12px -6px ${theme.palette.text.primary}`}
        borderRadius="12px"
      >
        <img src={media} style={{ width: '24px' }} />
      </Box>
      <Typography lineHeight="1.2rem" fontWeight={600}>
        {subtitle}
      </Typography>
    </Stack>
  );
};

export const ProcessIndicator = ({ data }) => {
  const [highlight, setHighlight] = useState(0);
  const size = data.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlight((v) => (v < size - 1 ? v + 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Stack flex={1} flexWrap="wrap" direction="row" justifyContent="space-between">
      {data.map((item, index) => (
        <Element
          key={index}
          data={item}
          active={highlight >= index}
          sx={{ marginLeft: '24px', marginTop: '24px', width: '112px' }}
        />
      ))}
    </Stack>
  );
};
