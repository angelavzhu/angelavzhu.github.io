import { Box, Typography, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"

import VideoCarousel from '../components/VideoCarousel'

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
            fontFamily: "Work Sans",
            fontSize: "1.5rem"
        },
        heading3: {
            fontFamily: "Work Sans",
            fontSize: "1.25rem"
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
                {/* header */}
                <Box>
                    <Typography variant="heading1"> Evently </Typography>
                    <Typography variant="body1" marginTop="20px"> Designed an effortless and convenient event discovery platform for Cornell students to encourage more campus involvement and build thriving extracurricular communities.</Typography>
                </Box>
                <img src={banner} />
                <Stack direction="row" spacing="auto" width="100%">
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
                <Stack flexDirection="row" gap="40px">
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "30px"
                    }}
                    >
                        <Typography variant="heading2"> How It Started </Typography>
                        <Typography> Evently was a case study completed as a part of <Link to={"https://www.designconsultingcornell.com/"} target="_blank" rel="noopener noreferrer">Design Consulting @ Cornell</Link>’s New Member Education program to streamline and centralize Cornell’s event discovery process.  </Typography>
                        <Typography> My partner and I created an <b>intuitive and personalized experience that encourages community building</b> among students and organizations, while allowing both large and small events to find their audiences. </Typography>
                    </Box>
                    <img src={NME} style={{
                        width: '50%',
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
                        <Typography variant="heading3" fontStyle="italic"> Cornell lacks uniquely individualized event recommendation. </Typography>
                    </Box>
                    <Typography> When brainstorming ideas for our product, we noticed a shared issue for us our peers-- event discovery on campus. </Typography>
                    <Typography> Event promotion platforms can range from social media and university apps to posters and sidewalk chalk, meaning a centralized and quick way to find interesting events is almost nonexistent. This led us to our question: </Typography>
                </Box>

                <Box py="5%" width="100%" display="flex" alignItems="center" justifyContent="center" borderRadius="20px" sx={{
                    border: '1px solid grey'
                }}>
                    <img src={HMW} style={{
                        padding: '12px',
                        width: "80%",
                    }} />
                </Box>

                {/* Market Research */}
                <Box display="flex" flexDirection="column" gap="40px">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <Typography variant="heading2"> Market Research </Typography>
                        <Typography variant="heading3" fontStyle="italic" marginBottom="20px"> What products currently exist to solve this problem? </Typography>
                    </Box>
                    <Box marginBottom="20px" display="flex" flexDirection="row" gap="160px" alignItems="center" justifyContent="center" >
                        <Box width="10%" display="flex" flexDirection="column" gap="40px" alignItems="center" justifyContent="center">
                            <img src={CG} />
                            <Typography> CampusGroups</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
                        </Box>
                    </Box>

                    <Box marginBottom="20px" display="flex" flexDirection="row" gap="160px" alignItems="center" justifyContent="center" >
                        <Box width="10%" display="flex" flexDirection="column" gap="20px" alignItems="center" justifyContent="center">
                            <img src={IG} />
                            <Typography> Instagram</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
                        </Box>
                    </Box>

                    <Box marginBottom="20px" display=" flex" flexDirection="row" gap="160px" alignItems="center" justifyContent="center" >
                        <Box width="10%" display="flex" flexDirection="column" gap="20px" alignItems="center" justifyContent="center">
                            <img src={EV} />
                            <Typography> EventBrite</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
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
                        <Typography variant="heading2"> User Research </Typography>
                        <Typography variant="heading3" fontStyle="italic"> Assessing the situation with real people, and real problems.</Typography>
                    </Box>
                    <Typography> Before diving into solutions, we needed a deeper understanding of the problems that our target audience is facing. </Typography>

                    <Typography variant="heading3"> Literature Review</Typography>
                    <Typography> I reviewed 3 academic journal articles regarding app design and noted the following:</Typography>
                    <Stack direction="row" gap="5%">
                        {/* Opens link in new tab */}
                        <Box sx={{
                            backgroundColor: '#FFF1CB',
                            py: '60px',
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography width="80%"><Link to="https://www.sciencedirect.com/science/article/pii/S0306457324001250" target="_blank" rel="noopener noreferrer" >Relevance</Link> is the strongest indicator of event interest, closely followed by popularity</Typography>
                        </Box>

                        <Box sx={{
                            backgroundColor: '#FFD2AD',
                            py: '60px',
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
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
                            justifyContent: 'center'
                        }}>
                            <Typography width="80%"><Link to="https://ieeexplore.ieee.org/abstract/document/6805126" target="_blank" rel="noopener noreferrer"> Real-time features </Link> like maps can be used to improve a user’s experience on-site</Typography>
                        </Box>
                    </Stack>

                    <Typography variant="heading3"> User Interviews </Typography>
                    <Typography> With this new knowledge, I conducted several formal interviews with students on campus which gave many insights into the
                        issue at hand. </Typography>
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
                    <Typography>We combined our findings into an affinity map, and we realized:</Typography>
                    <Stack direction="row">
                        {/* Opens link in new tab */}
                        <Box width="50%">
                            <Typography paddingBottom="5%" > <b>1. </b>Interviewees were evenly split on whether they attended events due to personal interest or as a social event</Typography>
                            <Typography><b>2. </b>There was, as predicted, a large gap in the market for personalized event discovery</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography paddingBottom="5%" ><b>3. </b>Students wanted to know friends’ activities and what they are attending</Typography>
                            <Typography><b>4. </b>Unexpectedly good events (outside of comfort zone) are important</Typography>
                        </Box>
                    </Stack>

                    <Box display="flex" justifyContent="center" alignItems="center" width="100%" sx={{
                        background: 'linear-gradient(to right,  #FFBECC, #FFEDBC)',
                        py: '24px',
                        overflowX: "auto"
                    }}>
                        <img src={surprised} width="600px" />
                    </Box>

                    <Typography> We synthesized the gathered information into 2 main user personas: the event attendee, and event organizer. </Typography>

                    <Box>
                        <Typography variant="heading3"> User Personas </Typography>
                        <Stack width="100%" paddingTop="20px" paddingBottom="40px" display="flex" alignItems="center" direction="row" gap="5%">
                            <img src={bill} width="200px" />
                            <Box width="70%" display="flex" flexDirection="column">
                                <Typography paddingBottom="24px" variant="heading3">Bill, Event Attendee (Freshman) </Typography>
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

                        <Stack width="100%" display="flex" alignItems="center" direction="row" gap="5%">
                            <img src={jennie} width="200px" />

                            <Box>
                                <Typography variant="heading3">Jennie, Event Organizer (Junior) </Typography>

                                <Typography marginTop="24px">Goals:</Typography>
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
                    <Typography variant="heading2">Ideation</Typography>
                    <Typography>Now, with a comprehensive understanding of our problem space, we began sketching possible solutions to our questions. We kept the following considerations in mind:</Typography>
                    <Typography>
                        <ol>
                            <li><Typography>Integrate personalization into event discovery through a feed, with recommendations and areas to explore </Typography></li>
                            <li><Typography>Build communities through events by following the activity of compatible clubs and friends, but without becoming a social media platform </Typography></li>
                            <li><Typography>Ensure the product is intuitive and easy to use, and integrate preexisting, reliable applications to maximize user experience and trust </Typography></li>
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
                        rowGap: "24px"
                    }}>
                        <Typography variant="heading2">Iterations and Feedback</Typography>
                        <Typography variant="heading3" fontStyle="italic">Honing in on the best solution for humans, by humans</Typography>
                    </Box>
                    <Typography>We took the best ideas from our ideation and moved into mid-fidelity iterations. Here, we presented our ideas to 12 senior members of the team, and received valuable feedback for constructing our final product.</Typography>
                    <Typography variant="heading3">A New, Yet Familiar Interface</Typography>
                    <Typography>I designed the profile interface with the intention of being a one-stop shop for all essential features for the user. However, when presenting this to new users, I realized that it was trying to cram too many features into one section-- a jack of all trades, master of none.</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img src={issue1} height="auto" width="50%" />

                    </Box>
                    < Typography variant="heading3" > Big Changes for Bigger Impacts</Typography >
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
                        <Typography variant="heading2"> Design System </Typography>
                        <Typography variant="heading3" fontStyle="italic"> Creating a consistent and unique brand</Typography>
                    </Box>
                    <Typography> We decided to make our designs convey an approachable and polished mood to the consumer, and came up with the following design system. Darker pink and yellow brought excitement for event discovery, and we particularly focused on ensuring spacing and typography was accessible for mobile devices.</Typography>
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
                            rowGap: "20px"
                        }}>
                            <Typography variant="heading3"> Colors </Typography>
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
                        </Box>

                        {/* Spacing*/}
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: "20px",
                            width: { xs: '100%', sm: '100%', md: '40%', lg: '40%' }
                        }}>
                            <Typography variant="heading3"> Spacing </Typography>
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
                        display: 'flex',
                        flexDirection: 'row',
                        gap: "15%",
                        flexWrap: 'wrap'
                    }}>
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
                    </Box>
                </Box >

                {/* Final */}
                < Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "40px"
                }}>
                    <Typography variant="heading2"> Final Prototype </Typography>
                    <Typography variant="heading3" fontStyle="italic"> Synthesizing a final product based on our findings </Typography>
                    <VideoCarousel />
                </Box >

                {/* Reflection */}
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "40px"
                }}>
                    <Typography variant="heading2"> Review and Reflection </Typography>
                    <Box
                        sx={{
                            backgroundImage: `url(${background})`,
                            paddingTop: '80px',
                            px: '30px',
                            display: "flex",
                            flexDirection: 'column',
                            rowGap: "30px"
                        }}>
                        <Typography width="100%" textAlign="center" variant="heading2" fontWeight="bold"> Evently: Lessons Learned </Typography>
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
                            <Typography marginBottom="30px" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'right',
                                color: 'grey'
                            }}> Max 500 words</Typography>

                            <Typography paddingBottom="10px"> What Could Be Improved </Typography>
                            <Box padding="20px" borderRadius="10px" sx={{ border: 1 }}>
                                <Typography marginBottom="24px"> Due to a shorter project duration, I was <b>unable to fully develop some of the interesting edge cases</b> that came up in our user research. If I were to create Evently again, I would want to put more focus on developing the friends feature.  </Typography>
                                <Typography marginBottom="24px">
                                    Event attendance can be a social decision, so having a more formalized way to access friends other than seeing their activity in event pages would make Evently a more interesting and engaging app. </Typography>
                                <Typography>
                                    This, plus creating an interface for event organizers to use the app, would be able to <b>fully address the issues that were frequently brought up</b> during our research.</Typography>
                            </Box>
                            <Typography marginBottom="30px" sx={{
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
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    <img src={thanks} width="70%" />

                </Box>
            </Box >
        </ThemeProvider>
    );
}
