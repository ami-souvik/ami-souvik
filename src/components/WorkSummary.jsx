import { useEffect, useState } from 'react';
import { Box, IconButton, Link, Stack, Typography, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Clickable } from '@components';
import { useRouter } from '@context';
import { fetchARepo } from '@webservices';

export const WorkSummary = ({ index, repo }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchARepo(repo.github).then(setData);
  }, []);
  const { navigate } = useRouter();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Stack direction={mdw ? 'column' : 'row'} spacing={2}>
      <Stack direction="row" spacing={2}>
        <Typography>{index}</Typography>
        <Box width={160} height={160} bgcolor="primary.main" sx={{ opacity: 0.2 }} />
      </Stack>
      <Stack marginLeft={mdw && '16px !important'} justifyContent="space-between">
        <Stack>
          <Typography variant="h5" fontWeight={800}>
            {data.description}
          </Typography>
          <Link target="_blank" href={data.homepage}>
            {data.homepage}
          </Link>
        </Stack>
        <Stack alignItems="flex-start">
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon fontSize="small" />
            <Typography>{data.name}</Typography>
            <IconButton onClick={() => window.open(data.html_url, '_blank')}>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Clickable variant="contained" onClick={() => navigate(`/docs/${repo.github}`)}>
            Read more
          </Clickable>
        </Stack>
      </Stack>
    </Stack>
  );
};
