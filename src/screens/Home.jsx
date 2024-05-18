import { Box, Divider, Grid, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import sav from '@assets/sav.jpg';
import react from '@assets/react.png';
import webflow from '@assets/webflow.png';
import tailwind from '@assets/tailwind.png';
import framer from '@assets/framer.png';
import figma from '@assets/figma.png';
import github from '@assets/github.png';
import threejs from '@assets/threejs.png';
import framerMotion from '@assets/framer-motion.png';
import { Section, BorderBeam } from '@components';

export const Home = (props) => {
  const { sectionRef } = props;
  const theme = useTheme();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <section ref={sectionRef}>
      <Stack spacing={4} marginLeft="-32px">
        <Grid container sx={{ width: '100%' }} spacing={4}>
          <Grid item xs={mdw ? 12 : 8}>
            <Stack height="100%" p={mdw ? '0px' : '48px 24px'} justifyContent="center" sx={{ userSelect: 'none' }}>
              <Typography variant="h1" fontWeight={600}>
                I will help you build the
              </Typography>
              <Typography variant="h1" fontWeight={600} marginTop={mdw ? '0px' : '-16px'}>
                platform of your <Typography variant="signh1">dreams</Typography>
              </Typography>
              <Typography>I'm a Freelance Professional working remotely from Kolkata, India.</Typography>
            </Stack>
          </Grid>
          <Grid item xs={mdw ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="relative p-[32px] rounded-xl space-y-4 border-[1px solid]">
              <BorderBeam />
              <Stack
                sx={{
                  position: 'absolute',
                  top: 6,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  alignItems: 'center',
                  marginTop: '-12px',
                }}
              >
                <div className="w-[80px] h-[4px] bg-primary-main dark:bg-white rounded-xl" />
              </Stack>
              <Stack direction="row" spacing={4} justifyContent="space-between" alignItems="flex-end">
                <Typography variant="signh2" fontFamily="SignPainter-B">
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
              <hr className="opacity-[1]" />
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
                <Typography>GSAP</Typography>
                <img src={framerMotion} style={{ width: '20px', objectFit: 'contain' }} />
              </Stack>
            </div>
            {/* </Stack> */}
          </Grid>
        </Grid>
      </Stack>
      <Section>
        <Stack spacing={2}>
          <Stack>
            <Typography>AIM</Typography>
            <Typography variant="h2" fontWeight={400}>
              Creating stunning websites
            </Typography>
            <Typography variant="h2" fontWeight={400}>
              that <Typography variant="signh2">Stand Out</Typography>
            </Typography>
          </Stack>
          <Typography>
            Welcome to my portfolio website, where I showcase my expertise in web design and development. I am
            passionate about creating visually appealing and user-friendly websites that leave a lasting impression.
          </Typography>
        </Stack>
        <Stack spacing={2}></Stack>
      </Section>
      <Section border>
        <Stack spacing={1} justifyContent="center">
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
      </Section>
    </section>
  );
};
