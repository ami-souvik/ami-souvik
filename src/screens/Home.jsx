import { Box, Divider, Grid, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { About } from '@screens';
import { ProcessIndicator } from '@components';
import { process } from '@config';
import sav from '@assets/sav.jpg';
import react from '@assets/react.png';
import webflow from '@assets/webflow.png';
import tailwind from '@assets/tailwind.png';
import framer from '@assets/framer.png';
import figma from '@assets/figma.png';
import github from '@assets/github.png';
import threejs from '@assets/threejs.png';
import framerMotion from '@assets/framer-motion.png';

export const Home = (props) => {
  const { sectionRef } = props;
  const theme = useTheme();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <section ref={sectionRef}>
      <Stack spacing={4} marginLeft="-32px">
        <Grid container sx={{ width: '100%' }} spacing={4}>
          <Grid item xs={12}>
            <Box p={mdw ? '0px' : '48px 24px'} sx={{ userSelect: 'none' }}>
              <Typography variant="h1">I will help you build the</Typography>
              <Typography variant="h1" marginTop={mdw ? '0px' : '-16px'}>
                platform of your{' '}
                <Typography variant="signh1" fontFamily="SignPainter-B">
                  dreams
                </Typography>
              </Typography>
              <Typography>I'm a Freelance Professional working remotely from Kolkata, India.</Typography>
            </Box>
          </Grid>
          <Grid item xs={mdw ? 12 : 8}>
            <Box
              p="48px 24px"
              bgcolor="secondary.main"
              boxShadow={`0px 0px 12px -4px ${theme.palette.primary.main}44`}
              borderRadius="24px"
            >
              <ProcessIndicator data={process} />
            </Box>
          </Grid>
          <Grid item xs={mdw ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack
              position="relative"
              p={4}
              spacing={2}
              height="100%"
              border="8px solid #fff"
              borderRadius="24px"
              bgcolor="#121212"
              boxShadow={`0px 0px 12px -4px ${theme.palette.primary.main}44`}
            >
              <Stack
                sx={{
                  position: 'absolute',
                  top: 12,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  alignItems: 'center',
                  marginTop: '-12px',
                }}
              >
                <Box width="80px" height="4px" bgcolor="#fff" borderRadius={4} />
              </Stack>
              <Stack direction="row" spacing={4} justifyContent="space-between" alignItems="flex-end">
                <Typography variant="signh2" fontFamily="SignPainter-B" color="#fff">
                  Sav
                </Typography>
                <img
                  src={sav}
                  style={{
                    height: '120px',
                    width: '100px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '2px solid #fff',
                  }}
                />
              </Stack>
              <Divider sx={{ borderColor: '#fff', opacity: 0.4 }} />
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={react} style={{ width: '24px', objectFit: 'contain' }} />
                <img src={webflow} style={{ width: '24px', objectFit: 'contain' }} />
                <img src={tailwind} style={{ width: '24px', objectFit: 'contain' }} />
                <img src={framer} style={{ width: '24px', objectFit: 'contain' }} />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={figma} style={{ width: '24px', objectFit: 'contain' }} />
                <img src={github} style={{ width: '24px', objectFit: 'contain' }} />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box p="3px" bgcolor="#fff" borderRadius="4px" lineHeight={0}>
                  <img src={threejs} style={{ width: '20px', objectFit: 'contain' }} />
                </Box>
                <Typography color="#fff">GSAP</Typography>
                <img src={framerMotion} style={{ width: '20px', objectFit: 'contain' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <About />
      <Stack
        id="contact"
        flex={1}
        spacing={4}
        direction={mdw ? 'column' : 'row'}
        justifyContent="space-between"
        border={`1px solid ${theme.palette.text.primary}`}
        sx={{
          padding: '24px 96px 24px 48px',
          marginY: '24px',
        }}
      >
        <Stack spacing={1}>
          <Typography>Connect</Typography>
          <Typography variant="h3">Get in Touch</Typography>
          <Typography>I'd love to hear from you, for any inquiries or collaborations.</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600}>Email</Typography>
          <Link href="mailto:dsouvik141@gmail.com">
            <Typography>dsouvik141@gmail.com</Typography>
          </Link>
          <Typography fontWeight={600}>Phone</Typography>
          <Link href="tel:919062786568">
            <Typography>+91-9062786568</Typography>
          </Link>
        </Stack>
      </Stack>
    </section>
  );
};
