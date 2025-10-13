import { Box, Typography, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import Thumbnail from "../components/Thumbnail";
import Navigation from "../components/PageNavigation";
import VideoCarousel from '../components/VideoCarousel'
import SectionTag from "../components/SectionTag";

import crc from '../assets/CRSite/thumbnail.png'
import algolink from '../assets/AlgoLink/Banner.png'
import NME from '../assets/Evently/NME.JPG'
import solution1 from '../assets/Evently/Solution1.png'
import solution2 from '../assets/Evently/Solution2.png'
import solution3 from '../assets/Evently/Solution3.png'
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
            fontSize: "3rem",
            fontWeight: "bold"
        },
        heading2: {
            color: 'black',
            fontFamily: "Work Sans",
            fontSize: "1rem",
            textTransform: 'uppercase',
        },
        heading3: {
            fontFamily: "Work Sans",
            fontWeight: "bold",
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
    const tabNames = ['Project Overview', 'Problem Space', 'Solution', 'Research', 'User Interviews', 'Ideation', 'Final Prototype', 'Reflection'];

    return (
        <ThemeProvider theme={theme}>
            <Box mx="8%">
                <Navigation color="#FF6F8D" tabNames={tabNames} mode="light" />
                <Box my="80px" sx={{
                    display: "flex",
                    flexDirection: 'column',
                    marginLeft: { xs: '0', sm: '0', md: '20%', lg: '20%' },
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
                            <Typography variant="heading2" marginBottom="12px"> Team </Typography>
                            <Typography marginTop="12px"> 2 designers </Typography>
                        </Box>
                        <Box>
                            <Typography variant="heading2" marginBottom="12px"> Role </Typography>
                            <Typography marginTop="12px"> Product Designer </Typography>
                        </Box>
                        <Box>
                            <Typography variant="heading2" marginBottom="12px"> Timeline </Typography>
                            <Typography marginTop="12px"> March - May 2025 </Typography>
                        </Box>
                        <Box>
                            <Typography variant="heading2" marginBottom="12px"> Tools/Skills </Typography>
                            <Stack>
                                <Typography marginTop="12px"> Figma & Figjam </Typography>
                                <Typography> Prototyping </Typography>
                                <Typography> UX Research </Typography>
                                <Typography> Product Thinking </Typography>
                                <Typography> Notion </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    {/* Background Info*/}
                    <Stack gap="20px" id="Project Overview" sx={{
                        scrollMargin: '90px',
                    }}>
                        {/* <Typography variant="heading2"> PROJECT OVERVIEW </Typography> */}
                        <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="PROJECT OVERVIEW" />
                        <Typography variant="heading3"> Evently was a case study on how to streamline and centralize Cornell’s event discovery process</Typography>
                    </Stack>

                    <Stack flexDirection="row" gap="40px" flexWrap="wrap" alignItems="center" justifyContent="center" sx={{
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }
                        }}
                        >
                            <Typography> As a part of <Link to={"https://www.designconsultingcornell.com/"} target="_blank" rel="noopener noreferrer">Design Consulting @ Cornell</Link>, my partner and I created an intuitive and personalized experience that encourages community building among students and organizations while allowing both large and small events to find their audiences.  </Typography>            </Box>
                        <img src={NME} style={{
                            width: '45%',
                            minWidth: '300px',
                            borderRadius: '20px',
                            objectFit: 'cover'
                        }} />
                    </Stack>

                    {/* Problem Space */}
                    <Box
                        id="Problem Space"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            scrollMargin: '90px',
                        }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="PROBLEM SPACE" />
                            <Typography variant="heading3"> Cornell lacks individualized event recommendation </Typography>
                        </Box>
                        <Typography> When brainstorming ideas for our product, we noticed a shared issue for us and many of our peers: <b>event discovery on campus</b>. This led us to our question:</Typography>
                    </Box>

                    <Box py="40px" px="10%" width="100%" borderRadius="20px" sx={{
                        border: '1px solid grey'
                    }}>
                        <Typography variant="heading3" fontWeight="normal" textAlign="center"> How might we </Typography>
                        <Typography variant="heading3" textAlign="center" sx={{
                            background: 'linear-gradient(to right,  #FFC23F, #FF6F8D)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}> improve the accessibility </Typography>
                        <Typography variant="heading3" fontWeight="normal" textAlign="center"> of campus events and  </Typography>
                        <Typography variant="heading3" textAlign="center" sx={{
                            background: 'linear-gradient(to right,  #FFC23F, #FF6F8D)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}> encourage more student involvement? </Typography>
                    </Box>

                    {/* Solution */}
                    <Box id="Solution" display="flex" flexDirection="column" gap="40px">
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="SOLUTION" />
                            <Typography variant="heading3" marginBottom="40px">A centralized hub for events and communities</Typography>
                            {/* box 1 */}
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: "14%"
                            }}>
                                <img src={solution1} height="400px" />
                                <Box width="300px">
                                    <Typography variant="heading3"> Helping Events Reach The Right Audience </Typography>
                                    <Typography marginTop="30px">I designed a recommendation feed with overall top events and specific user-based recommendations to encourage event exploration</Typography>
                                </Box>
                            </Box>

                            {/* box 2 */}
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: "14%",
                                paddingLeft: '15%'
                            }}>
                                <Box width="300px">
                                    <Typography variant="heading3"> Forming Connection </Typography>
                                    <Typography marginTop="30px">I created a profile hub to track organizations and friends so students can find communities and attend events together</Typography>
                                </Box>
                                <img src={solution2} height="400px" />
                            </Box>

                            {/* box 3 */}
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: "14%"
                            }}>
                                <img src={solution3} height="400px" />
                                <Box width="300px">
                                    <Typography variant="heading3"> Encouraging Involvement </Typography>
                                    <Typography marginTop="30px">I included a quick and easy feedback feature to encourage more students to leave event reviews</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Research */}
                    <Box id="Research" display="flex" flexDirection="column" gap="40px" sx={{
                        scrollMargin: '90px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="RESEARCH" />
                            <Typography variant="heading3" marginBottom="40px">A convenient way to find interesting events is almost nonexistent</Typography>
                            <Typography variant="heading2" color="#5B5B5B">MARKET RESEARCH </Typography>
                            <Typography> To begin addressing the problem, I first researched existing products to see if there was a gap in the market.</Typography>
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

                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                            gap: '20px',
                        }}>
                            {/* Opens link in new tab */}
                            <Box sx={{
                                backgroundColor: '#FFF1CB',
                                py: '60px',
                                width: { xs: '100%', sm: '100%', md: '33%', lg: '33%' },
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
                                width: { xs: '100%', sm: '100%', md: '33%', lg: '33%' },
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
                                width: { xs: '100%', sm: '100%', md: '33%', lg: '33%' },
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '20px',
                                justifyContent: 'center'
                            }}>
                                <Typography width="80%"><Link to="https://ieeexplore.ieee.org/abstract/document/6805126" target="_blank" rel="noopener noreferrer"> Real-time features </Link> like maps can be used to improve a user’s experience on-site</Typography>
                            </Box>
                        </Box>

                        <Stack gap="20px" id="User Interviews" sx={{
                            scrollMargin: '90px'
                        }}>
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="USER INTERVIEWS" />
                            <Typography variant="heading3"> Students attend events to pursue their passions and connect with others on campus </Typography>
                        </Stack>
                        <Typography> I conducted several formal interviews with Cornell with the goal of understanding students' processes for discovering and attending events.</Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "40px"
                        }}>
                            <Stack width="100%" display="flex" justifyContent="center" alignItems="center" gap="5%" sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
                            }}>
                                <img src={circle} />
                                <Box>
                                    <Typography paddingBottom="2%">“I usually attend events with my friends, but if an event is truly interesting, <b> I don’t mind attending by myself. </b>” </Typography>
                                    <Typography> - Concerned Circle, Biomedical Engineering ‘26</Typography>
                                </Box>
                            </Stack>

                            <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%" sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
                            }}>
                                <Box>
                                    <Typography paddingBottom="2%">“Finding fun events that I would not expect is also great. Once, I went to a random event that I saw as I was passing by, and it was <b>unexpectedly fun!</b>” </Typography>
                                    <Typography> - Thoughtful Triangle, Chemistry and Biology ‘27</Typography>
                                </Box>
                                <img src={triangle} />
                            </Stack>

                            <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%" sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
                            }}>
                                <img src={square} />
                                <Box>
                                    <Typography paddingBottom="2%">“I <b> don’t want to see every event </b>that is currently happening, they’re usually not interesting to me.” </Typography>
                                    <Typography> - Bored Box, Performing and Media Arts ‘28</Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box py="40px" px="10%" width="100%" borderRadius="20px" sx={{
                            border: '1px solid grey'
                        }}>
                            <Typography variant="heading3" fontWeight="normal" textAlign="center"> We were surprised to find that event attendance is</Typography>
                            <Typography variant="heading3" textAlign="center" sx={{
                                background: 'linear-gradient(to right,  #FFC23F, #FF6F8D)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}> both a social and interest-driven decision. </Typography>
                        </Box>

                        <Typography> We combined our findings into an <b> affinity map</b>, and we realized 4 main points: </Typography>
                        <Stack direction="column" gap="20px">
                            <Stack gap="20px" sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
                            }}>
                                <Box sx={{
                                    backgroundColor: '#FFF1CB',
                                    py: '60px',
                                    px: '4%',
                                    gap: '20px',
                                    width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    flexWrap: 'wrap',
                                }}>
                                    <Typography width="100%">ATTENDING EVENTS</Typography>
                                    <Typography>Interviewees were evenly split on whether they attended events due to personal interest or as a social event</Typography>
                                </Box>
                                <Box sx={{
                                    backgroundColor: '#FFD2AD',
                                    py: '60px',
                                    px: '4%',
                                    width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    flexWrap: 'wrap',
                                }}>
                                    <Typography width="100%">CURRENT SOLUTIONS</Typography>
                                    <Typography>There was, as predicted, a large gap in the market for personalized event discovery</Typography>
                                </Box>

                            </Stack>
                            <Stack gap="20px" sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
                            }}>
                                <Box sx={{
                                    backgroundColor: '#FFAAAE',
                                    py: '60px',
                                    px: '4%',
                                    gap: '20px',
                                    width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    flexWrap: 'wrap',
                                }}>
                                    <Typography width="100%">SOCIAL ASPECTS</Typography>
                                    <Typography> Students wanted to know friends’ activities and what they are attending</Typography>
                                </Box>
                                <Box sx={{
                                    backgroundColor: '#FF819B',
                                    py: '60px',
                                    px: '4%',
                                    gap: '20px',
                                    width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    flexWrap: 'wrap',
                                }}>
                                    <Typography width="100%">EVENT ENJOYMENT</Typography>
                                    <Typography>Unexpectedly good events (outside of comfort zone) are important </Typography>
                                </Box>
                            </Stack>
                        </Stack>

                        <Typography> We synthesized the gathered information into 2 main user personas: the <b>event attendee</b>, and <b>event organizer</b>. </Typography>

                        <Typography variant="heading2" color="#5B5B5B"> USER PERSONAS </Typography>
                        <Stack display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" direction="row" gap="50px">
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

                        <Typography my="40px"> Next, we created the following journey map of the main issues that students face when attending a campus event.</Typography>

                        <img src={journey} width="100%" />
                    </Box >

                    {/* Ideation */}
                    < Box
                        id="Ideation"
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: "40px",
                            scrollMargin: '90px'
                        }
                        }>
                        <Stack gap="20px">
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="IDEATION" />
                            <Typography variant="heading3">Developing solutions to form communities and encourage exploration</Typography>
                        </Stack>
                        <Typography>Now, with a comprehensive understanding of our problem space, we began sketching possible solutions to our questions. We kept the following considerations in mind:</Typography>
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
                            <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="ITERATIONS AND FEEDBACK" />
                            <Typography variant="heading3">Honing in on the best solution for humans, by humans</Typography>
                        </Box>
                        <Typography>We took the best ideas from our ideation and presented our ideas to 12 senior members of the team, and received the following feedback.</Typography>
                        <Typography variant="heading1" fontSize="1.5rem">A New Product With Familiar Patterns</Typography>
                        <Typography>I designed the profile interface with the intention of being a one-stop shop for all essential features. However, when presenting this to new users, I realized that it was trying to cram too many features into one section and had unfamiliar UI patterns.</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src={issue1} height="auto" width="50%" />

                        </Box>
                        < Typography variant="heading1" fontSize="1.5rem"> Overwhelming Layouts </Typography >
                        <Typography> A significant issue more than half of our reviewers noted was with the discover page. The original design was intended to provide many different sections of events to discover, but this page suffered from information overload and an unintuitive interface.</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src={issue2} height="auto" width="50%" />
                        </Box>
                    </Box >

                    {/* Design System */}
                    < Box
                        sx={{
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
                                    <Stack direction="row" spacing="60px">
                                        {/* Left column */}
                                        <Box>
                                            <Box marginBottom="20px">
                                                <Box sx={{ backgroundColor: "#FFCC3F", marginBottom: '20px', width: "140px", height: '140px' }} />
                                                <Typography>#FFCC3F</Typography>
                                            </Box>
                                            <Box>
                                                <Box sx={{ backgroundColor: "#FF6F8D", marginBottom: '20px', width: "140px", height: '140px' }} />
                                                <Typography>#FF6F8D</Typography>
                                            </Box>
                                        </Box>
                                        {/* Right column */}
                                        <Box>
                                            <Box marginBottom="20px">
                                                <Box sx={{ backgroundColor: "#FFBECC", marginBottom: '20px', width: "140px", height: '140px' }} />
                                                <Typography>#FFBECC</Typography>
                                            </Box>
                                            <Box>
                                                <Box sx={{ backgroundColor: "#FFE59F", marginBottom: '20px', width: "140px", height: '140px' }} />
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
                                    width: { xs: '90%', sm: '90%', md: '320px', lg: '320px' }
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
                    < Box
                        id="Final Prototype"
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "20px",
                            scrollMargin: '90px'
                        }}>
                        <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="FINAL PROTOTYPE" />
                        <Typography variant="heading3"> Synthesizing a final product based on our findings </Typography>
                        <VideoCarousel />
                    </Box >

                    {/* Reflection */}
                    <Box id="Reflection" sx={{
                        scrollMargin: '90px'
                    }} />
                    <SectionTag textColor="#000000" secondaryColor="#FF6F8D" backgroundColor="#FFE8ED" text="REVIEW AND REFLECTION" />
                    <Stack alignItems="center" width="100%">
                        <Box
                            sx={{
                                backgroundImage: `url(${phone_case}), url(${background})`,
                                backgroundSize: 'cover, cover',
                                backgroundPosition: 'top, center',
                                paddingTop: '120px',
                                paddingBottom: '100px',
                                width: { xs: '100%', sm: '100%', md: '80%', lg: '80%' },
                                position: 'relative',
                                px: '7%',
                                border: '4px solid #5B5B5B',
                                display: "flex",
                                flexDirection: 'column',
                                rowGap: "20px",
                                borderRadius: '110px',
                                minHeight: '100vh'
                            }}>

                            <Typography width="100%" textAlign="center" variant="heading3" fontWeight="bold"> Evently: Lessons Learned </Typography>
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
                                    <Typography marginBottom="24px"> This was my first case study! Going through the entire human-centered design process taught me the <b>importance of user testing and consistent feedback. </b> I also learned:</Typography>
                                    <ol>
                                        <li> <Typography marginBottom="24px">Unique interfaces may be fun to create, but don’t always make an app that consumers will want to use.</Typography></li>
                                        <li> <Typography marginBottom="24px">Feedback and iteration are essential to create products that prioritize a pleasant user experience. </Typography></li>
                                    </ol>
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
                                    <Typography marginBottom="24px"> Due to a shorter project duration, I was <b>unable to fully develop some of the interesting edge cases</b> that came up in our user research. If I were to create Evently again, I would: </Typography>
                                    <ol>
                                        <li> <Typography marginBottom="24px"> Put more focus on <b>integrating the friends feature</b> with a formalized way to access friends. </Typography></li>
                                        <li> <Typography marginBottom="24px"> Add features to <b>address the event organizer</b> persona, which was brought up in our research. </Typography></li>
                                    </ol>
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
                            link="/algolink"
                            width="400px"
                            rotate="2deg" />

                        <Thumbnail
                            name="Combat Robotics @ Cornell"
                            mainTag="Website Redesign"
                            tags="/ Desktop & Mobile"
                            color="#B21D1D"
                            imgsrc={crc}
                            link="/crc"
                            rotate="2deg"
                            width="400px" />
                    </Stack>
                </Box >
            </Box >
        </ThemeProvider >
    );
}
