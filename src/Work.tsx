import { Box, Stack } from '@mui/material'
import Thumbnail from "./components/Thumbnail"

import evently from './assets/evently/banner.png'
import crc from './assets/CRSite/thumbnail.png'
import algolink from './assets/AlgoLink/Banner.png'
import skillful from './assets/Skillful/Skillful.png'

export default function Work() {
    return (
        <Box marginTop="80px" mx="10%" sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            height: '100%',
            gap: '24px',
            justifyContent: 'center',
            paddingBottom: '20%'
        }}>
            <Thumbnail name="Evently" imgsrc={evently} date="Feb - May 2025" description="Event discovery on campus, personalized." link="/evently" width="460px" />
            <Thumbnail name="Combat Robotics @ Cornell" imgsrc={crc} date="Jun - Aug 2025" description="Modernizing the team’s website while maintaining its personality." link="/crc" width="460px" />
            <Thumbnail name="AlgoLink (Evallos)" imgsrc={algolink} date="May 2025 - present" description="Recruitment done right. Iterating and finalizing product designs for AlgoLink’s jobs and connections features, onboarding, and more." link="/algolink" width="460px" />
            <Thumbnail name="Skillful" imgsrc={skillful} date="April 2025" description="Designed a skill trading marketplace in a team of 4 designers for the Figma 2025 designathon." link="https://www.figma.com/deck/WAB2nOFTjxApO9CxSsv9QR/FigBuild-2025--Skillful?node-id=1-130&viewport=-17%2C-67%2C0.35&t=CeJ8aAAFRKXAPclv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" width="460px" />

        </Box>
    );
}