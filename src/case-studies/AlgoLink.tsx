import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { useEffect } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Navigation from "../components/PageNavigation";
import Thumbnail from "../components/Thumbnail";
import SectionTag from "../components/SectionTag";

import Banner from "../assets/AlgoLink/Banner.png"
import evently from '../assets/evently/banner.png'
import crc from '../assets/CRSite/thumbnail.png'

const theme = createTheme({
    typography: {
        heading1: {
            fontFamily: "Roboto",
            color: 'white',
            fontSize: "3rem",
            fontWeight: "bold"
        },
        heading2: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "1rem",
            textTransform: 'uppercase',
        },
        heading3: {
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "2rem"
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
    const tabNames = ['Project Overview', 'Impact', 'Reflection'];

    useEffect(() => {
        document.body.style.backgroundColor = '#121416';
        return () => { document.body.style.backgroundColor = 'white'; }

    })

    return (
        <ThemeProvider theme={theme}>
            <Box px="8%">
                <Navigation color="#4674FF" tabNames={tabNames} mode="dark" />
                <Box my="80px" sx={{
                    display: "flex",
                    flexDirection: 'column',
                    marginLeft: { xs: '0', sm: '0', md: '20%', lg: '20%' },
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
                            <Typography variant="heading1" textTransform="none"> AlgoLink </Typography>
                            <ArrowOutwardIcon sx={{ color: 'white', }} />
                        </Button>
                        <Typography variant="body1"> Owned 6 core product features and scaled a recruitment platform by introducing evaluation and improvement services for AI models. </Typography>
                    </Box>

                    {/* NDA Box */}
                    <Box sx={{
                        width: '100%',
                        py: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#1C1D21',
                        color: '#383A40',
                        borderRadius: '20px',
                        border: 'solid'
                    }}>
                        <Typography variant="body1" fontWeight="bold" px="5%"> Due to my NDA, I am unable to publicly disclose specific details about my designs. </Typography>
                    </Box>

                    <Stack direction="row" spacing="auto" width="100%" gap="24px" flexWrap="wrap">
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography variant='heading2'> Team </Typography>
                            <Typography marginTop="12px"> 1 manager </Typography>
                            <Typography> 6 designers </Typography>
                            <Typography> 5 developers </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading2'> Role </Typography>
                            <Typography marginTop="12px"> Product Design Intern </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading2'> Timeline </Typography>
                            <Typography marginTop="12px"> May 2025 - Present </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
                        }}>
                            <Typography marginBottom="12px" variant='heading2'> Tools/Skills </Typography>
                            <Stack>
                                <Typography marginTop="12px"> Figma </Typography>
                                <Typography> Design Systems </Typography>
                                <Typography> Product Thinking </Typography>
                                <Typography> Iterative Design </Typography>
                                <Typography> Prototyping </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    {/* project overview */}
                    <Box
                        id="Project Overview"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            scrollMargin: '90px',
                        }}>
                        <SectionTag text="PROJECT OVERVIEW" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                        <Typography variant="heading3"> From Concept to Prototype </Typography>
                        <Typography> Evallos Labs (formerly AlgoLink) is a startup company developing a recruitment platform to connect job hunters and recruiters for a streamlined recruitment process. During my product design internship, I took on the challenge of condensing the CEOs’ product vision into a finalized platform to ship to investors and future clients. </Typography>
                        <Typography> Towards the end of my internship, the CEOs decided to pivot the product to emphasize the evaluation and allocation features, adjusting the scope to include AI model evaluation and testing. I was a founding designer during this pivot, and drafted initial designs to clarify the product direction.</Typography>
                    </Box>

                    {/* impact */}
                    <Box
                        id="Impact"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            scrollMargin: '90px',
                            width: '100%',
                        }}>
                        <SectionTag text="MY IMPACT" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                        <Typography variant="heading3"> Finalizing the Product and Navigating Uncertainty </Typography>
                        <Typography> My key contributions to the product included:</Typography>

                        {/* Bullet 1 */}
                        <Box sx={{
                            py: '40px',
                            px: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '20px',
                            border: 'solid'
                        }}>
                            <Box sx={{
                                borderRadius: 100,
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                marginRight: '5%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#36383F'
                            }}>
                                <Typography fontSize={40}>1</Typography>
                            </Box>
                            <Typography variant="body1" width="90%"> Completed <b>5+ user flows</b> for both recruiters and job candidates, including search, connections, profile, and an onboarding experience for both personas, including <b>high-fidelity mockups, prototypes, and UX writing.</b></Typography>
                        </Box>
                        {/* bullet 2 */}
                        <Box sx={{
                            py: '40px',
                            px: '40px',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '20px',
                            border: 'solid'
                        }}>
                            <Box sx={{
                                borderRadius: 100,
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                marginRight: '5%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#36383F'
                            }}>
                                <Typography fontSize={40}>2</Typography>
                            </Box>
                            <Typography variant="body1" width="90%">
                                Navigated <b>ambiguous</b> project parameters after company pivot by communicating directly with CEOs to <b>refine design concepts</b> into specific, actionable <b>deliverables</b>.                                 </Typography>
                        </Box>
                        {/* bullet 3 */}
                        <Box sx={{
                            py: '40px',
                            px: '40px',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '20px',
                            border: 'solid'
                        }}>
                            <Box sx={{
                                borderRadius: 100,
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                marginRight: '5%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#36383F'
                            }}>
                                <Typography fontSize={40}>3</Typography>
                            </Box>
                            <Typography variant="body1" width="90%">
                                Designed an <b>internal research platform</b> to visualize current/projected data to allow for founders to analyze the data and craft feasible <b>financial projections</b>.
                            </Typography>
                        </Box>

                        {/* bullet 4 */}
                        <Box sx={{
                            py: '40px',
                            px: '40px',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '20px',
                            border: 'solid'
                        }}>
                            <Box sx={{
                                borderRadius: 100,
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                marginRight: '5%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#36383F'
                            }}>
                                <Typography fontSize={40}>4</Typography>
                            </Box>
                            <Typography variant="body1" width="90%">
                                Balanced multiple design tasks and <b>concurrent projects</b> to match product needs, and underwent several <b>design iterations</b> based on feedback
                            </Typography>
                        </Box>
                    </Box>

                    {/* reflection */}
                    <Box
                        id="Reflection"
                        sx={{
                            display: 'flex',
                            scrollMargin: '90px',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                        <SectionTag text="TAKEAWAYS AND REFLECTION" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                        <Typography variant="heading3"> Fast-paced, measurable impacts </Typography>
                        <Stack direction="row" gap="10%">
                            <Box sx={{
                                width: { xs: '100%', sm: '100%', md: '45%', lg: '45%' },
                            }}>
                                <Typography variant="heading2"> Design and Business</Typography>
                                <Typography paddingTop="20px"> As a part of a newly established startup, in addition to UX design, I was able to directly discuss and contribute to AlgoLink's business decisions and company goals. It was incredibly unique to work at the intersection of business and design, and made me realize the importance of product design in creating a valuable concept that will succeed in the market. </Typography>
                            </Box>
                            <Box sx={{
                                width: { xs: '100%', sm: '100%', md: '45%', lg: '45%' },
                            }}>
                                <Typography variant="heading2"> Clarifying Goals to Meet Deadlines</Typography>
                                <Typography paddingTop="20px">Prior to finalizing investors and funding, my team and I were working on tight deadlines to provide visuals for pitchdecks and product functionality. One key takeaway I gained from this experience was the necessity of taking initiative to clarify concepts early in the design process. By doing so, I was able to reduce negative work and gain a better understanding of the overall project scope.</Typography>
                            </Box>
                        </Stack>

                    </Box>

                    <Typography variant="heading1" width="100%" textAlign="center" > Thank you for reading!</Typography>
                    <Typography variant="heading2" width="100%"> UP NEXT: </Typography>
                    <Stack gap="20px" direction="row" alignItems="start" justifyContent="center" flexWrap="wrap">
                        <Thumbnail
                            name="Evently"
                            mainTag="Design Consulting at Cornell"
                            tags="/ Mobile / 0 -> 1 Design"
                            color="#FF6F8D"
                            imgsrc={evently}
                            link="/evently"
                            dark={true}
                            width="410px"
                        />
                        <Thumbnail
                            name="Combat Robotics @ Cornell"
                            mainTag="Website Restructure"
                            tags="/ Desktop & Mobile "
                            color="#B21D1D"
                            imgsrc={crc}
                            link="/crc"
                            rotate="2deg"
                            dark={true}
                            width="410px" />
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider >
    )
}

// <Box sx={{
//                         width: '100%',
//                         py: '64px',
//                         px: '20px',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         backgroundColor: '#1C1D21',
//                         color: '#383A40',
//                         borderRadius: '20px',
//                         border: 'solid'
//                     }}>
//                         <Typography variant="body1"> This case study is currently a <b>work in progress</b>, stay tuned!</Typography>
//                     </Box>