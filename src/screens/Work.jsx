import { Grid, Stack, Typography } from '@mui/material';
import { GithubRepoCard } from '@components';
import { projects } from '@config';

export const Work = () => {
  return (
    <Stack flex={1} spacing={2}>
      <Typography variant="body2" textTransform="uppercase">
        A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
      </Typography>
      <Grid container>
        {projects?.map((repo) => (
          <Grid key={repo.github} item xs={12}>
            <GithubRepoCard repo={repo} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
