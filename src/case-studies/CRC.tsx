import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import Footer from "../components/Footer"
import Thumbnail from "../components/Thumbnail";

import Banner from "../assets/CRSite/banner.png"
import Team from "../assets/CRSite/team.jpg"
import OS1 from "../assets/CRSite/old-site-1.png"
import OS2 from "../assets/CRSite/old-site-2.png"
import form1 from "../assets/CRSite/survey2.png"
import form2 from "../assets/CRSite/survey1.png"
import keep from "../assets/CRSite/keep-diagram.png"
import problems from "../assets/CRSite/problems-diagram.png"
import hover from "../assets/CRSite/hover.png"
import subteam from "../assets/CRSite/subteams-link.png"
import threelb from "../assets/CRSite/3lb-link.png"
import mobile1 from "../assets/CRSite/mobile1.png"
import mobile2 from "../assets/CRSite/mobile2.png"
import about from "../assets/CRSite/about.png"
import alana from "../assets/CRSite/alana.png"
import algolink from '../assets/AlgoLink/Banner.png'
import evently from '../assets/Evently/banner.png'

import hoverVid from "../assets/CRSite/autonomous-hover.mp4"
import subteamHoverVid from "../assets/CRSite/team-button-hovers.mp4"
import memberCard from "../assets/CRSite/hover-member.png"
import explodeVid from "../assets/CRSite/robot-explode.mp4"
import arcadeVid from "../assets/CRSite/Arcade.mp4"

const theme = createTheme({
    typography: {
        heading1: {
            fontFamily: "Josefin Sans",
            color: 'white',
            fontSize: "1.75rem",
            fontWeight: "normal"
        },
        heading2: {
            color: '#B21D1D',
            fontFamily: "Josefin Sans",
            fontSize: "1rem"
        },
        heading3: {
            color: 'white',
            fontFamily: "Josefin Sans",
            fontSize: "2rem"
        },
        body1: {
            color: 'white',
            fontFamily: "Josefin Sans",
            fontSize: "1rem"
        },
        body2: {
            color: 'white',
            fontFamily: "Josefin Sans",
            fontSize: "0.8rem"
        },
    },
    palette: {
        primary: {
            main: '#B21C1C',
        },
        background: {
            main: '#1C1C1C',
        }
    },
})

