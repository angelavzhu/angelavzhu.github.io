import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

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
            color: '#4674FF',
            fontFamily: "Roboto",
            fontSize: "1rem"
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
                <Box my="80px" mx="15%" sx={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: "40px",
                }}>
                    <Box width="100%" display="flex" justifyContent="center">
                        <img src={Banner} width="100%" />
                    </Box>
                    <Box>
                        <Typography variant="heading1"> AlgoLink </Typography>
                        <Typography variant="body1" marginTop="20px"> Ideated and finalized platform designs to help job applicants find positions, match with recruiters, and land offers in the tech industry. </Typography>
                    </Box>
                    <Box width="100%" display=' flex' justifyContent="center" marginBottom="24px">
                        <Button href={"https://evallos.com/"} target="_blank" rel="noopener noreferrer" sx={{
                            backgroundColor: '#003DF5',
                            borderRadius: '10px',
                            borderWidth: '1px',
                            width: '100%',
                            marginTop: '12px',
                            '&:hover': {
                                backgroundColor: '#4674FF'
                            },
                        }}>
                            <Typography variant="body1" textTransform="none">
                                Visit Site
                            </Typography>
                        </Button>
                    </Box>
                    <Stack direction="row" spacing="auto" width="100%">
                        <Box >
                            <Typography marginBottom="12px"> Team </Typography>
                            <Typography> 1 manager </Typography>
                            <Typography> 6 designers </Typography>
                            <Typography> 5 developers </Typography>
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

                    {/* project overview */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                        <Typography variant="heading2"> PROJECT OVERVIEW</Typography>
                        <Typography variant="heading1"> From Concept to Prototype </Typography>
                        <Typography> Evallos Labs (formerly AlgoLink) is a startup company developing a recruitment platform to connect job hunters and recruiters for a streamlined recruitment process. During my product design internship, I took on the challenge of condensing the CEOs’ product vision into a finalized platform to ship to investors and future clients. </Typography>
                        <Typography> Towards the end of my internship, the CEOs decided to pivot the product to emphasize the evaluation and allocation features, adjusting the scope to include AI model evaluation and testing. I was a founding designer during this pivot, and drafted initial designs to clarify the product direction.</Typography>
                    </Box>

                    {/* impact */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '100%',
                    }}>
                        <Typography variant="heading2">MY IMPACT</Typography>
                        <Typography variant="heading1"> Finalizing the Product and Navigating Uncertainty </Typography>
                        <Typography> My work was <b>under NDA</b>, but my key contributions to the product included:</Typography>

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
                            <Typography variant="body1" width="90%"> Completed <b>5+ user flows</b> for both recruiters and job candidates, including search, connections, and profile, and an onboarding experience for both personas, including <b>high-fidelity mockups, prototypes, and UX writing.</b></Typography>
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
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <Typography variant="heading2"> TAKEAWAYS AND REFLECTION</Typography>
                        <Typography variant="heading1"> Fast-paced, measurable impacts </Typography>
                        <Stack direction="row" gap="10%">
                            <Box width="45%">
                                <Typography variant="heading3"> Design and Business</Typography>
                                <Typography paddingTop="20px"> As a part of a newly established startup, in addition to UX design, I was able to directly discuss and contribute to AlgoLink's business decisions and company goals. It was incredibly unique to work at the intersection of business and design, and made me realize the importance of product design in creating a valuable concept that will succeed in the market. </Typography>
                            </Box>
                            <Box width="45%">
                                <Typography variant="heading3"> Clarifying Goals to Meet Deadlines</Typography>
                                <Typography paddingTop="20px">Prior to finalizing investors and funding, my team and I were working on tight deadlines to provide visuals for pitchdecks and product functionality. One key takeaway I gained from this experience was the necessity of taking initiative to clarify concepts early in the design process. By doing so, I was able to reduce negative work and gain a better understanding of the overall project scope.</Typography>
                            </Box>
                        </Stack>

                    </Box>
                    <Typography> Due to NDA, I am unable to share more details about my work. Feel free to reach out if you would like to learn more about my experiences!</Typography>

                    <Typography variant="heading2" width="100%" textAlign="center" fontSize="50px"> Thank you for reading!</Typography>
                </Box>
                <Footer color="white" />

            </Box>
        </ThemeProvider>
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