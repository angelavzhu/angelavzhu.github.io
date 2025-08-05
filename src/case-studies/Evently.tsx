import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom"
// import banner from 

export default function Evently() {
    return (
        <Box my="80px" mx="10%" sx={{
            display: "flex",
            flexDirection: 'column',
            rowGap: "40px",
        }}>
            {/* header */}
            <Box>
                <Typography variant="heading1"> Evently </Typography>
                <Typography variant="body1"> Designed an effortless and convenient event discovery platform for Cornell students to encourage more campus involvement and build thriving extracurricular communities.</Typography>
            </Box>
            Banner Image
            {/* <img src={banner} ></img> */}
            <Stack direction="row" spacing="auto" width="100%">
                <Box>
                    <Typography> Team </Typography>
                    <Typography> 2 designers </Typography>
                </Box>
                <Box>
                    <Typography> Team </Typography>
                    <Typography> 2 designers </Typography>
                </Box>
                <Box>
                    <Typography> Team </Typography>
                    <Typography> 2 designers </Typography>
                </Box>
                <Box>
                    <Typography> Team </Typography>
                    <Typography> 2 designers </Typography>
                </Box>
            </Stack>

            {/* Background Info*/}
            <Stack flexDirection="row" gap="20%">
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "30px"
                }}
                >
                    <Typography> How It Started </Typography>
                    <Typography> Evently was a case study completed as a part of Design Consulting @ Cornell’s New Member Education program to streamline and centralize Cornell’s event discovery process.  </Typography>
                    <Typography> My partner and I created an intuitive and personalized experience that encourages community building among students and organizations, while allowing both large and small events to find their audiences. </Typography>
                </Box>
                NME Image
                {/* <img></img> */}
            </Stack>

            {/* Problem Space */}
            <Box>
                <Typography> Problem Space </Typography>
                <Typography> Cornell lacks uniquely individualized event recommendation. </Typography>
                <Typography> When brainstorming ideas for our product, we noticed a shared issue for us and many of our peers-- event discovery on campus. </Typography>
                <Typography> Event promotion platforms can range from social media and university apps to posters and sidewalk chalk, meaning a centralized and quick way to find interesting events is almost nonexistent. This led us to our question: </Typography>
            </Box>

            <Box py="5%" width="100%" display="flex" alignItems="center" justifyContent="center">
                HMW Image
                {/* <img></img> */}
            </Box>

            {/* Market Research */}
            <Box>
                <Typography> Market Research </Typography>
                <Typography> What products currently exist to solve this problem? </Typography>
                <Box>
                    <Stack my="30px" flexDirection="row" gap="10%" alignItems="center" justifyContent="center" backgroundColor="green">
                        <Box width="10%">
                            Image
                            <Typography> CampusGroups</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box my="30px">
                    <Stack my="30px" flexDirection="row" gap="10%" alignItems="center" justifyContent="center" backgroundColor="green">
                        <Box width="10%">
                            Image
                            <Typography> Instagram</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Stack my="30px" flexDirection="row" gap="10%" alignItems="center" justifyContent="center" backgroundColor="green">
                        <Box width="10%">
                            Image
                            <Typography> EventBrite</Typography>
                        </Box>
                        <Box width="50%">
                            <Typography> ✔ Cornell’s official event hub, known and used by all students </Typography>
                            <Typography> ✔ Event banners lead to eye catching and interesting promotion </Typography>
                            <Typography> ❌ Lack of personalization makes it difficult to find relevant events </Typography>
                            <Typography> ❌ UI is confusing and difficult to navigate </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>

            {/* User Research */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography variant="heading2"> User Research </Typography>
                <Typography> Assessing the situation with real people, and real problems.</Typography>
                <Typography> Before diving into solutions, we needed a deeper understanding of the problems that our target audience is facing. </Typography>

                <Typography> Literature Review</Typography>
                <Typography> I reviewed 3 academic journal articles regarding app design and noted the following:</Typography>
                <Stack direction="row" gap="5%">
                    {/* Opens link in new tab */}
                    <Typography width="30%"><Link to="https://www.sciencedirect.com/science/article/pii/S0306457324001250" target="_blank" rel="noopener noreferrer" >Relevance</Link> is the strongest indicator of event interest, closely followed by popularity</Typography>
                    <Typography width="30%"> Social interaction is <Link to="https://www.emerald.com/insight/content/doi/10.1108/jhtt-04-2022-0097/full/html" target="_blank" rel="noopener noreferrer" >important</Link> for user retention </Typography>
                    <Typography width="30%"><Link to="https://ieeexplore.ieee.org/abstract/document/6805126" target="_blank" rel="noopener noreferrer"> Real-time features </Link> like maps can be used to improve a user’s experience on-site</Typography>
                </Stack>

                <Typography> User Interviews </Typography>
                <Typography> With this new knowledge, I conducted several formal interviews with students on campus which gave many insights into the
                    issue at hand. </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: "40px"
                }}>
                    <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                        Profile Image
                        <Box>
                            <Typography paddingBottom="2%">“I usually attend events with my friends, but if an event is truly interesting, I don’t mind attending by myself.” </Typography>
                            <Typography> - Concerned Circle, Biomedical Engineering ‘26</Typography>
                        </Box>
                    </Stack>

                    <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                        <Box>
                            <Typography paddingBottom="2%">“Finding fun events that I would not expect is also great. Once, I went to a random event that I saw as I was passing by, and it was unexpectedly fun!” </Typography>
                            <Typography> - Thoughtful Triangle, Chemistry and Biology ‘27</Typography>
                        </Box>
                        Profile Image
                    </Stack>

                    <Stack width="100%" display="flex" justifyContent="center" alignItems="center" direction="row" gap="5%">
                        Profile Image
                        <Box>
                            <Typography paddingBottom="2%">“I don’t want to see every event that is currently happening, they’re usually not interesting to me.” </Typography>
                            <Typography> - Bored Box, Performing and Media Arts ‘28</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Typography>We combined our findings into an affinity map, and we realized:</Typography>
                <Stack direction="row" backgroundColor="green" gap="6%">
                    {/* Opens link in new tab */}
                    <Box width="50%">
                        <Typography paddingBottom="5%" >Interviewees were evenly split on whether they attended events due to personal interest or as a social event</Typography>
                        <Typography>There was, as predicted, a large gap in the market for personalized event discovery</Typography>
                    </Box>
                    <Box width="50%">
                        <Typography paddingBottom="5%" >Students wanted to know friends’ activities and what they are attending</Typography>
                        <Typography>Unexpectedly good events (outside of comfort zone) are important</Typography>
                    </Box>
                </Stack>

                <Typography align="center" width="100%"> We were surprised to find that event attendance is both an individual and social decision.</Typography>

                <Typography> We synthesized the gathered information into 2 main user personas: the event attendee, and event organizer. </Typography>

                <Box>
                    <Typography> User Personas </Typography>
                    <Stack width="100%" paddingBottom="40px" display="flex" alignItems="center" direction="row" gap="5%">
                        <Box width="30%">
                            Bill Image
                        </Box>
                        <Box width="70%">
                            <Typography paddingBottom="2%">Bill, Event Attendee (Freshman) </Typography>
                            <Typography>Goals:<br />
                                Attend more events to find a community on campus <br />
                                Discover fun events that fit in his schedule</Typography>
                            <Typography> Painpoints:<br />
                                Doesn’t know if his friends will attend an event with him <br />
                                Overwhelmed by options and doesn’t know what events are good</Typography>
                        </Box>
                    </Stack>

                    <Stack width="100%" display="flex" alignItems="center" direction="row" gap="5%">
                        Jennie Image
                        <Box>
                            <Typography paddingBottom="2%">Jennie, Event Organizer (Junior) </Typography>
                            <Typography>Goals:<br />
                                Advertise her event to the correct audience <br />
                                Get feedback on her events and improve them</Typography>
                            <Typography> Painpoints:<br />
                                Club events keep attracting the same people <br />
                                Jennie has to advertise her events in an overwhelming number of platforms</Typography>
                        </Box>
                    </Stack>

                    <Typography>We decided to focus on the event attendee due to the scope of the project, and created the following journey map of the main issues that students face when attending a campus event.</Typography>
                    Journey Map Image
                </Box>
            </Box >

            {/* Ideation */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography>Ideation</Typography>
                <Typography>Now, with a comprehensive understanding of our problem space, we began sketching possible solutions to our questions. We kept the following considerations in mind:</Typography>
                <Typography>
                    Integrate personalization into event discovery through a feed, with recommendations and areas to explore
                    <br />Build communities through events by following the activity of compatible clubs and friends, but without becoming a social media platform
                    <br />Ensure the product is intuitive and easy to use and integrate preexisting, reliable applications to maximize user experience and trust
                </Typography>
                <Stack direction="row">
                    <Box>
                        Image
                        <Typography> Crazy 8s Ideation</Typography>
                        <Typography> Low-fidelity Ideation </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* Iteration */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography>Iterations and Feedback</Typography>
                <Typography>Honing in on the best solution for humans, by humans</Typography>
                <Typography>We took the best ideas from our ideation and moved into mid-fidelity iterations. Here, we presented our ideas to 12 senior members of the team, and received valuable feedback for constructing our final product.</Typography>
                <Typography>A New, Yet Familiar Interface</Typography>
                <Typography>I designed the profile interface with the intention of being a one-stop shop for all essential features for the user. However, when presenting this to new users, I realized that it was trying to cram too many features into one section-- a jack of all trades, master of none.</Typography>
                Image Carousel
                <Typography>Big Changes for Bigger Impacts</Typography>
                <Typography>A significant issue more than half of our reviewers noted was with our discover page, arguably the most important page for our product. The original design was intended to provide many different sections of events for the user to discover new and exciting listings, but again, this page suffered from information overload and an unintuitive interface.</Typography>
                Image Carousel
            </Box>

            {/* Design System */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography> Design System </Typography>
                <Typography> Creating a consistent and unique brand</Typography>
                <Typography> We decided to make our designs convey an approachable and polished mood to the consumer, and came up with the following design system. Darker pink and yellow brought excitement for event discovery, and we particularly focused on ensuring spacing and typography was accessible for mobile devices.</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: "80px",
                    flexWrap: 'wrap'
                }}>
                    {/* Colors */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "20px"
                    }}>
                        <Typography> Colors </Typography>
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
                        rowGap: "20px",
                        width: '50%'
                    }}>
                        <Typography> Spacing </Typography>
                        <Box width="full" height="72px" backgroundColor="#D9D9D9"></Box>
                        <Typography width="100%" align="right"> Top Margin <b>72</b> </Typography>
                        <Box width="full" height="30px" backgroundColor="#D9D9D9"></Box>
                        <Typography width="100%" align="right"> Section padding <b>30</b> </Typography>
                        <Box width="full" height="16px" backgroundColor="#D9D9D9"></Box>
                        <Typography width="100%" align="right"> Text padding <b>16</b> </Typography>
                        <Box width="full" height="8px" backgroundColor="#D9D9D9"></Box>
                        <Typography width="100%" align="right"> Tight padding <b>8</b> </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: "80px",
                    flexWrap: 'wrap'
                }}>
                    {/* Text */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "20px"
                    }}>
                        <Typography> Text Heirarchy </Typography>
                        <Typography> Impact Text (40px) </Typography>
                        <Typography> Header 1 (24px) </Typography>
                        <Typography> Header 2 (20px) </Typography>
                        <Typography> Body 1 (16px) </Typography>
                        <Typography> Descriptor (12px) </Typography>
                    </Box>

                    {/* Typography*/}
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "20px",
                        width: '50%'
                    }}>
                        <Typography> Work Sans (header) </Typography>
                        <Typography> Hind (body) </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Final */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography> Final Prototype </Typography>
                <Typography> Synthesizing a final product based on our findings </Typography>
                Carousel
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                rowGap: "40px"
            }}>
                <Typography> Review and Reflection </Typography>
                <Box
                    sx={{
                        backgroundColor: 'pink',
                        paddingTop: '80px',
                        px: '30px',
                        display: "flex",
                        flexDirection: 'column',
                        rowGap: "30px"
                    }}>
                    <Typography width="100%" textAlign="center"> Evently: Lessons Learned </Typography>
                    <Typography textAlign="center" width="100%"> Your review will be sent directly to the event organizers so they can continue to improve future events. </Typography>
                    <Box>
                        <Typography marginBottom="10px"> Event Rating </Typography>
                        <Stack direction="row" gap="6px">
                            Star
                            Star
                            Star
                            Star
                        </Stack>
                    </Box>
                    <Box>
                        <Typography paddingBottom="10px"> What Went Well </Typography>
                        <Box padding="20px" marginBottom="30px" borderRadius="10px" sx={{ border: 1 }}>
                            <Typography> As my first case study, going through the entire human-centered design process taught me a lot about the importance of user testing and consistent feedback. </Typography>
                            <Typography>
                                I learned that, while visually appealing or uniquely designed interfaces may be fun to create, they don’t always make for an app that consumers will want to use. Feedback and iteration are essential to create products that are innovative, yet prioritize a pleasant user experience. </Typography>
                            <Typography>
                                All in all, this project was a fantastic exploration in collaborating with fellow designers and learning the basics of good design practice.</Typography>
                        </Box>

                        <Typography> What Could Be Improved </Typography>
                        <Box padding="20px" marginBottom="30px" borderRadius="10px" sx={{ border: 1 }}>
                            <Typography> Due to a shorter project duration, I was unable to fully develop some of the interesting edge cases that came up in our user research. If I were to create Evently again, I would want to put more focus on developing the friends feature.  </Typography>
                            <Typography>
                                Event attendance can be a social decision, so having a more formalized way to access friends other than seeing their activity in event pages would make Evently a more interesting and engaging app. </Typography>
                            <Typography>
                                This, plus creating an interface for event organizers to use the app, would be able to fully address the issues that were frequently brought up during our research.</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box >
    );
}
