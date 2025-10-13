import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { useEffect } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Navigation from "../components/PageNavigation";
import Thumbnail from "../components/Thumbnail";
import SectionTag from "../components/SectionTag";

import Banner from "../assets/AlgoLink/Banner.png"
import JobsOld from "../assets/AlgoLink/JobsOld.png"
import solution1 from "../assets/AlgoLink/solution1.png"
import solution2 from "../assets/AlgoLink/solution2.png"
import solution3 from "../assets/AlgoLink/solution3.png"
import iteration1 from "../assets/AlgoLink/iteration1.png"
import iteration2 from "../assets/AlgoLink/iteration2.png"
import jobs from "../assets/AlgoLink/jobspages.png"
import connections from "../assets/AlgoLink/connectionspages.png"
import research1 from "../assets/AlgoLink/researchpages1.png"
import research2 from "../assets/AlgoLink/researchpages2.png"
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
            fontWeight: "bold",
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
    const tabNames = ['Project Overview', 'Impact', 'Problem Space', 'Solution', 'User Analysis', 'Pivot', 'Final Screens', 'Reflection'];

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

                    <Box gap="40px">
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
                            gap: '40px',
                            scrollMargin: '90px',
                        }}>
                        <Stack gap="20px">
                            <SectionTag text="PROJECT OVERVIEW" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                            <Typography variant="heading3"> Creating a space to build long-term connections </Typography>
                        </Stack>
                        <Typography> Algolink (now Evallos Labs) is a startup combining <b>education and connection</b> to <b>streamline recruitment for both job hunters and recruiters.</b> During my internship, I took on the challenge of condensing the CEO’s vision into a finalized product to ship to investors and future clients.</Typography>
                        <Typography> Towards the end of the summer, Evallos pivoted into the AI market by expanding its features to include evaluation and allocation of AI models. I was a founding designer during this pivot, and explored how to design the product and enterprise to move towards a sustainable direction.</Typography>
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
                        <Typography variant="heading3"> Finalizing the product and navigating uncertainty </Typography>
                        <Typography> Here are some of my key contributions:</Typography>

                        {/* Bullet 1 */}
                        <Box sx={{
                            py: '40px',
                            px: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '8px',
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
                            <Typography variant="body1" width="90%"> Completed <b>5+ user flows</b> with high fidelity prototypes for both recruiters and job candidates, including a <b>jobs board, messaging page, and profile</b>, and an onboarding experience for both personas.</Typography>
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
                            borderRadius: '8px',
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
                            borderRadius: '8px',
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
                            borderRadius: '8px',
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

                    {/* problem space */}
                    <Box
                        id="Problem Space"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            scrollMargin: '90px',
                        }}>
                        <Stack gap='20px'>
                            <SectionTag text="PROBLEM SPACE" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                            <Typography variant="heading3"> Simplifying features and designing for growth </Typography>
                        </Stack>
                        <Typography> When I joined the team, the first version of AlgoLink was built and preparing for beta testing. However, when I began my first task on the job recommendation feed, I quickly found a deeper issue. Each page was incredibly feature-heavy and, with no onboarding, near impossible to pick up. </Typography>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img src={JobsOld} width="90%" />
                        </Box>
                        <Typography variant="body2" width="100%" textAlign="center"> AlgoLink's old jobs board</Typography>
                        <Typography> At the same time, the company's <b>mission was shifting.</b> Originally centered on education and interview preparation, the founders wanted to differentiate AlgoLink in a crowded market by focusing on intelligent matching and professional networking. This raised a question:</Typography>
                        <Box sx={{
                            width: '100%',
                            py: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '8px',
                            border: 'solid'
                        }}>
                            <Typography variant="heading3" width="85%"> How might we
                                <span style={{ color: '#4674FF', fontWeight: 'bold' }}> emphasize AlgoLink's unique functionality </span>
                                to allow for
                                <span style={{ color: "#4674FF", fontWeight: 'bold' }}> scalability and market success </span>
                                while maintaining an intuitive user experience?</Typography>
                        </Box>
                    </Box>

                    {/* Solution */}
                    <Box
                        id="Solution"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            scrollMargin: '90px',
                        }}>
                        <Stack gap='20px'>
                            <SectionTag text="SOLUTION" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                            <Typography variant="heading3"> Cultivating a network backed by data-driven decisions </Typography>
                        </Stack>
                        <Typography> We decided to focus on AlgoLink’s most unique feature: <b>intelligently matching recruiters and candidates</b> throughout our network. </Typography>
                        {/* box 1 */}
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: "5%"
                        }}>
                            <img src={solution1} width="59%" minWidth="300px" />
                            <Box width="300px">
                                <Typography variant="heading3"> Building lasting connection </Typography>
                                <Typography marginTop="30px">I redesigned the “messages” feature into a more intentional "connections" system, encouraging interaction between recruiters and candidates to build long-term relationships.</Typography>              </Box>
                        </Box>

                        {/* box 2 */}
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: "5%",
                        }}>
                            <Box width="300px">
                                <Typography variant="heading3"> Reorganizing entry points </Typography>
                                <Typography marginTop="30px">I reworked the information architecture of the jobs and connections pages to improve organization of content and reduce cognitive overload.</Typography>
                            </Box>
                            <img src={solution2} width="59%" minWidth="300px" />
                        </Box>

                        {/* box 3 */}
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: "5%"
                        }}>
                            <img src={solution3} width="59%" minWidth="300px" />
                            <Box width="300px">
                                <Typography variant="heading3"> Tracking performance for better results </Typography>
                                <Typography marginTop="30px">I designed internal tools that tracked algorithm performance and financial projections, which gave founders critical insights into what needed improvement and where growth opportunities might lie.</Typography>
                            </Box>

                        </Box>
                    </Box>

                    {/* User Analysis */}
                    <Box
                        id="User Analysis"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            scrollMargin: '90px',
                        }}>
                        <Stack gap='20px'>
                            <SectionTag text="USER ANALYSIS" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                            <Typography variant="heading3">Leveraging user insights and feedback</Typography>
                        </Stack>
                        <Typography>As an unreleased product, formal usability testing was still pending. However, we initiated internal testing sessions with other interns and new team members to <b>gather early feedback</b>.</Typography>
                        <Typography>These informal studies highlighted several key issues:</Typography>
                        <Stack gap="20px" direction="row">
                            <Box sx={{
                                width: '30%',
                                py: '40px',
                                px: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#1C1D21',
                                color: '#383A40',
                                borderRadius: '8px',
                                border: 'solid'
                            }}>
                                <Typography variant="body1"> Networking features and benefits were <b>unclear</b> </Typography>
                            </Box>
                            <Box sx={{
                                width: '30%',
                                py: '40px',
                                px: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#1C1D21',
                                color: '#383A40',
                                borderRadius: '8px',
                                border: 'solid'
                            }}>
                                <Typography variant="body1"> The job board was <b>cluttered and confusing</b> </Typography>
                            </Box>
                            <Box sx={{
                                width: '30%',
                                py: '40px',
                                px: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#1C1D21',
                                color: '#383A40',
                                borderRadius: '8px',
                                border: 'solid'
                            }}>
                                <Typography variant="body1"> The messages tab was <b>rarely used</b> </Typography>
                            </Box>
                        </Stack>
                        <Stack gap="20px">
                            <Typography color="#4674FF">ITERATION </Typography>
                            <Typography variant="heading3"> Job Board </Typography>
                            <Typography> The job board had many new features that required onboarding, especially the rating feature to match recruiters with candidates. I consolidated the page to contain the most relevant information, and added an instructional section to the top of the page to help users understand the page and begin exploring.</Typography>
                        </Stack>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={iteration1} width="100%" />
                        </Box>

                        <Stack gap="20px">
                            <Typography variant="heading3">Connections</Typography>
                            <Typography>Initially, the Connections page was a default Messaging interface. However, the design team received feedback that there <b>wasn’t a strong incentive to use the page.</b> We then redesigned this page into “Connections,” which became a hub for both tracking recruiter/candidate matches and referrals, and messaging new people in the network.</Typography>
                        </Stack>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={iteration2} width="100%" />
                        </Box>
                    </Box>

                    {/* Pivot */}
                    <Box
                        id="Pivot"
                        sx={{
                            display: 'flex',
                            scrollMargin: '90px',
                            flexDirection: 'column',
                            gap: '40px'
                        }}>
                        <Stack gap="20px">
                            <SectionTag text="PIVOT" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                            <Typography variant="heading3"> Expanding into the AI market </Typography>
                        </Stack>
                        <Typography>Near the end of my internship, Evallos shifted toward a new direction: AI model evaluation and allocation.</Typography>
                        <Typography> AlgoLink’s base technology <b>could be leveraged</b> to assess and optimize third-party AI models and train them to improve. I explored interface designs that allowed users to connect their models through API keys, view model performance, and identify areas and datasets to train with. When ideating, I gathered a <b>key insight</b>:</Typography>
                        <Box sx={{
                            width: '100%',
                            py: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '8px',
                            border: 'solid'
                        }}>
                            <Typography variant="heading3" width="85%">
                                <span style={{ color: '#4674FF', fontWeight: 'bold' }}> AI model personas were very similar to job applicants</span>
                                , each needing to be evaluated, improved, and matched to the right company. </Typography>
                        </Box>
                        <Typography> This parallel allowed us to <b>repurpose designs and code</b> from the original recruitment platform for quicker implementation.</Typography>
                        <Typography> I took the initiative to redesign the “Courses” and “Test Center” pages to fit model evaluation, and while ideating, I brought ideas and early concepts for pricing structures, helping the team think through different <b>monetization models</b> for the pages.</Typography>
                    </Box>

                    {/* final screens */}
                    <Box id="Final Screens"
                        sx={{
                            display: 'flex',
                            scrollMargin: '90px',
                            flexDirection: 'column',
                            gap: '40px'
                        }}>
                        <SectionTag text="FINAL SCREENS" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />

                        <Typography variant="heading3"> Job Board</Typography>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={jobs} width="100%" />
                        </Box>

                        <Typography variant="heading3"> Connections </Typography>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={connections} width="100%" />
                        </Box>

                        <Typography variant="heading3"> Data Visualization </Typography>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={research1} width="100%" />
                        </Box>
                        <Box width="100%" display="flex" justifyContent="center">
                            <img src={research2} width="100%" />
                        </Box>

                        <Box sx={{
                            width: '100%',
                            py: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: '#1C1D21',
                            color: '#383A40',
                            borderRadius: '8px',
                            border: 'solid',
                            alignItems: 'center',
                        }}>
                            <Typography width="85%" textAlign="center"> Due to NDA, my designs for the new Evallos product are not publicly available. </Typography>
                        </Box>
                    </Box>

                    {/* reflection */}
                    <Box
                        id="Reflection"
                        sx={{
                            display: 'flex',
                            scrollMargin: '90px',
                            flexDirection: 'column',
                            gap: '40px'
                        }}>
                        <SectionTag text="TAKEAWAYS AND REFLECTION" textColor="white" backgroundColor="#0E1C43" secondaryColor="#003DF5" />
                        <Typography variant="heading3"> Fast-paced, measurable impacts </Typography>
                        <Stack direction="row" gap="10%">
                            <Box sx={{
                                width: { xs: '100%', sm: '100%', md: '45%', lg: '45%' },
                            }}>
                                <Typography variant="heading2"> Design and Business</Typography>
                                <Typography paddingTop="20px"> Within an early-stage startup, I was able to directly discuss and contribute to AlgoLink's business decisions and company goals. It was incredibly engaging to work at the intersection of business and design, and made me realize the importance creating a valuable concept that will succeed in the market.
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: { xs: '100%', sm: '100%', md: '45%', lg: '45%' },
                            }}>
                                <Typography variant="heading2"> Clarifying Goals to Meet Deadlines</Typography>
                                <Typography paddingTop="20px">Prior to finalizing investors and funding, my team and I were working on tight deadlines to provide visuals and functionality for pitchdecks. One key takeaway I gained from this experience was the necessity of taking initiative to clarify concepts and drive projects forward.</Typography>
                            </Box>
                        </Stack>

                    </Box>

                    <Typography variant="heading1" width="100%" color="#4674FF" textAlign="center" > Thank you for reading!</Typography>
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
            </Box >
        </ThemeProvider >
    )
}