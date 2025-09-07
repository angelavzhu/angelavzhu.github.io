import { Box, Typography, Button, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom"

import lilypads from "./assets/lilypads.png"
import lilybutton from "./assets/lilybutton.png"
import lilybuttonSelected from "./assets/lilybuttonselected.png"
import Thumbnail from "./components/Thumbnail"
import Footer from "./components/Footer"
import NavBarDesktop from "./components/NavBarDesktop"
import NavBarMobile from "./components/NavBarMobile"
import evently from './assets/evently/banner.png'
import crc from './assets/CRSite/thumbnail.png'
import skillful from './assets/Skillful/Skillful.png'
import algolink from './assets/AlgoLink/Banner.png'

// Unique case: header and footer are separately added for flex positioning
export default function Home({ isMobile }) {
  return (
    <Box sx={{
      zIndex: 101,
      overflowY: 'auto',
      width: '100vw',
      top: '0px', left: '0px', bottom: '0px',
      position: 'fixed',
      display: 'flex', flexDirection: 'column',
      backgroundColor: 'white'
    }}>
      <Box sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        backgroundImage: `url(${lilypads})`,
        filter: 'saturate(1.2)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}>
        {isMobile ? <NavBarMobile /> : <NavBarDesktop position="flex" />}

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
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
            backdropFilter: 'blur(12px) ',
            position: { xs: 'relative', s: 'relative', md: 'sticky', lg: 'sticky' },
            top: 0,
            borderRadius: '12px',
            flexDirection: 'column',
            marginLeft: '2%',
            paddingLeft: '3%',
            width: { xs: '100%', s: '100%', md: '45%', lg: '45%' },
          }}>
            <Stack gap="32px">
              <Box>
                <Typography variant="accent" color="#007700" lineHeight={1.5}> Angela Zhu </Typography>
                <Typography my="20px" variant="heading2" lineHeight={1.5}>is designing, drawing, and programming towards an </Typography>
                <Typography fontWeight="600" fontSize="30px" variant="heading2">inclusive </Typography>
                <Typography variant="heading2">and </Typography>
                <Typography variant="heading2" fontSize="30px" fontWeight="500" color="#007700">colorful </Typography>
                <Typography variant="heading2" >world.</Typography>
              </Box>
              <Typography variant="heading3"> currently creating intuitive and accessible products at <Link to={"https://www.designconsultingcornell.com/"} target="_blank" rel="noopener noreferrer">Design Consulting @ Cornell</Link></Typography>
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
            <Thumbnail name="Evently" color="#B8EED7" description="Event discovery on campus, personalized." link="/evently" />
            <Thumbnail name="Combat Robotics @ Cornell" color="#B2EBC2" description="Modernizing the team’s website while maintaining its personality." link="/crc" />
            <Thumbnail name="AlgoLink" color="#9ADD8E" description="Recruitment done right. Iterating and finalizing product designs for AlgoLink’s jobs and connections features, onboarding, and more." link="/algolink" />
            <Thumbnail name="Skillful" color="#7BBB26" external="true" description="Designed a skill trading marketplace in a team of 4 designers for the Figma 2025 designathon." link="https://www.figma.com/deck/WAB2nOFTjxApO9CxSsv9QR/FigBuild-2025--Skillful?node-id=1-130&viewport=-17%2C-67%2C0.35&t=CeJ8aAAFRKXAPclv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" />
          </Box>
        </Box>
        <Button href={"/work"} sx={{
          bottom: '0', left: '0',
          position: "fixed",
          height: '35vh',
          width: '26vw',
          backgroundImage: `url(${lilybutton})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          ":hover": {
            backgroundImage: `url(${lilybuttonSelected})`,
          }
        }
        } >
        </Button>
        <Footer color="black" />
      </Box >

    </Box >
  )
}