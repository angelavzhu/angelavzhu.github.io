import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';

import lilyAnimation from './assets/lilypad-animation.gif'
import Thumbnail from "./components/Thumbnail"
import evently from './assets/evently/banner.png'
import crc from './assets/CRSite/thumbnail.png'
import skillful from './assets/Skillful/Skillful.png'
import algolink from './assets/AlgoLink/Banner.png'

// Unique case: header and footer are separately added for flex positioning
export default function Home() {
  return (
    // overall container
    <Box sx={{
      overflowY: 'auto',
      top: '0px', left: '0px', bottom: '0px',
      display: 'flex', flexDirection: 'column',
      backgroundColor: 'white'
    }}>
      {/* backgroundImage with heading text*/}
      <Box sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${lilyAnimation})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}>
        {/* heading box container (for padding) */}
        <Box sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* heading text box */}
          <Box sx={{
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
            backgroundColor: 'white',
            flexDirection: 'column',
            paddingX: '3%',
            paddingY: '1%',
            width: { xs: '100%', s: '100%', md: '50%', lg: '50%' },
          }}>
            <Stack gap="32px" sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: '32px'
            }}>
              <Box>
                <Typography variant="accent" color="#007700" lineHeight={1.5}> Angela Zhu </Typography>
                <Typography my="20px" variant="heading2" lineHeight={1.5}>is designing, programming, and illustrating an </Typography>
                <Typography fontWeight="600" fontSize="30px" variant="heading2">inclusive </Typography>
                <Typography variant="heading2">world full of </Typography>
                <Typography variant="heading2" fontSize="30px" fontWeight="500" color="#007700">inspiration.</Typography>
              </Box>
              <Typography variant="heading3" color="#5B5B5B"> currently creating intuitive products at <Link to={"https://www.designconsultingcornell.com/"} target="_blank" rel="noopener noreferrer">Design Consulting @ Cornell</Link></Typography>
            </Stack>
            {/* button to go down */}
            <Button onClick={() => document.getElementById('body')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                borderRadius: 100,
                color: 'black',
                '&:hover': {
                  scale: 1.5,
                  backgroundColor: 'white'
                },
              }}>
              <ArrowBackIcon sx={{ rotate: '-90deg' }} />
            </Button>
          </Box>
        </Box>
      </Box >

      <Box
        id="body"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          py: '50px',
          px: '15%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Thumbnail name="AlgoLink (Evallos)" mainTag="Design Internship" tags="/ Desktop / Startup" color="#003DF5" imgsrc={algolink} date="May 2025 - present" description="Recruitment done right. Iterating and finalizing product designs for AlgoLink’s jobs and connections features, onboarding, and more." link="/algolink" width="100%" rotate="2deg" />
        <Thumbnail name="Evently" mainTag="Design Consulting at Cornell" tags="/ Mobile / 0 -> 1 Design" color="#FF6F8D" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized. Designing a better event discovery platform to build community and lasting connection." link="/evently" width="100%" rotate="-2deg" />
        <Thumbnail name="Combat Robotics @ Cornell" mainTag="Website Redesign" tags="/ Desktop & Mobile / Design Systems" color="#B21D1D" imgsrc={crc} date="Jun - Aug 2025" description="Modernizing the team’s website while maintaining its personality. Re-designing the team website to better encapsulate the team culture and attract new applicants." link="/crc" width="100%" rotate="2deg" />
        <Thumbnail name="Skillful" mainTag="Figma Designathon" tags="/ Mobile / E-Commerce" color="#111C6B" imgsrc={skillful} date="April 2025" description="Designed a skill trading marketplace in a team of 4 designers for the Figma 2025 designathon." link="https://www.figma.com/deck/WAB2nOFTjxApO9CxSsv9QR/FigBuild-2025--Skillful?node-id=1-130&viewport=-17%2C-67%2C0.35&t=CeJ8aAAFRKXAPclv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" width="100%" rotate="-2deg" external="True" />

      </Box>
    </Box >
  )
}