import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react';

import lilyAnimation from './assets/lilypad-animation.gif'
import lily from './assets/lilypad.jpg'
import Thumbnail from "./components/Thumbnail"
import evently from './assets/evently/banner.png'
import google from './assets/google-banner.png'
import crc from './assets/CRSite/thumbnail.png'
import skillful from './assets/Skillful/Skillful.png'
import algolink from './assets/AlgoLink/Banner.png'

// Unique case: header and footer are separately added for flex positioning
export default function Home() {
  const [showHeading, setShowHeading] = React.useState(true);

  // check if heading should be shown
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) { // remove once scroll more than height of window
        setShowHeading(false);
      } else {
        setShowHeading(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // overall container
    <Box sx={{
      overflowY: 'auto',
      overflowX: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      top: '0px', left: '0px', bottom: '0px',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* background animation and contained header box*/}
      <Box sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${lilyAnimation})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        {/* heading text box */}
        <Box sx={{
          width: '60%',
          py: '16px',
          zIndex: 0,
          position: 'fixed',
          display: showHeading ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
          flexDirection: 'column',
        }}>
          <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '-5px',
            paddingBottom: '32px',
            px: '2%',
          }}>
            <Typography variant="accent" fontSize="4rem" color="#007700" lineHeight={1.5} width="100%" textAlign="center"> Angela Zhu </Typography>
            <Box textAlign="center" marginBottom="32px" marginTop="16px">
              <Typography variant="heading1" fontSize="2rem" lineHeight={1.5}>Designer and programmer that distills bold ideas into </Typography>
              <Typography variant="heading1" fontSize="2rem" fontWeight="500" color="#007700">thoughtful, scalable products.</Typography>
            </Box>
            <Box>
              <Typography variant="heading3" color="#5B5B5B" textAlign="center" width="100%"> Currently a student consultant working with </Typography>
              <Typography variant="heading3" sx={{
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(to right, #4285F4 0% 20%, #EA4335 20% 40%, #FAC10B 40% 55%, #4285F4 55% 75%, #34A853 66.67% 83.33%, #EA4335 83.33% 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }
              }}>Google</Typography>

            </Box>
          </Stack>
          {/* button to go down */}
          <Button onClick={() => document.getElementById('body')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              borderRadius: 100,
              color: 'black',
              position: 'relative',
              '&:hover': {
                scale: 1.5,
                backgroundColor: 'white'
              },
            }}>
            <ArrowBackIcon sx={{ rotate: '-90deg' }} />
          </Button>
        </Box>

      </Box>

      {/* Body box */}
      <Box sx={{
        width: '100vw',
        zIndex: 1,
        backgroundColor: 'white'
      }}>
        {/* works */}
        <Box
          id="body"
          sx={{
            display: 'flex',
            mx: '16%',
            flexDirection: 'column',
            gap: '100px',
            py: '100px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Thumbnail name="Evallos (Formerly AlgoLink)" mainTag="Design Internship" tags="/ Desktop / Startup" color="#003DF5" imgsrc={algolink} description="Owned 6 core product features including job boards, messaging, onboarding, and more. Scaled the platform by introducing evaluation and improvement services for AI models. " link="/algolink" />
          <Thumbnail name="Evently" mainTag="Design Consulting at Cornell" tags="/ Mobile / 0 -> 1 Design" color="#FF6F8D" imgsrc={evently} description="Prototyped a mobile app to streamline the event discovery process at Cornell with a focus on community and lasting connection." link="/evently" rotate="-2deg" />
          <Thumbnail name="Google" mainTag="Design Consultant (Contract)" tags="/ Mobile / UXR" color="#000000" imgsrc={google} description="[In Progress] Designing and evaluating user experiences to engage college-age users with Google products. " link="/google" />
          <Thumbnail name="Combat Robotics @ Cornell" mainTag="Website Redesign" tags="/ Desktop & Mobile / Design Systems" color="#B21D1D" imgsrc={crc} description="Led a full website redesign including information architecture, site structure, and visual branding to create more intuitive navigation and attract more applicants." link="/crc" rotate="2deg" />
          <Thumbnail name="Skillful" mainTag="Design-a-thon" tags="/ Mobile / Speculative Design" color="#111C6B" imgsrc={skillful} description="Designed a skill-trading marketplace for a world with superpowers in a team of 4 designers for the Figma 2025 design-a-thon." link="https://www.figma.com/deck/WAB2nOFTjxApO9CxSsv9QR/FigBuild-2025--Skillful?node-id=1-130&viewport=-17%2C-67%2C0.35&t=CeJ8aAAFRKXAPclv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" rotate="-2deg" external="True" />
        </Box>
      </Box>
    </Box >
  )
}