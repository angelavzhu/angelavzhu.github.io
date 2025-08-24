import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"

import Banner from "../assets/AlgoLink/Banner.png"


const theme = createTheme({
    typography: {
        heading1: {
            fontFamily: "Roboto",
            color: 'white',
            fontSize: "1.75rem",
            fontWeight: "normal"
        },
        heading2: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "1.5rem"
        },
        heading3: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "1.25rem"
        },
        body1: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "1rem"
        },
        body2: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "0.8rem"
        },
    },
})


export default function AlgoLink() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                zIndex: 50,
                overflowY: 'auto',
                width: '100vw',
                top: '0px', left: '0px', bottom: '0px',
                position: 'fixed',
                display: 'flex', flexDirection: 'column',
                backgroundColor: "#121416",
            }}>
                {/* contents */}
                <Box my="80px" mx="10%" sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "40px",
                }}>
                    <Box>
                        <Typography variant="heading1"> AlgoLink </Typography>
                        <Typography variant="body1" marginTop="20px"> Ideated and finalized platform designs to help job applicants find positions, match with recruiters, and land offers in the tech industry. </Typography>
                    </Box>

                    <Box width="80vw">
                        <img src={Banner} width="100%" />
                        <Box display=' flex' justifyContent="center" marginBottom="24px">
                            <Button href={"https://evallos.com/"} target="_blank" rel="noopener noreferrer" sx={{
                                backgroundColor: '#003DF5',
                                borderRadius: '10px',
                                borderWidth: '1px',
                                width: '70%',
                                marginTop: '12px',
                            }}>
                                <Typography variant="body1" textTransform="none">
                                    Visit Site
                                </Typography>
                            </Button>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing="auto" width="100%">
                        <Box >
                            <Typography marginBottom="12px"> Team </Typography>
                            <Typography> 1 manager </Typography>
                            <Typography> 6 designers </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Role </Typography>
                            <Typography> Product Design Intern </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Timeline </Typography>
                            <Typography> May 2025 - Present </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Tools/Skills </Typography>
                            <Stack>
                                <Typography> Figma </Typography>
                                <Typography> Design Systems </Typography>
                                <Typography> Product Thinking </Typography>
                                <Typography> Iterative Design </Typography>
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
                        backgroundColor: '#1C1D21',
                        color: '#383A40',
                        borderRadius: '20px',
                        border: 'solid'
                    }}>
                        <Typography variant="body1"> This case study is currently a <b>work in progress</b>, stay tuned!</Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}