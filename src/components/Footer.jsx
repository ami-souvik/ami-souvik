import React from 'react';
import { List, Stack, Typography, useMediaQuery } from '@mui/material';
import { FooterItem } from '@components';

export const Footer = () => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack
      padding={mdw ? '6px 24px' : '12px 48px'}
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Stack direction="row">
        <List>
          <FooterItem heading>Support</FooterItem>
          <FooterItem>Help Center</FooterItem>
          <FooterItem>Contact Us</FooterItem>
          <FooterItem>Team</FooterItem>
        </List>
      </Stack>
      <Typography variant="body2" fontWeight="400">
        © 2024 Sav • Kolkata
      </Typography>
    </Stack>
  );
};
