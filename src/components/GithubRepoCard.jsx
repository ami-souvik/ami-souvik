import { Avatar, Card, CardContent, CardHeader, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const GithubRepoCard = ({ data }) => (
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
      subheader={data.pushed_at}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {data.description}
      </Typography>
      <Link>{data.homepage}</Link>
    </CardContent>
  </Card>
);
