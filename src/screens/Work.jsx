import React, { useEffect, useState } from 'react';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { GithubRepoCard } from '@components';

export const Work = () => {
  const [repos, setRepos] = useState([]);
  const fetchRepos = () => {
    fetch(`https://api.github.com/users/heres-sav/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      });
  };
  useEffect(() => {
    fetchRepos();
  }, []);
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack flex={1} spacing={2}>
      <Typography variant="body2" textTransform="uppercase">
        A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
      </Typography>
      <Grid container spacing={2}>
        {repos.map((each) => (
          <Grid item xs={mdw ? 12 : 6}>
            <GithubRepoCard data={each} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