export default function CRC() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                zIndex: 50,
                overflowY: 'auto',
                width: '100vw',
                top: '0px', left: '0px', bottom: '0px',
                position: 'fixed',
                display: 'flex', flexDirection: 'column',
                backgroundColor: "#1C1C1C",
            }}>
                {/* contents */}
                <Box my="80px" mx="10%" sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "40px",
                }}>
                    <img src={Banner} width="100%" />
                    <Stack gap="20px">
                        <Typography variant="heading1"> Combat Robotics @ Cornell </Typography>
                        <Typography variant="body1"> Initiated a complete redesign of the Combat Robotics @ Cornell project team’s mobile and desktop site to modernize the design system for a more engaging and improved user experience. </Typography>

                    </Stack>

                    <Box display=' flex' justifyContent="center" marginBottom="24px">
                        <Button href={"https://combatrobotics.engineering.cornell.edu/"} target="_blank" rel="noopener noreferrer" sx={{
                            backgroundColor: '#4A1C1C',
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            width: '100%',
                            borderColor: '#B21C1C'
                        }}>
                            <Typography variant="body1" textTransform="none">
                                Visit Site
                            </Typography>
                        </Button>
                    </Box>
                    <Stack direction="row" spacing="auto" width="100%">
                        <Box >
                            <Typography marginBottom="12px"> Team </Typography>
                            <Typography> 4 designers </Typography>
                            <Typography> 5 designers </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Role </Typography>
                            <Typography> Head Product Designer </Typography>
                            <Typography> Programmer </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Timeline </Typography>
                            <Typography> August - December 2025 </Typography>
                        </Box>
                        <Box>
                            <Typography marginBottom="12px"> Tools/Skills </Typography>
                            <Stack>
                                <Typography> Figma </Typography>
                                <Typography> Design Systems </Typography>
                                <Typography> UX Research </Typography>
                                <Typography> React & Material UI </Typography>
                                <Typography> Javascript & Typescript</Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    {/* Background Info*/}
                    <Stack flexDirection="row" gap="40px" flexWrap="wrap">
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "30px",
                            width: { xs: '100%', sm: '100%', md: '45%', lg: '45%' },
                        }}
                        >
                            <Stack gap="20px">
                                <Typography variant="heading2"> PROJECT OVERVIEW </Typography>
                                <Typography variant="heading3"> Spearheading a website re-design to improve brand identity and image </Typography>
                            </Stack>
                            <Typography> As a member of the <Link to={"https://combatrobotics.engineering.cornell.edu/"} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Combat Robotics @ Cornell (CRC)</Link> project team, we participate in an annual combat robotics competition, NHRL. This year, the marketing sub-team and I took on the challenge of redesigning our team website to create an immersive web experience in order to promote our team at the event, and for future use in recruitment.</Typography>
                        </Box>
                        <img src={Team} style={{
                            width: '500px',
                            borderRadius: '20px',
                            objectFit: 'cover'
                        }} />
                    </Stack>

                    {/* Problem Space */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        paddingTop: '40px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <Typography variant="heading2"> PROBLEM SPACE </Typography>
                            <Typography variant="heading3"> Creating a better representation of our team </Typography>
                        </Box>
                        <Typography> Our team had been considering a website redesign for some time, as our current website was designed and programmed by an alumnus over 2 years ago. However, there were also many aspects of the site that we loved and wanted to maintain. This led us to our question: </Typography>
                        <Box width="100%" display="flex" alignItems="center" justifyContent="center">
                            <Box sx={{
                                border: '1px solid grey',
                                padding: '7%',
                                borderRadius: "20px"
                            }}>

                                <Typography variant="heading1" fontSize="2rem" width="85%"> How might we
                                    <span style={{ color: '#B21D1D', fontWeight: 'bold' }}> improve the design system and flow </span>
                                    of our website to
                                    <span style={{ color: "#B21D1D", fontWeight: 'bold' }}> better represent our team </span>
                                    and emphasize our personality?</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                width: '100%',
                                gap: "12px"
                            }}>
                                <img src={OS2} width="450px" />
                                <img src={OS1} width="450px" />
                            </Box>
                            <Typography paddingTop="8px" fontStyle="italic" width="100%" textAlign="center"> The old CRC website. </Typography>
                        </Box>
                    </Box>

                    {/* User Research */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <Typography variant="heading2"> USER RESEARCH </Typography>
                            <Typography variant="heading3"> Do we really need to redesign the website? </Typography>
                        </Box>
                        <Typography> I decided that it was important to get an full perspective on our site from old and new members, to ensure that a website redesign was necessary and would improve our team’s image. Our team had recently finished recruitment, so I created a user survey that was sent to 40+ members of the team, which sought to address the following key concerns: </Typography>

                        <Box display="flex" flexDirection="row" flexWrap="wrap">
                            <Box sx={{
                                flexWrap: 'wrap',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                width: '50%'
                            }}>
                                <Box sx={{
                                    width: '35%',
                                    minWidth: '420px'
                                }}>
                                    <img src={form1} width="100%" />
                                </Box>
                                <Box sx={{
                                    width: '35%',
                                    minWidth: '420px'
                                }}>
                                    <img src={form2} width="100%" />
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="body1">
                                    <ul >
                                        <li style={{
                                            padding: '20px'
                                        }}>What do users look for on the website?</li>
                                        <li style={{
                                            padding: '20px'
                                        }}>What were some potential difficulties that users ran into?</li>
                                        <li style={{
                                            padding: '20px'
                                        }}>Are there elements that users strongly liked/disliked?</li>
                                        <li style={{
                                            padding: '20px'
                                        }}>Will users explore more of the site if we redesign it?</li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Box>
                        <Typography> I received 23 responses, and after compiling them into an affinity map, I identified 3 key considerations. </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "40px"
                        }}>
                            <Stack direction="row" gap="40px" sx={{
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}>
                                <Stack gap="32px" width="40%" minWidth="400px">
                                    <Typography variant="heading3" fontSize="1.25rem">"The flow of the website didn't feel optimal." </Typography>
                                    <Stack direction="row" gap="2%">
                                        <ClearIcon sx={{ color: 'red' }} />
                                        <Typography variant="body1">Important information is nested in too many subpages</Typography>
                                    </Stack>
                                    <Stack direction="row" gap="2%">
                                        <ClearIcon sx={{ color: 'red' }} />
                                        <Typography variant="body1">Lack of mobile support is frustrating and impossible to
                                            navigate</Typography>
                                    </Stack>
                                </Stack>
                                <img src={problems} style={{
                                    width: '40%',
                                    minWidth: "420px"
                                }} />
                            </Stack>

                            <Stack direction="row" gap="40px" sx={{
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}>
                                <Stack gap="32px" width="40%" minWidth="400px">
                                    <Typography variant="heading3" fontSize="1.25rem">"So much text." </Typography>
                                    <Stack direction="row" gap="2%">
                                        <ClearIcon sx={{ color: 'red' }} />
                                        <Typography variant="body1">Pages contained walls of text with no visual variety</Typography>
                                    </Stack>
                                    <Stack direction="row" gap="2%">
                                        <ClearIcon sx={{ color: 'red' }} />
                                        <Typography variant="body1"> Some pages were extremely long and deterred people
                                            from reading through</Typography>
                                    </Stack>
                                </Stack>
                                <img src={problems} style={{
                                    width: '40%',
                                    minWidth: "420px"
                                }} />
                            </Stack>

                            <Stack direction="row" gap="40px" sx={{
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}>
                                <Stack gap="32px" width="40%" minWidth="400px">
                                    <Typography variant="heading3" fontSize="1.25rem">"I love the small details." </Typography>
                                    <Stack direction="row" gap="2%">
                                        <CheckIcon sx={{ color: 'green' }} />
                                        <Typography variant="body1"> Users liked some interactive and unique features</Typography>

                                    </Stack>
                                    <Stack direction="row" gap="2%">
                                        <CheckIcon sx={{ color: 'green' }} />
                                        <Typography variant="body1">Features like the pixel art robots were interesting and showed personality</Typography>
                                    </Stack>
                                </Stack>
                                <img src={keep} style={{
                                    width: '40%',
                                    minWidth: "420px"
                                }} />
                            </Stack>
                        </Box>
                        <Typography variant="body1"> I had browsed the site several times and experienced many of the same issues, so the feedback that I received lined up with what I was expecting. However, the perspectives of our new members brought to light some issues with the content of our site, namely the fact that our team’s culture was not clearly conveyed, which was a big concern. Therefore, I synthesized the information into the persona of a prospective applicant to the team.</Typography>

                        <Typography variant="heading2" color='#8D8D8D'> USER PERSONA </Typography>

                        <Stack paddingTop="20px" paddingBottom="40px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" direction="row" gap="50px">
                            <img width="200px" src={alana} />
                            <Box display="flex" flexDirection="column">
                                <Typography paddingBottom="24px" variant="heading3" fontSize="1.25rem">Alana, Prospective Applicant to CRC (Freshman) </Typography>
                                <Typography>Goals:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul style={{ color: 'white' }}>
                                        <li> <Typography> Get to know our team's work and culture </Typography></li>
                                        <li> <Typography> See if our team is a good fit </Typography> </li>
                                        <li> <Typography> Apply and join our team</Typography> </li>
                                    </ul>
                                </Box>
                                <Typography>Painpoints:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul style={{ color: 'white' }}>
                                        <li> <Typography> Overwhelmed by information about our robots and subteams</Typography></li>
                                        <li> <Typography> Can't find information about team culture </Typography> </li>
                                        <li> <Typography> Disappointed by lackluster visual design </Typography> </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Stack>

                        <Typography variant="body1">With this persona in mind, my team and I decided on main things to keep and change when moving forward.</Typography>
                        <Stack direction="row" gap="24px" sx={{
                            flexWrap: 'wrap',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box width="45%" minWidth="400px" sx={{
                                borderRadius: '10px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                py: '24px'
                            }}>
                                <Stack gap="4%" direction="row" width="100%" justifyContent='center'>
                                    <Typography fontWeight="bold"> What to Keep </Typography>
                                    <CheckIcon sx={{ color: 'green' }} />=
                                </Stack>
                                <ul style={{ color: 'white' }}>
                                    <li> <Typography variant="body1"> Maintain originality in design </Typography></li>
                                    <li> <Typography variant="body1"> Keep interactivity </Typography></li>
                                    <li> <Typography variant="body1"> Page heirarchy is ok </Typography></li>
                                </ul>

                            </Box>

                            <Box width="45%" minWidth="400px" sx={{
                                borderRadius: '10px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                py: '24px'
                            }}>
                                <Stack gap="4%" direction="row" width="100%" justifyContent='center'>
                                    <Typography fontWeight="bold"> What to Change </Typography>
                                    <ClearIcon sx={{ color: 'red' }} />=
                                </Stack>                                <ul style={{ color: 'white' }}>
                                    <li> <Typography variant="body1"> Transition to dark mode </Typography></li>
                                    <li> <Typography variant="body1"> Abstract out text </Typography></li>
                                    <li> <Typography variant="body1"> Emphasize team mission and goals </Typography></li>
                                </ul>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Design System */}
                    < Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "40px"
                    }}>
                        < Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "24px"
                        }}>
                            <Typography variant="heading2"> DESIGN SYSTEM </Typography>
                            <Typography variant="heading3" > Creating a consistent and unique brand</Typography>
                        </Box>
                        <Typography> We decided to make our designs convey an approachable and polished mood to the consumer, and came up with the following design system. Darker pink and yellow brought excitement for event discovery, and we particularly focused on ensuring spacing and typography was accessible for mobile devices.</Typography>

                        <Box py="40px" width="100%" borderRadius="20px" sx={{
                            border: '1px solid grey',
                            flexDirection: 'column',
                            display: 'flex',
                            gap: '40px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* top row colors & spacing*/}
                            <Box sx={{
                                display: "flex",
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '100%',
                                gap: { xs: '40px', sm: '40px', md: '8%', lg: '8%' }

                            }}>
                                {/* colors */}
                                <Stack direction="column" gap="20px"
                                    width='90%'
                                >
                                    <Typography variant="heading2" color="#8D8D8D"> COLORS </Typography>
                                    <Stack direction="row" flexWrap="wrap" gap="20px">
                                        <Box >
                                            <Box sx={{ backgroundColor: "#B21D1D", marginBottom: '20px', width: "120px", height: '120px', }} />
                                            <Typography>#B21D1D</Typography>
                                        </Box>
                                        <Box>
                                            <Box sx={{ backgroundColor: "#FFFFFF", marginBottom: '20px', width: "120px", height: '120px', }} />
                                            <Typography>#FFFFFF</Typography>
                                        </Box>
                                        <Box >
                                            <Box sx={{ backgroundColor: "#772525", marginBottom: '20px', width: "120px", height: '120px', }} />
                                            <Typography>#772525</Typography>
                                        </Box>
                                        <Box>
                                            <Box sx={{ backgroundColor: "#ED9191", marginBottom: '20px', width: "120px", height: '120px', }} />
                                            <Typography>#ED9191</Typography>
                                        </Box>
                                        <Box marginBottom="20px">
                                            <Box sx={{ backgroundColor: "#630809", marginBottom: '20px', width: "120px", height: '120px', }} />
                                            <Typography>#ED9191</Typography>
                                        </Box>
                                        <Box marginBottom="20px">
                                            <Box sx={{ backgroundColor: "#1C1C1C", marginBottom: '20px', width: "120px", height: '120px', outlineStyle: 'solid', outlineColor: 'white' }} />
                                            <Typography>#1C1C1C</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '90%',
                                gap: { xs: '40px', sm: '40px', md: 'auto', lg: 'auto' }
                            }}>
                                {/* Text */}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    gap: '20px',
                                    width: { xs: '90%', sm: '90%', md: '40%', lg: '40%' },
                                }}>

                                    <Typography variant="heading2" color="#8D8D8D"> TEXT HIERARCHY </Typography>
                                    <Typography fontSize="40px"> Impact Text (40px) </Typography>
                                    <Typography fontSize="24px"> Header 1 (24px) </Typography>
                                    <Typography fontSize="20px"> Header 2 (20px) </Typography>
                                    <Typography fontSize="16px"> Body 1 (16px) </Typography>
                                    <Typography fontSize="12px"> Descriptor (12px) </Typography>
                                </Box>

                                {/* Typography*/}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    width: { xs: '90%', sm: '90%', md: '40%', lg: '40%' },
                                    gap: { xs: '40px', sm: '40px', md: '8%', lg: '8%' }
                                }}>
                                    <Typography variant="heading2" color="#8D8D8D"> TYPOGRAPHY </Typography>
                                    <Typography> Josefin Sans (universal) </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box >
                    {/* Iteration */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Stack gap="20px">
                            <Typography variant="heading2"> ITERATIONS AND FEEDBACK</Typography>
                            <Typography variant="heading3"> A critical step for improved usability </Typography>
                        </Stack>
                        <Typography variant="body1"> Due to time constraints, we had already created high-fidelity designs of our site for developers to begin programming. However, I quickly realized some aspects of our design were confusing for first-time users and needed improvement. This led us to a round of user testing using a combination of Figma prototypes and finished implementations. </Typography>
                        <Box width="100%" display="flex" alignItems="center" justifyContent="center">
                            <Box sx={{
                                border: '1px solid grey',
                                padding: '7%',
                                borderRadius: "20px"
                            }}>

                                <Typography variant="heading1" fontSize="2rem" width="85%"> This round of testing revealed
                                    <span style={{ color: '#B21D1D', fontWeight: 'bold' }}> flaws </span>
                                    in our user assumptions and led to
                                    <span style={{ color: "#B21D1D", fontWeight: 'bold' }}> significant change </span>
                                    and improvements to the features we designed. </Typography>
                            </Box>
                        </Box>

                        <Typography variant="body1"> We had been working on the design for well over 2 months, and were used to its functionality. Then, when interviewing new users, we were surprised to find that they thought some of the features were confusing and unintuitive.</Typography>

                        <Typography variant="heading3" fontSize="1.5rem"> Hopeless Hovers</Typography>
                        <Typography variant="body1"> In order to compress the text-heavy team descriptions, I abstracted them out into “optional” hover buttons, which displayed a popup when hovering over them. This allowed users to be able to access specific content if they were curious, while not overwhelming others who were looking for a brief overview of each subteam.</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                            flexWrap: 'wrap'
                        }}>
                            <img src={hover} height="260px" />
                            <video height="260px" controls>
                                <source src={hoverVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>

                        <Typography variant='body1'> But, since the information popups appeared directly on top of the row of buttons (see video), users found it difficult to swap between sections. Therefore, we decided to move the popup to appear above the buttons, which would only cover text that the user has already read. </Typography>
                        <Typography variant='heading3' fontSize="1.5rem">  Connecting Content </Typography>
                        <Typography variant='body1'>  Our users’ fresh perspective also brought ideas that greatly improved our information architecture, such as connecting within a page for a linear flow. In this manner, the subteam and new member project pages were individually connected to their relevant pages.</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                            flexWrap: 'wrap'
                        }}>
                            <img src={subteam} height="260px" />
                            <img src={threelb} height="260px" border="1px" />
                        </Box>
                    </Box>

                    {/* Final */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Stack gap="20px">
                            <Typography variant="heading2"> FINAL SOLUTIONS </Typography>
                            <Typography variant="heading3"> Improvements that stuck, and new ideas that worked </Typography>

                        </Stack>
                        <Stack gap="40px" flexWrap="wrap" direction="row" alignItems='center'>
                            <Box width="500px" >
                                <Typography variant="heading3" fontSize="1.5rem"> Introduce The Team </Typography>
                                <Typography variant="body1" paddingTop="40px"> I added concise summaries of our team to the home page to better represent our team to prospective applicants. Since we still wanted applicants to attend information sessions, this section was meant to be an introduction to the team to pique interest. </Typography>
                            </Box>
                            <img src={about} width="400px" />
                        </Stack>

                        <Stack direction="row" gap="40px" alignItems='center' justifyContent="center" flexWrap="wrap">
                            <img src={mobile1} width="25%" style={{ minWidth: '200px' }} />
                            <Box width="25%" style={{ minWidth: '200px' }}>
                                <Typography variant="heading3" fontSize="1.5rem"> Mobile Compatibility </Typography>
                                <Typography variant="body1" paddingTop="40px"> We dedicated significant time to ensuring the site was mobile-friendly on both the design and implementation side, as many of our users said they browsed the site on their phones.  </Typography>
                            </Box>
                            <img src={mobile2} width="25%" style={{ minWidth: '200px' }} />
                        </Stack>

                        <Typography variant="heading3" fontSize="1.5rem"> Maintaining Individuality </Typography>
                        <Typography variant="body1"> Finally, since so many of our interviewees enjoyed more interactive and fun elements in our original site, we decided to keep the robot timeline from the original site, and add new and interesting visual elements as well.  </Typography>
                        <Stack gap="24px" sx={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '24px',
                                flexWrap: 'wrap'
                            }}>
                                <img src={memberCard} height="260px" />
                                <video height="260px" controls>
                                    <source src={explodeVid} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '24px',
                                flexWrap: 'wrap'
                            }}>
                                <video height="260px" controls>
                                    <source src={subteamHoverVid} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video height="260px" controls>
                                    <source src={arcadeVid} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Reflection */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <Typography variant="heading2"> TAKEAWAYS AND REFLECTION</Typography>
                        <Typography variant="heading1"> Lessons learned from a rocky road </Typography>
                        <Stack direction="row" gap="10%">
                            <Box width="45%">
                                <Typography variant="body1" fontSize="1.5rem"> Adaptation Is Key </Typography>
                                <Typography paddingTop="20px" variant="body1"> This was the first product design project I had ever participated in, and since we did not have other designers with previous experience, I was thrust into a leadership role I wasn’t perfectly prepared for. However, necessity is the mother of invention, and I am extremely proud of the progress that not only I, but all my teammates, made in the realm of design and development. </Typography>

                            </Box>
                            <Box width="45%">
                                <Typography variant="body1" fontSize="1.5rem"> Balancing Tasks for Efficient Design </Typography>
                                <Typography variant="body1" paddingTop="20px"> As a designer and programmer of this project, I was able to learn a lot about what was required for effective implementation for both teams. Through our iterations, I quickly learned that it’s not a good idea to sacrifice user testing for a faster end product. Programmers need designs to implement, so giving a design to initially implement while beginning user testing can allow for a quicker turnaround on both programming and design.</Typography>
                            </Box>
                        </Stack>
                    </Box>

                    <Typography variant="heading2" width="100%" textAlign="center" fontSize="50px"> Thank you for reading!</Typography>
                    <Typography variant="heading2" width="100%"> UP NEXT: </Typography>
                    <Stack gap="20px" direction="row" alignItems="start" justifyContent="center" flexWrap="wrap">
                        <Thumbnail
                            name="AlgoLink (Evallos)"
                            mainTag="Design Internship"
                            tags="/ Desktop / Startup"
                            color="#003DF5"
                            imgsrc={algolink}
                            date="May 2025 - present"
                            description="Recruitment done right. Iterating and finalizing product designs for AlgoLink’s jobs and connections features, onboarding, and more."
                            link="/algolink"
                            width="48%"
                            dark={true}
                            rotate="2deg" />
                        <Thumbnail
                            name="Evently"
                            mainTag="Design Consulting at Cornell"
                            tags="/ Mobile / 0 -> 1 Design"
                            color="#FF6F8D"
                            imgsrc={evently}
                            date="Feb - May 2025"
                            description="Event discovery on campus, personalized. Designing a better event discovery platform to build community and lasting connection."
                            link="/evently"
                            dark={true}
                            width="48%"
                        />
                    </Stack>
                </Box>
                <Footer color="white" />
            </Box>
        </ThemeProvider >
    );
}