import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom"

import Portrait from './assets/Play/portrait.jpg'
import Grandma from './assets/Play/grandma.jpg'
import BCan from './assets/Play/black-can.png'
import WCan from './assets/Play/white-can.png'
import RCan from './assets/Play/red-can.png'
import Powerpuff from './assets/Play/powerpuff.jpg'
import Apple from './assets/Play/apple.png'
import Horse1 from './assets/Play/horse-black.png'
import Horse2 from './assets/Play/horse-white.png'
import Meep1 from './assets/Play/meep-black.png'
import Meep2 from './assets/Play/meep-white.png'
import Crab from './assets/Play/crab.jpg'
import Horses from './assets/Play/zodiac_drawings.jpg'
import Lilypads from './assets/lilypads.jpg'

export default function Play() {
    return (
        <Box paddingTop="80px" px="10%" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            flexDirection: 'column',
        }}>
            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <img src={Portrait} width="40%" height="100%" style={{
                    minWidth: '300px'
                }} />
                <img src={Powerpuff} width="40%" height="100%" style={{
                    minWidth: '300px'
                }} />
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

            <Stack direction="row" gap="50px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
                <img src={Lilypads} width="40%" height="100%" style={{
                    minWidth: '300px'
                }} />
                <img src={Grandma} width="40%" height="100%" style={{
                    minWidth: '300px'
                }} />
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
            <img src={Crab} width="100%" />

            <img src={Horses} width="100%" style={{ paddingBottom: '50px' }} />


            {/* <Link to="/">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>
                    <img src={Portrait} width="30%" />
                    <Box sx={{
                        py: '12px',
                        px: '12px',
                        boxShadow: '0px 1px 2px grey',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="heading3" paddingBottom='12px'> Digital Art</Typography>
                        <Typography variant="body1"> 2020-2025</Typography>
                        <Typography variant="body1"> Personal artwork presented as digital media </Typography>
                    </Box>
                </Box>
            </Link> */}


        </Box >
    );
}