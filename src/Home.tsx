import { Box, Typography, Button, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom"
import lilypads from "./assets/lilypads.jpg"
import Thumbnail from "./components/Thumbnail"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

import evently from './assets/evently/banner.png'
import crc from './assets/CRSite/thumbnail.png'
import skillful from './assets/Skillful/Skillful.png'
import algolink from './assets/AlgoLink/Banner.png'

export default function Home() {
  return (
    <Box sx={{
      zIndex: 101,
      overflowY: 'auto',
      width: '100vw',
      top: '0px', left: '0px', bottom: '0px',
      position: 'fixed',
      display: 'flex', flexDirection: 'column',
      backgroundImage: `url(${lilypads})`,
      filter: 'saturate(1.2)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    }}>
      <Box sx={{
        backgroundColor: 'rgba(167, 205, 228, 0.5)',
        backdropFilter: 'blur(4px) ',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
      }}>
        <NavBar position="relative" />
        {/* contents */}
        <Box sx={{
          px: '32px',
          mx: '80px',
          my: '12px',
          overflowY: 'scroll',
          flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
          gap: '32px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          {/* lhs */}
          <Box sx={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'space-between',
            overflowY: 'auto',
            position: { xs: 'relative', s: 'relative', md: 'sticky', lg: 'sticky' },
            top: 0,
            flexDirection: 'column',
            marginLeft: '2%',
            py: '40px',
            width: { xs: '100%', s: '100%', md: '45%', lg: '45%' },
          }}>
            <Stack marginBottom="20px">
              <Typography variant="accent" fontSize="60px"> Angela Zhu,</Typography>
              <Typography my="20px" variant="accent" fontFamily="Lunasima">product designer & front-end developer</Typography>
              <Typography variant="heading3"> Designing intuitive and accessible products, with a touch of humanity.</Typography>
            </Stack>
            <Stack direction="row" gap="4px" alignItems="center">
              <Button href={"/work"} >
                <Typography variant="body1" fontStyle="italic" textTransform="none" textAlign="left" width="100%" color="black">
                  See All</Typography>
              </Button>
              <ChevronRightIcon />
            </Stack>

          </Box>

          {/* rhs */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: { xs: '100%', s: '100%', md: '50%', lg: '50%' },
            gap: '24px',
            paddingBottom: '20%'
          }}>
            <Thumbnail name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" />
            <Thumbnail name="Combat Robotics @ Cornell" imgsrc={crc} date="Jun - Aug 2025" description="Modernizing the team’s website while maintaining its personality." link="/crc" />
            <Thumbnail name="AlgoLink" imgsrc={algolink} date="May 2025 - present" description="Recruitment done right. Iterating and finalizing product designs for AlgoLink’s jobs and connections features, onboarding, and more." link="https://www.algolink.net/" />
            <Thumbnail name="Skillful" imgsrc={skillful} date="April 2025" description="Submission to Figma 2025 Designathon (FigBuild), designed a skill trading marketplace in a team of 4 designers." link="https://www.figma.com/deck/WAB2nOFTjxApO9CxSsv9QR/FigBuild-2025--Skillful?node-id=1-130&viewport=-17%2C-67%2C0.35&t=CeJ8aAAFRKXAPclv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" />
          </Box>
        </Box>
        <Footer color="black" />
      </Box>

    </Box >
  )
}