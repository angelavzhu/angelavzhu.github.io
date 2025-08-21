import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import Footer from "../components/Footer"

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
            color: 'white',
            fontFamily: "Josefin Sans",
            fontSize: "1.5rem"
        },
        heading3: {
            color: 'white',
            fontFamily: "Josefin Sans",
            fontSize: "1.25rem"
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
            main: '#B21D1D',
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
                    <Box width="80vw">
                        <img src={Banner} width="100%" />
                        <Box display=' flex' justifyContent="center" marginBottom="24px">
                            <Button href={"https://combatrobotics.engineering.cornell.edu/"} target="_blank" rel="noopener noreferrer" sx={{
                                backgroundColor: '#4A1C1C',
                                borderRadius: '10px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                width: '70%',
                                borderColor: '#B21C1C'
                            }}>
                                <Typography variant="body1" textTransform="none">
                                    Visit Site
                                </Typography>
                            </Button>
                        </Box>
                    </Box>


                    <Typography variant="heading1"> Combat Robotics @ Cornell </Typography>
                    <Typography variant="body1"> Initiated a complete redesign of the Combat Robotics @ Cornell project team’s mobile and desktop site to modernize the design system for a more engaging and improved user experience. </Typography>
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
                            rowGap: "30px"
                        }}
                        >
                            <Typography variant="heading2"> How It Started </Typography>
                            <Typography> As a member of the <Link to={"https://combatrobotics.engineering.cornell.edu/"} target="_blank" rel="noopener noreferrer">Combat Robotics @ Cornell (CRC)</Link> project team, we participate in an annual combat robotics competition, NHRL. This year, the marketing sub-team and I took on the challenge of redesigning our team website to create an immersive web experience to help promote our team to members at the event and for future use in recruitment.</Typography>
                            <Typography> I took on the role of lead designer to spearhead the design of the site, with a goal of creating a new and exciting website that modernized the old design while emphasizing our team’s individuality.</Typography>
                        </Box>
                        <img src={Team} style={{
                            width: '400px',
                            borderRadius: '20px',
                            objectFit: 'cover'
                        }} />
                    </Stack>

                    {/* Problem Space */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }}>
                            <Typography variant="heading2"> Problem Space </Typography>
                            <Typography variant="heading3" fontStyle="italic"> Creating a better representation of our team. </Typography>
                        </Box>
                        <Typography> Our team had been considering a website redesign for some time, as our current website was designed and programmed by one person over 2 years ago. Many members of the team have agreed that the design did not align with our team’s image, and wanted improvements to the site’s navigation, colors, and theme. However, there were also many aspects of the site that we loved and wanted to maintain. This led us to our question: </Typography>
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
                            gap: '24px'
                        }}>
                            <Typography variant="heading2"> User Research </Typography>
                            <Typography variant="heading3" fontStyle="italic"> Why do we need to redesign the website? </Typography>
                        </Box>
                        <Typography> I decided that it was important to get an full perspective on our site from old and new members, to ensure that a website redesign was necessary and would improve our team’s image. Our team had recently finished recruitment, so I created a user survey that was sent to 40+ members of our team, which sought to address the following key concerns: </Typography>

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
                                    <Typography variant="heading3">"The flow of the website didn't feel optimal." </Typography>
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
                                    <Typography variant="heading3">"So much text." </Typography>
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
                                    <Typography variant="heading3">"I love the small details." </Typography>
                                    <Stack direction="row" gap="2%">
                                        <CheckIcon sx={{ color: 'green' }} />
                                        <Typography variant="body1"> Users liked some interactive and unique features</Typography>

                                    </Stack>
                                    <Stack direction="row" gap="2%">
                                        <CheckIcon sx={{ color: 'green' }} />
                                        <Typography variant="body1">Features like the pixel art robots were interesting and showed personality
                                            from reading through</Typography>
                                    </Stack>
                                </Stack>
                                <img src={keep} style={{
                                    width: '40%',
                                    minWidth: "420px"
                                }} />
                            </Stack>
                        </Box>
                        <Typography variant="body1"> I had used the site several times and experienced many of the same issues, so the feedback that I received lined up with what I was expecting. However, the perspectives of our new members brought to light some issues with the content of our site, namely the fact that our team’s culture was not clearly conveyed, which was a big concern. Therefore, I synthesized the information into the persona of a prospective applicant to the team.</Typography>

                        <Typography variant="heading3"> User Persona</Typography>

                        <Stack width="100%" paddingTop="20px" paddingBottom="40px" display="flex" alignItems="center" flexWrap="wrap" direction="row" gap="50px">
                            <img width="200px" src={alana} style={{ borderRadius: '100px' }} />
                            <Box width="70%" display="flex" flexDirection="column">
                                <Typography paddingBottom="24px" variant="heading3">Alana, Prospective Applicant to CRC (Freshman) </Typography>
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
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Typography variant="heading2"> Design System</Typography>
                        <Typography variant="heading3" fontStyle="italic"> A modern take on a familiar brand. </Typography>
                        <Typography variant="body1"> With a trend towards dark mode in the current competitor landscape, we decided to pivot to a darker, limited color scheme of black and red to associate ourselves with Cornell, and innovation in robotics. </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: "80px",
                            flexWrap: 'wrap'
                        }}>
                            {/* Colors */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'column',
                                rowGap: "20px",
                                width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }
                            }}>
                                <Typography variant="heading3"> Colors </Typography>
                                <Stack direction="row" flexWrap="wrap" gap="20px">
                                    <Box >
                                        <Box sx={{ backgroundColor: "#B21D1D", marginBottom: '20px', width: "140px", height: '140px' }} />
                                        <Typography>#B21D1D</Typography>
                                    </Box>
                                    <Box>
                                        <Box sx={{ backgroundColor: "#FFFFFF", marginBottom: '20px', width: "140px", height: '140px' }} />
                                        <Typography>#FFFFFF</Typography>
                                    </Box>
                                    <Box >
                                        <Box sx={{ backgroundColor: "#772525", marginBottom: '20px', width: "140px", height: '140px' }} />
                                        <Typography>#772525</Typography>
                                    </Box>
                                    <Box>
                                        <Box sx={{ backgroundColor: "#ED9191", marginBottom: '20px', width: "140px", height: '140px' }} />
                                        <Typography>#ED9191</Typography>

                                    </Box>
                                    <Box>
                                        <Box marginBottom="20px">
                                            <Box sx={{ backgroundColor: "#630809", marginBottom: '20px', width: "140px", height: '140px' }} />
                                            <Typography>#ED9191</Typography>
                                        </Box>

                                    </Box>
                                </Stack>
                            </Box>

                            {/* RHS */}
                            <Stack gap="64px" sx={{
                                width: { xs: '100%', sm: '100%', md: '40%', lg: '40%' }

                            }}>
                                {/* Typography*/}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    gap: "20px",
                                }}>
                                    <Typography variant="heading3"> Typography </Typography>
                                    <Typography fontFamily="Work Sans"> Work Sans (header) </Typography>
                                    <Typography fontFamily="Hind"> Hind (body) </Typography>
                                </Box>
                                {/* Text */}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    gap: "20px",
                                }}>
                                    <Typography variant="heading3"> Text Heirarchy </Typography>
                                    <Typography fontSize="40px"> Impact Text (40px) </Typography>
                                    <Typography fontSize="24px"> Header 1 (24px) </Typography>
                                    <Typography fontSize="20px"> Header 2 (20px) </Typography>
                                    <Typography fontSize="16px"> Body 1 (16px) </Typography>
                                    <Typography fontSize="12px"> Descriptor (12px) </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: "80px",
                            flexWrap: 'wrap'
                        }}>




                        </Box>

                    </Box>

                    {/* Iteration */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        <Typography variant="heading2"> Iterations and Feedback</Typography>
                        <Typography variant="heading3" fontStyle="italic"> A critical step for improved usability. </Typography>
                        <Typography variant="body1"> Due to time constraints, we had already created high-fidelity prototypes of our site for developers to begin programming. However, I quickly realized some aspects of our design were confusing for first-time users and needed improvement. This led us to a round of user testing using a combination of Figma prototypes and finished implementations. </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" width="100%" sx={{
                            background: 'linear-gradient(to right,  #1C1C1C, #B21D1D)',
                            py: '32px',
                            overflowX: "auto"
                        }}>
                            <Typography variant="heading1" width="90%"> This round of testing revealed <b>flaws</b> in our user assumptions and led to <b>significant change</b> and improvements to the site.</Typography>
                        </Box>

                        <Typography variant="body1"> We had been working on the design for well over 2 months, and were used to its functionality. Then, when interviewing new users, we were surprised to find that they thought some of the features were confusing and unintuitive.</Typography>

                        <Typography variant="heading3"> Hopeless Hovers</Typography>
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

                        <Typography variant='body1'> But, since the information popups appeared directly on top of the row of buttons, users found it difficult to swap between sections. Therefore, we decided to move the popup to appear above the buttons, which would only cover text that the user has already read. </Typography>
                        <Typography variant='heading3'>  Connecting Content </Typography>
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
                        <Typography variant="heading2"> Final Solutions </Typography>
                        <Typography variant="heading3" fontStyle="italic"> Improvements that stuck, and new ideas that worked. </Typography>
                        <Stack gap="40px" flexWrap="wrap" direction="row" alignItems='center'>
                            <Box width="500px" >
                                <Typography variant="heading3"> Introduce The Team </Typography>
                                <Typography variant="body1" paddingTop="40px"> I added concise summaries of our team to the home page to better represent our team to prospective applicants. Since we still wanted applicants to attend information sessions, this section was meant to be an introduction to the team to pique interest. </Typography>
                            </Box>
                            <img src={about} width="400px" />
                        </Stack>

                        <Stack direction="row" gap="40px" alignItems='center' justifyContent="center" flexWrap="wrap">
                            <img src={mobile1} width="25%" style={{ minWidth: '200px' }} />
                            <Box width="25%" style={{ minWidth: '200px' }}>
                                <Typography variant="heading3" > Mobile Compatibility </Typography>
                                <Typography variant="body1" paddingTop="40px"> We dedicated significant time to ensuring the site was mobile-friendly on both the design and implementation side, as many of our users said they browsed the site on their phones.  </Typography>
                            </Box>
                            <img src={mobile2} width="25%" style={{ minWidth: '200px' }} />
                        </Stack>

                        <Typography variant="heading3"> Maintaining Individuality </Typography>
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
                        gap: '40px'
                    }}>
                        <Typography variant="heading2"> Review and Reflection </Typography>
                        <Typography variant="heading3" fontStyle="italic"> Lessons learned from a rocky road. </Typography>
                        <Typography variant="body1"> This was the first product design project I had ever participated in, and I had to lead it, too! As an engineering project team, we did not have designers with previous experience, and as the only member with some Figma knowledge, I was thrust into a role I wasn’t perfectly prepared for. However, necessity is the mother of invention, and I am extremely proud of the progress that not only I, but all my teammates, made in the realm of design and development. If I was to design CRC’s site again, I’d definitely stick to the double-diamond design process, and complete low, mid, and high fidelity prototypes to reduce the need to overhaul designs. </Typography>
                        <Typography variant="body1"> As a designer and programmer of this project, I was able to learn a lot about what was required for effective communication between the two teams. Through our iterations, I quickly learned that it’s not a good idea to sacrifice user testing for a faster end product. Programmers need designs to implement, of course, but giving a lower fidelity model for them to initially implement while beginning user testing can allow for a quicker turnaround on both programming and design sides if the design doesn’t hold up for users.</Typography>
                    </Box>
                </Box>
                <Footer color="white" />
            </Box>
        </ThemeProvider >
    );
}