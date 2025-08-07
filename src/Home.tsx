import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"
import lilypads from "./assets/lilypads.jpg"
import Thumbnail from "./components/Thumbnail"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

import evently from './assets/evently/banner.png'

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
      <NavBar position="relative" />

      {/* contents */}
      <Box sx={{
        px: '32px',
        mx: '80px',
        my: '12px',
        overflowY: 'scroll',
        gap: '32px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(167, 205, 228, 0.5)',
        backdropFilter: 'blur(8px) ',
        borderRadius: '20px',
      }}>
        {/* lhs */}
        <Box sx={{
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'center',
          overflowY: 'auto',
          position: 'sticky',
          top: 0,
          flexDirection: 'column',
          marginLeft: '2%',
          width: '45%',
        }}>
          <Typography variant="accent" fontSize="60px"> Angela Zhu,</Typography>
          <Typography variant="accent" fontFamily="Lunasima">product designer & front-end developer</Typography>
          <Typography my="30px" variant="heading3"> Designing intuitive and accessible products, with a touch of humanity.</Typography>
          <Typography variant="body1"> <Link to={"/evently"}>See All &gt;</Link> </Typography>
        </Box>

        {/* rhs */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '50%',
          gap: '24px',
          paddingBottom: '20%'
        }}>
          <Thumbnail height="60vh" name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" />
          <Thumbnail height="60vh" name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" />
          <Thumbnail height="60vh" name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" />
          <Thumbnail height="60vh" name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" />
        </Box>
      </Box>
      <Footer />

    </Box >
  )
}