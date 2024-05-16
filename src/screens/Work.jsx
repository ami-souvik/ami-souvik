import { Box, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import { WorkSummary } from '@components';
import { projects } from '@config';

const SDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.text.primary}`,
}));

export const Work = () => {
  return (
    <Stack flex={1} spacing={2}>
      <Typography variant="body2" textTransform="uppercase">
        A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
      </Typography>
      <Stack spacing={2}>
        {projects?.map((repo, index) => (
          <>
            <SDivider />
            <Grid item xs={12}>
              <WorkSummary index={index + 1} repo={repo} />
            </Grid>
          </>
        ))}
        <SDivider />
      </Stack>
    </Stack>
  );
};
