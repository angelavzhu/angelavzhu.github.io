import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { useEffect } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Navigation from "../components/PageNavigation";
import Thumbnail from "../components/Thumbnail";

import Banner from "../assets/google-banner.png"
import algolink from '../assets/AlgoLink/Banner.png'
import evently from '../assets/evently/banner.png'


const theme = createTheme({
    typography: {
        heading1: {
            fontFamily: "Roboto",
            color: 'black',
            fontSize: "3rem",
            fontWeight: "bold"
        },
        heading2: {
            color: 'black',
            fontFamily: "Roboto",
            fontSize: "1.375rem"
        },
        heading3: {
            color: 'black',
            fontFamily: "Roboto",
            fontSize: "1rem",
            textTransform: 'uppercase',
        },
        body1: {
            color: 'black',
            fontFamily: "Roboto",
            fontSize: "1rem"
        },
        body2: {
            color: 'black',
            fontFamily: "Roboto",
            fontSize: "0.8rem"
        },
    },
})


export default function AlgoLink() {
    return (
        <ThemeProvider theme={theme}>
            <Box px="8%">
                <Box my="80px" sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "40px",
                }}>

                    <Box width="100%" display="flex" justifyContent="center">
                        <img src={Banner} width="100%" />
                    </Box>

                    <Box gap="20px">
                        <Button href={"https://evallos.com/"} target="_blank" rel="noopener noreferrer" sx={{
                            gap: "20px",
                            marginLeft: '-1%',
                            '&:hover': { scale: 1.05 }
                        }}>
                            <Typography variant="heading1" textTransform="none"> Google </Typography>
                            <ArrowOutwardIcon sx={{ color: 'white', }} />
                        </Button>
                        <Typography variant="body1"> Designing and evaluating user experiences to engage college-age users with Google products. </Typography>
                    </Box>

                    <Stack direction="row" spacing="auto" width="100%" gap="24px" flexWrap="wrap">
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography variant='heading3'> Team </Typography>
                            <Typography marginTop="12px"> 2 project managers </Typography>
                            <Typography> 8 designers </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading3'> Role </Typography>
                            <Typography marginTop="12px"> Design Consultant (Contract) </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading3'> Timeline </Typography>
                            <Typography marginTop="12px"> September 2025 - Present </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading3'> Tools/Skills </Typography>
                            <Stack>
                                <Typography marginTop="12px"> UX Research </Typography>
                                <Typography> Figma </Typography>
                                <Typography> Design Intervention </Typography>
                                <Typography> Mixed-method Research </Typography>
                                <Typography> Prototyping </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    <Box sx={{
                        width: '100%',
                        py: '64px',
                        px: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '20px',
                        backgroundColor: '#F8F9FA'
                    }}>
                        <Typography variant="heading2"> This case study is currently a <b>work in progress</b>, stay tuned!</Typography>
                    </Box>

                    <Typography variant="heading3" width="100%"> UP NEXT: </Typography>
                    <Stack gap="20px" direction="row" alignItems="start" justifyContent="center" flexWrap="wrap">
                        <Thumbnail
                            name="AlgoLink (Evallos)"
                            mainTag="Design Internship"
                            tags="/ Desktop / Startup"
                            color="#003DF5"
                            imgsrc={algolink}
                            link="/algolink"
                            width="48%"
                            dark={false}
                            rotate="2deg" />
                        <Thumbnail
                            name="Evently"
                            mainTag="Design Consulting at Cornell"
                            tags="/ Mobile / 0 -> 1"
                            color="#FF6F8D"
                            imgsrc={evently}
                            link="/evently"
                            dark={false}
                            width="48%"
                        />
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider >
    )
}