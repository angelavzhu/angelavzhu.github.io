import { Box, Typography, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Thumbnail from "../components/Thumbnail";

import VideoCarousel from '../components/VideoCarousel'

import crc from '../assets/CRSite/thumbnail.png'
import algolink from '../assets/AlgoLink/Banner.png'
import NME from '../assets/Evently/NME.JPG'
import HMW from '../assets/Evently/HMW.png'
import banner from '../assets/Evently/banner.png'
import CG from '../assets/Evently/campusgroups.png'
import IG from '../assets/Evently/instagram.png'
import EV from '../assets/Evently/eventbrite.png'
import circle from '../assets/Evently/circleface.png'
import triangle from '../assets/Evently/triangleface.png'
import square from '../assets/Evently/boxface.png'
import bill from '../assets/Evently/bill.png'
import jennie from '../assets/Evently/jennie.png'
import surprised from '../assets/Evently/Surprised.png'
import journey from '../assets/Evently/JourneyMap.png'
import crazy8s from '../assets/Evently/crazy8.png'
import lowfis from '../assets/Evently/lowfis.png'
import issue1 from '../assets/Evently/issue1.png'
import issue2 from '../assets/Evently/issue2.png'
import fullStar from '../assets/Evently/rating.png'
import emptyStar from '../assets/Evently/norating.png'
import phone_case from '../assets/Evently/phone_case.png'
import background from '../assets/Evently/reviewbg.png'
import thanks from '../assets/Evently/thankyou.png'

const theme = createTheme({
    typography: {
        heading1: {
            fontFamily: "Work Sans",
            fontSize: "1.75rem",
            fontWeight: "normal"
        },
        heading2: {
            color: '#FF6F8D',
            fontFamily: "Work Sans",
            fontSize: "1rem"
        },
        heading3: {
            fontFamily: "Work Sans",
            fontSize: "2rem"
        },
        body1: {
            fontFamily: "Hind",
            fontSize: "1rem"
        },
        body2: {
            fontFamily: "Hind",
            fontSize: "0.8rem"
        },
    },
})

export default function Evently() {
    return (
        <ThemeProvider theme={theme}>
            <Box my="80px" mx="10%" sx={{
                display: "flex",
                flexDirection: 'column',
                gap: "40px",
            }}>
                <img src={banner} />
                {/* header */}
                <Box>
                    <Typography variant="heading1"> Evently </Typography>
                    <Typography variant="body1" marginTop="20px"> Designed an effortless and convenient event discovery platform for Cornell students to encourage more campus involvement and build thriving extracurricular communities.</Typography>
                </Box>
                <Stack direction="row" spacing="auto" width="100%" flexWrap="wrap">
                    <Box >
                        <Typography marginBottom="12px"> Team </Typography>
                        <Typography> 2 designers </Typography>
                    </Box>
                    <Box>
                        <Typography marginBottom="12px"> Role </Typography>
                        <Typography> Product Designer </Typography>
                    </Box>
                    <Box>
                        <Typography marginBottom="12px"> Timeline </Typography>
                        <Typography> March - May 2025 </Typography>
                    </Box>
                    <Box>
                        <Typography marginBottom="12px"> Tools/Skills </Typography>
                        <Stack>
                            <Typography> Figma & Figjam </Typography>
                            <Typography> Prototyping </Typography>
                            <Typography> UX Research </Typography>
                            <Typography> Product Thinking </Typography>
                            <Typography> Notion </Typography>
                        </Stack>
                    </Box>
                </Stack>

                {/* Background Info*/}

                <Stack flexDirection="row" gap="40px" flexWrap="wrap" alignItems="center" justifyContent="center" sx={{
                    justifyContent: 'space-between',

                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: { xs: '100%', sm: '100%', md: '40%', lg: '40%' }
                    }}
                    >
                        <Stack gap="20px">
                            <Typography variant="heading2"> PROJECT OVERVIEW </Typography>
                            <Typography variant="heading3"> Evently was a case study on how to streamline and centralize Cornell’s event discovery process</Typography>
                        </Stack>
                        <Typography py="40px">  As a part of <Link to={"https://www.designconsultingcornell.com/"} target="_blank" rel="noopener noreferrer">Design Consulting @ Cornell</Link>, my partner and I created an intuitive and personalized experience that encourages community building among students and organizations while allowing both large and small events to find their audiences.  </Typography>            </Box>
                    <img src={NME} style={{
                        width: '50%',
                        minWidth: '400px',
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
                        gap: '20px'
                    }}>
                        <Typography variant="heading2"> PROBLEM SPACE </Typography>
                        <Typography variant="heading3"> Cornell lacks uniquely individualized event recommendation </Typography>
                    </Box>
                    <Typography> When brainstorming ideas for our product, we noticed a shared issue for us and many of our peers: <b>event discovery on campus</b>. This led us to our question:</Typography>
                </Box>

                <Box py="5%" width="100%" display="flex" alignItems="center" justifyContent="center" borderRadius="20px" sx={{
                    border: '1px solid grey'
                }}>
                    <img src={HMW} style={{
                        padding: '12px',
                        width: "80%",
                    }} />
                </Box>

                {/* Research */}
                <Box display="flex" flexDirection="column" gap="40px">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <Typography variant="heading2"> RESEARCH </Typography>
                        <Typography variant="heading3" marginBottom="40px">A centralized and quick way to find interesting events is almost nonexistent</Typography>
                        <Typography variant="heading2" color="#5B5B5B">MARKET RESEARCH </Typography>
                    </Box>

                    {/* box with compet analysis */}
                    <Box py="40px" width="100%" borderRadius="20px" sx={{
                        border: '1px solid grey',
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box
                            width="100%"
                            marginBottom="60px"
                            display="flex"
                            flexWrap="wrap"
                            flexDirection="row"
                            gap="80px"
                            alignItems="center"
                            justifyContent="center" >
                            <Box width="200px" display="flex" flexDirection="column" gap="20px" alignItems="center" justifyContent="center">
                                <img src={CG} />
                                <Typography> CampusGroups</Typography>
                            </Box>
                            <Stack width="400px" gap='8px'>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Cornell’s official event hub, known and used by all students</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Event banners lead to eye catching and interesting promotion</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <ClearIcon sx={{ color: 'red' }} />
                                    <Typography variant="body1"> Lack of personalization makes it difficult to find relevant events</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <ClearIcon sx={{ color: 'red' }} />
                                    <Typography variant="body1"> UI is confusing and difficult to navigate</Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box marginBottom="60px" flexWrap="wrap" width="100%" display="flex" flexDirection="row" gap="80px" alignItems="center" justifyContent="center" >
                            <Box width="200px" display="flex" flexDirection="column" gap="20px" alignItems="center" justifyContent="center">
                                <img src={IG} />
                                <Typography> Instagram</Typography>
                            </Box>
                            <Stack width="400px" gap='8px'>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Consistent friend updates (eg. Stories, Posts)</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Keep up-to-date with followed organizations</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <ClearIcon sx={{ color: 'red' }} />
                                    <Typography variant="body1"> Not an event-focused platform</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <ClearIcon sx={{ color: 'red' }} />
                                    <Typography variant="body1"> Only showing followed content creates filter bubbles and stagnant feeds</Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box width="100%" display="flex" flexWrap="wrap" flexDirection="row" gap="80px" alignItems="center" justifyContent="center" >
                            <Box width="200px" display="flex" flexDirection="column" gap="20px" alignItems="center" justifyContent="center">
                                <img src={EV} />
                                <Typography> EventBrite</Typography>
                            </Box>

                            <Stack width="400px" gap='8px'>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Functionality is centered around events in and out of campus settings</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <CheckIcon sx={{ color: 'green' }} />
                                    <Typography variant="body1"> Promotes events of all sizes</Typography>
                                </Stack>
                                <Stack direction="row" gap="2%">
                                    <ClearIcon sx={{ color: 'red' }} />
                                    <Typography variant="body1"> Lacks connection with friends</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                {/* User Research */}
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "40px"
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <Typography variant="heading2" color="#5B5B5B"> LITERATURE REVIEW </Typography>
                        <Typography> I reviewed 3 academic journal araticles regarding social app design and noted the following: </Typography>
                    </Box>

                    <Stack direction="row" gap="5%">
                        {/* Opens link in new tab */}
                        <Box sx={{
                            backgroundColor: '#FFF1CB',
                            py: '60px',
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '20px'
                        }}>
                            <Typography width="80%"><Link to="https://www.sciencedirect.com/science/article/pii/S0306457324001250" target="_blank" rel="noopener noreferrer" >Relevance</Link> is the strongest indicator of event interest, closely followed by popularity</Typography>
                        </Box>

                        <Box sx={{
                            backgroundColor: '#FFD2AD',
                            py: '60px',
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            justifyContent: 'center'
                        }}>
                            <Typography width="80%"> Social interaction is <Link to="https://www.emerald.com/insight/content/doi/10.1108/jhtt-04-2022-0097/full/html" target="_blank" rel="noopener noreferrer" >important</Link> for user retention </Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: '#FFAAAE',
                            py: '60px',
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            justifyContent: 'center'
                        }}>
                            <Typography width="80%"><Link to="https://ieeexplore.ieee.org/abstract/document/6805126" target="_blank" rel="noopener noreferrer"> Real-time features </Link> like maps can be used to improve a user’s experience on-site</Typography>
                        </Box>
                    </Stack>
                    <Stack gap="20px">
                        <Typography variant="heading2"> USER INTERVIEWS </Typography>
                        <Typography variant="heading3"> Analyzing event attendance from a social and individual lens </Typography>
                    </Stack>
                    <Typography> With this new knowledge, I conducted several formal interviews with Cornell with the goal of understanding students' processes for discovering and attending events.</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "40px"
                    }}>
                        <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                            <img src={circle} />
                            <Box>
                                <Typography paddingBottom="2%">“I usually attend events with my friends, but if an event is truly interesting, <b> I don’t mind attending by myself. </b>” </Typography>
                                <Typography> - Concerned Circle, Biomedical Engineering ‘26</Typography>
                            </Box>
                        </Stack>

                        <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                            <Box>
                                <Typography paddingBottom="2%">“Finding fun events that I would not expect is also great. Once, I went to a random event that I saw as I was passing by, and it was <b>unexpectedly fun!</b>” </Typography>
                                <Typography> - Thoughtful Triangle, Chemistry and Biology ‘27</Typography>
                            </Box>
                            <img src={triangle} />
                        </Stack>

                        <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                            <img src={square} />
                            <Box>
                                <Typography paddingBottom="2%">“I <b> don’t want to see every event </b>that is currently happening, they’re usually not interesting to me.” </Typography>
                                <Typography> - Bored Box, Performing and Media Arts ‘28</Typography>
                            </Box>
                        </Stack>
                    </Box>

                    <Box py="5%" width="100%" display="flex" alignItems="center" justifyContent="center" borderRadius="20px" sx={{
                        border: '1px solid grey'
                    }}>
                        <img src={surprised} style={{
                            padding: '12px',
                            width: "80%",
                        }} />
                    </Box>

                    <Typography> We combined our findings into an <b> affinity map</b>, and we realized 4 main points: </Typography>
                    <Stack direction="column" gap="40px">
                        <Stack direction="row" justifyContent="space-between" gap="4%">
                            <Box sx={{
                                backgroundColor: '#FFF1CB',
                                py: '60px',
                                px: '4%',
                                gap: '8%',
                                width: '45%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '20px'
                            }}>
                                <Typography>ATTENDING EVENTS</Typography>
                                <Typography>Interviewees were evenly split on whether they attended events due to personal interest or as a social event</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: '#FFD2AD',
                                py: '60px',
                                px: '4%',
                                gap: '8%',
                                width: '45%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '20px'
                            }}>
                                <Typography>CURRENT SOLUTIONS</Typography>
                                <Typography>There was, as predicted, a large gap in the market for personalized event discovery</Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" gap="4%">
                            <Box sx={{
                                backgroundColor: '#FFAAAE',
                                py: '60px',
                                px: '4%',
                                gap: '8%',
                                width: '45%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '20px'
                            }}>
                                <Typography>SOCIAL ASPECTS</Typography>
                                <Typography> Students wanted to know friends’ activities and what they are attending</Typography>

                            </Box>
                            <Box sx={{
                                backgroundColor: '#FF819B',
                                py: '60px',
                                px: '4%',
                                gap: '8%',
                                width: '45%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '20px'
                            }}>
                                <Typography>EVENT ENJOYMENT</Typography>
                                <Typography>Unexpectedly good events (outside of comfort zone) are important </Typography>
                            </Box>
                        </Stack>
                    </Stack>

                    <Typography> We synthesized the gathered information into 2 main user personas: the <b>event attendee</b>, and <b>event organizer</b>. </Typography>

                    <Box>
                        <Typography variant="heading2" color="#5B5B5B"> USER PERSONAS </Typography>
                        <Stack paddingTop="20px" paddingBottom="40px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" direction="row" gap="50px">
                            <img src={bill} width="200px" />
                            <Box display="flex" flexDirection="column">
                                <Typography paddingBottom="24px" variant="body1" fontSize="1.25rem">Bill, Event Attendee (Freshman) </Typography>
                                <Typography>Goals:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul>
                                        <li> <Typography> Attend more events to find a community on campus</Typography></li>
                                        <li> <Typography> Discover fun events that fit in his schedule</Typography> </li>
                                    </ul>
                                </Box>
                                <Typography>Painpoints:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul>
                                        <li> <Typography> Doesn’t know if his friends will attend an event with him</Typography></li>
                                        <li> <Typography> Overwhelmed by options and doesn’t know what events are good</Typography> </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Stack>

                        <Stack paddingTop="20px" paddingBottom="40px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" direction="row" gap="50px">
                            <img src={jennie} width="200px" />

                            <Box>
                                <Typography paddingBottom="20px" variant="body1" fontSize="1.25rem">Jennie, Event Organizer (Junior) </Typography>
                                <Typography >Goals:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul>
                                        <li> <Typography> Advertise her event to the correct audience</Typography></li>
                                        <li> <Typography> Get feedback on her events and improve them</Typography> </li>
                                    </ul>
                                </Box>

                                <Typography>Painpoints:</Typography>
                                <Box marginLeft="20px" display="flex" flexDirection="column">
                                    <ul>
                                        <li> <Typography> Club events keep attracting the same people</Typography></li>
                                        <li> <Typography> Must advertise her events in an overwhelming number of platforms</Typography> </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Stack>

                        <Typography my="40px"> We decided to <b>focus on the event attendee </b>due to the scope of the project, and created the following journey map of the main issues that students face when attending a campus event.</Typography>

                        <img src={journey} width="100%" />
                    </Box>
                </Box >

                {/* Ideation */}
                < Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "40px"
                }
                }>
                    <Stack gap="20px">
                        <Typography variant="heading2">IDEATION</Typography>
                        <Typography variant="heading3">Developing solutions to form communities and encourage exploration</Typography>
                    </Stack>
                    <Typography>Now, with a comprehensive understanding of our problem space, we began sketching possible solutions to our questions. We kept the following considerations in mind:</Typography>
                    <Typography>
                        <ol>
                            <li><Typography>Integrate <b>personalization</b> into event discovery through a feed, with recommendations and areas to explore </Typography></li>
                            <li><Typography>Build communities by <b>following the activity</b> of compatible clubs and friends, but <b>without becoming</b> a <b>social media platform</b> </Typography></li>
                            <li><Typography>Ensure the product is <b>intuitive and easy to use</b>, and integrate preexisting, <b>reliable design patterns</b> to maximize user experience and trust </Typography></li>
                        </ol>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '50%'
                        }}>
                            <img src={crazy8s} width="100%" />
                            <Typography> Crazy 8s Ideation</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%',
                        }}
                        >
                            <img src={lowfis} width="80%" />
                            <Typography> Low-fidelity Ideation </Typography>
                        </Box>
                    </Box>
                </Box >

                {/* Iteration */}
                < Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "40px"
                }}>
                    < Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "20px"
                    }}>
                        <Typography variant="heading2">ITERATIONS AND FEEDBACK</Typography>
                        <Typography variant="heading3">Honing in on the best solution for humans, by humans</Typography>
                    </Box>
                    <Typography>We took the best ideas from our ideation and presented our ideas to 12 senior members of the team, and received the following feedback.</Typography>
                    <Typography variant="heading1" fontSize="1.5rem">A New, Yet Familiar Interface</Typography>
                    <Typography>I designed the profile interface with the intention of being a one-stop shop for all essential features for the user. However, when presenting this to new users, I realized that it was trying to cram too many features into one section-- a jack of all trades, master of none.</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img src={issue1} height="auto" width="50%" />

                    </Box>
                    < Typography variant="heading1" fontSize="1.5rem"> Big Changes for Bigger Impacts</Typography >
                    <Typography>A significant issue more than half of our reviewers noted was with our discover page, arguably the most important page for our product. The original design was intended to provide many different sections of events for the user to discover new and exciting listings, but again, this page suffered from information overload and an unintuitive interface.</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img src={issue2} height="auto" width="50%" />
                    </Box>
                </Box >

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
                            <Stack direction="column" gap="20px">
                                <Typography variant="heading2" color="#5B5B5B"> COLORS </Typography>
                                <Stack direction="row" spacing="80px">
                                    {/* Left column */}
                                    <Box>
                                        <Box marginBottom="20px">
                                            <Box sx={{ backgroundColor: "#FFCC3F", marginBottom: '20px', width: "160px", height: '160px' }} />
                                            <Typography>#FFCC3F</Typography>
                                        </Box>
                                        <Box>
                                            <Box sx={{ backgroundColor: "#FF6F8D", marginBottom: '20px', width: "160px", height: '160px' }} />
                                            <Typography>#FF6F8D</Typography>
                                        </Box>
                                    </Box>
                                    {/* Right column */}
                                    <Box>
                                        <Box marginBottom="20px">
                                            <Box sx={{ backgroundColor: "#FFBECC", marginBottom: '20px', width: "160px", height: '160px' }} />
                                            <Typography>#FFBECC</Typography>
                                        </Box>
                                        <Box>
                                            <Box sx={{ backgroundColor: "#FFE59F", marginBottom: '20px', width: "160px", height: '160px' }} />
                                            <Typography>#FFE59F</Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Stack>


                            {/* Spacing*/}
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: "20px",
                                width: { xs: '90%', sm: '90%', md: '400px', lg: '400px' }
                            }}>
                                <Typography variant="heading2" color="#5B5B5B"> SPACING </Typography>
                                <Box width="100%" height="72px" backgroundColor="#D9D9D9"></Box>
                                <Typography width="100%" align="right"> Top Margin <b>72</b> </Typography>
                                <Box width="100%" height="30px" backgroundColor="#D9D9D9"></Box>
                                <Typography width="100%" align="right"> Section padding <b>30</b> </Typography>
                                <Box width="100%" height="16px" backgroundColor="#D9D9D9"></Box>
                                <Typography width="100%" align="right"> Text padding <b>16</b> </Typography>
                                <Box width="100%" height="8px" backgroundColor="#D9D9D9"></Box>
                                <Typography width="100%" align="right"> Tight padding <b>8</b> </Typography>
                            </Box>

                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            gap: { xs: '40px', sm: '40px', md: '8%', lg: '8%' }
                        }}>
                            {/* Text */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: '20px',
                                width: { xs: '90%', sm: '90%', md: '40%', lg: '40%' },
                            }}>
                                <Typography variant="heading2" color="#5B5B5B"> TEXT HIERARCHY </Typography>
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
                                <Typography variant="heading2" color="#5B5B5B"> TYPOGRAPHY </Typography>
                                <Typography fontFamily="Work Sans" fontWeight="bold"> Work Sans (header) </Typography>
                                <Typography fontFamily="Hind"> Hind (body) </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Box >

                {/* Final */}
                < Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "20px",
                }}>
                    <Typography variant="heading2"> FINAL PROTOTYPE </Typography>
                    <Typography variant="heading3"> Synthesizing a final product based on our findings </Typography>
                    <VideoCarousel />
                </Box >

                {/* Reflection */}
                <Typography variant="heading2"> REVIEW AND REFLECTION </Typography>
                <Stack alignItems="center" width="100%">
                    <Box
                        sx={{
                            backgroundImage: `url(${phone_case}), url(${background})`,
                            backgroundSize: 'cover, cover',
                            backgroundPosition: 'top, center',
                            paddingTop: '180px',
                            paddingBottom: '100px',
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            position: 'relative',
                            px: '100px',
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "30px",
                            borderRadius: '100px',
                            minHeight: '100vh'
                        }}>

                        <Typography width="100%" textAlign="center" variant="heading1" fontWeight="bold"> Evently: Lessons Learned </Typography>
                        <Typography textAlign="center" width="100%"> Your review will be sent directly to the event organizers so they can continue to improve future events. </Typography>
                        <Box>
                            <Typography marginBottom="10px"> Event Rating </Typography>
                            <Stack direction="row" gap="6px">
                                <img src={fullStar} width="50px" />
                                <img src={fullStar} width="50px" />
                                <img src={fullStar} width="50px" />
                                <img src={fullStar} width="50px" />
                                <img src={emptyStar} width="50px" />
                            </Stack>
                        </Box>
                        <Box>
                            <Typography paddingBottom="10px"> What Went Well </Typography>
                            <Box padding="20px" borderRadius="10px" sx={{ border: 1 }}>
                                <Typography marginBottom="24px"> As my first case study, going through the entire human-centered design process taught me a lot about the <b>importance of user testing and consistent feedback. </b></Typography>
                                <Typography marginBottom="24px">
                                    I learned that, while visually appealing or uniquely designed interfaces may be fun to create, they don’t always make for an app that consumers will want to use. Feedback and iteration are essential to create products that are innovative, yet prioritize a pleasant user experience. </Typography>
                                <Typography>
                                    All in all, this project was a fantastic exploration in collaborating with fellow designers and learning the basics of good design practice.</Typography>
                            </Box>
                            <Typography marginBottom="40px" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'right',
                                color: 'grey'
                            }}> Max 500 words</Typography>

                            <Typography paddingBottom="10px"> What Could Be Improved </Typography>
                            <Box padding="20px" borderRadius="10px" sx={{ border: 1, backgroundColor: 'white' }}>
                                <Typography marginBottom="24px"> Due to a shorter project duration, I was <b>unable to fully develop some of the interesting edge cases</b> that came up in our user research. If I were to create Evently again, I would want to put more focus on developing the friends feature.  </Typography>
                                <Typography marginBottom="24px">
                                    Event attendance can be a social decision, so having a more formalized way to access friends other than seeing their activity in event pages would make Evently a more interesting and engaging app. </Typography>
                                <Typography>
                                    This, plus creating an interface for event organizers to use the app, would be able to <b>fully address the issues that were frequently brought up</b> during our research.</Typography>
                            </Box>
                            <Typography marginBottom="40px" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'right',
                                color: 'grey'
                            }}> Max 500 words</Typography>
                        </Box>

                        <Box sx={{
                            backgroundColor: '#FFE59F',
                            width: '100%',
                            py: '10px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography> Submit Review </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '40px'
                    }}>
                        <img src={thanks} width="70%" />
                    </Box>
                </Stack>

                <hr width="90%" size="2" />

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
                        rotate="2deg" />

                    <Thumbnail
                        name="Combat Robotics @ Cornell"
                        mainTag="Website Redesign"
                        tags="/ Desktop & Mobile / Design Systems"
                        color="#B21D1D"
                        imgsrc={crc}
                        date="Jun - Aug 2025"
                        description="Re-designing the team website to better encapsulate the team culture and attract new applicants."
                        link="/crc"
                        rotate="2deg"
                        width="48%" />
                </Stack>
            </Box >
        </ThemeProvider >
    );
}
