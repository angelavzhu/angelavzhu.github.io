import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom"

import lilypads from './assets/lilypad-background.png'
import Portrait from './assets/Play/portrait.jpg'
import Grandma from './assets/Play/grandma.jpg'
import BCan from './assets/Play/black-can.png'
import WCan from './assets/Play/white-can.png'
import RCan from './assets/Play/red-can.png'
import Powerpuff from './assets/Play/powerpuff.jpg'
import Horse1 from './assets/Play/horse-black.png'
import Horse2 from './assets/Play/horse-white.png'
import Meep1 from './assets/Play/meep-black.png'
import Meep2 from './assets/Play/meep-white.png'
import Crab from './assets/Play/crab.jpg'
import Horses from './assets/Play/zodiac_drawings.jpg'
import Lilypads from './assets/lilypads.jpg'

export default function Play() {
    return (
        // overall container
        <Box marginTop="80px" mx="10%" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            flexDirection: 'column',
        }}>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                zIndex: 0,
                display: 'flex',
                position: 'fixed',
                top: '0', left: '0',
                backgroundImage: `url(${lilypads})`,
                filter: 'saturate(1.2)',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }} />
            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <Box width="40%" gap='50px' display="flex" alignItems="center" flexDirection="column">
                    <img src={Portrait} width="100%" height="100%" style={{
                        minWidth: '300px'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> Portrait, 2024 </Typography>
                </Box>

                <Box width="40%" gap="50px" display="flex" alignItems="center" flexDirection="column">
                    <img src={Powerpuff} width="100%" height="100%" style={{
                        minWidth: '300px'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> Illustration, 2024 </Typography>
                </Box>

            </Stack>

            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <img src={BCan} width="25%" height="100%" style={{
                    minWidth: '180px'
                }} />
                <img src={WCan} width="25%" height="100%" style={{
                    minWidth: '180px'
                }} /><img src={RCan} width="25%" height="100%" style={{
                    minWidth: '180px'
                }} />
            </Stack>
            <Typography variant="body2" color="#5B5B5B"> Soda Cans, 2025 </Typography>


            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <Box width="40%" gap="50px" display="flex" alignItems="center" flexDirection="column">
                    <img src={Lilypads} width="100%" height="100%" style={{
                        minWidth: '300px'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> Lilypads, 2025 </Typography>
                </Box>
                <Box width="40%" gap="50px" display="flex" alignItems="center" flexDirection="column">
                    <img src={Grandma} width="100%" height="100%" style={{
                        minWidth: '300px'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> Character design, 2024 </Typography>
                </Box>

            </Stack>


            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <img src={Horse1} width="15%" height="100%" style={{
                    minWidth: '100px'
                }} />
                <img src={Horse2} width="15%" height="100%" style={{
                    minWidth: '100px'
                }} />
                <img src={Meep1} width="15%" height="100%" style={{
                    minWidth: '100px'
                }} />
                <img src={Meep2} width="15%" height="100%" style={{
                    minWidth: '100px'
                }} />
            </Stack>
            <Typography variant="body2" color="#5B5B5B"> Character sprites for Apathia (mobile game), 2025 </Typography>

            <img src={Crab} width="100%" />
            <Typography variant="body2" color="#5B5B5B"> Animation spritesheet for Seas the Throne (desktop game), 2024 </Typography>

            <img src={Horses} width="100%" />
            <Typography variant="body2" color="#5B5B5B" paddingBottom="50px"> Character design of Horse zodiac, 2024 </Typography>
        </Box >
    );
}