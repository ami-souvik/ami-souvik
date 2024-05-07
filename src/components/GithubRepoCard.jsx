import { useEffect, useState } from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Link, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Clickable } from '@components';
import { fetchARepo } from '@webservices';
import { formatdayjs } from '@utils';

export const GithubRepoCard = ({ repo }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchARepo(repo.github).then(setData);
  }, []);
  const navigate = () => {
    window.open(`/docs/${repo.github}`, '_self');
  };
  return (
    <Card key={data.id} sx={{ margin: '6px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <GitHubIcon fontSize="large" />
          </Avatar>
        }
        action={
          <IconButton onClick={() => window.open(data.html_url, '_blank')}>
            <OpenInNewIcon />
          </IconButton>
        }
        title={data.name}
        subheader={formatdayjs(data.pushed_at)}
      />
      <CardContent>
        <Stack spacing={2}>
          <Stack>
            <Typography variant="h4">{data.description}</Typography>
            <Link target="_blank" href={data.homepage}>
              {data.homepage}
            </Link>
          </Stack>
          <Typography>
            The best landing page template for launching new ideas. Perfect for bootstrappers and pre-PMF VC backed
            startups.
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <Clickable variant="contained" onClick={navigate}>
          Read more
        </Clickable>
      </CardActions>
    </Card>
  );
};
