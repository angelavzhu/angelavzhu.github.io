import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

import lilypads from "./assets/about/lilypad2.png"
import name from "./assets/about/name.png"
import Umamusume from "./assets/about/Umamusume.jpg"
import BOTW from "./assets/about/BOTW.jpg"
import Morimens from "./assets/about/Morimens.jpg"
import Persona from "./assets/about/Persona5.jpg"
import headshot from "./assets/about/headshot.JPG"
import montreal from "./assets/about/img1.jpg"
import nezha from "./assets/about/img2.jpg"
import korean from "./assets/about/img3.jpg"

export default function About() {
    return (
        <Box marginTop="80px" mx="15%" >
            {/* foreground */}
            <Box sx={{
                height: '100vh',
                width: '100vw',
                zIndex: -10,
                display: 'flex',
                position: 'fixed',
                top: '0', left: '0',
                backgroundImage: `url(${lilypads})`,
                filter: 'saturate(1.2)',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
            }} />

            {/* top section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: '52px',
                width: '100%',
                flexWrap: 'wrap'
            }}>
                {/* Text */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    gap: '24px',
                    width: { xs: '100%', s: '100%', md: '50%', lg: '50%' },
                }}>
                    <Typography variant="heading3" sx={{
                        color: "#007700"
                    }}>
                        ABOUT ME
                    </Typography>
                    <Typography variant="body1">
                        Hello there! I’m Angela, a product designer, programmer, and an accent-less Long Islander.</Typography>
                    <Typography variant="body1">
                        I am currently a third-year student at <b>Cornell
                            University</b> majoring in <b>Information Science</b> with minors in
                        <b> Computer Science</b> and Game Design.
                    </Typography>
                    <Typography variant="body1">
                        I love collaboration. As an ex-CS major, I love
                        picking developers' brains to learn more about
                        their work and how it intersects with mine.
                        Design is a highly iterative process, and I thrive in
                        environments <b>whizzing with ideas</b> and opportunities to <b>grow</b>.</Typography>
                    <img src={name} width="300px" style={{ paddingTop: '24px' }} />
                </Box>
                {/* Image */}
                <Box sx={{
                    width: { xs: '100%', s: '100%', md: '40%', lg: '40%' },

                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <img src={headshot} style={{
                            // borderRadius: '100px',
                            minWidth: '300px',
                            objectFit: 'cover'
                        }} />
                    </Box>
                </Box>

            </Box>

            <Typography variant="heading3" sx={{
                color: "#007700"
            }}>
                DESIGN VALUES
            </Typography>
            <Typography variant="body1" paddingTop="20px">
                From my work, I've realized product design is nothing without
                business, especially in today's saturated market. However,
                at the end of the day, products are made to be used... by humans! </Typography>

            <Typography variant="body1" paddingTop="20px">
                I choose design because it is at the intersection of everything I
                think is important about technology. Innovation. Collaboration.
                Iteration. Curiosity. I choose to fully and truly understand every
                product that I work on, to gain the best possible perspective and create
                features that truly empathize with their users.</Typography>

            {/* lower box */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '4vw',
                my: '52px'
            }}>
                <Box sx={{
                    width: { xs: '100%', sm: '100%', md: '28%', lg: '28%' },
                    gap: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img src={montreal} style={{
                        width: '100%',
                        objectFit: 'cover'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> A church in Montreal</Typography>
                </Box>
                <Box sx={{
                    width: { xs: '100%', sm: '100%', md: '28%', lg: '28%' },
                    gap: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img src={nezha} style={{
                        width: '100%',
                        objectFit: 'cover'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> My cat Nezha, the love of my life</Typography>
                </Box>

                <Box sx={{
                    width: { xs: '100%', sm: '100%', md: '28%', lg: '28%' },
                    gap: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img src={korean} style={{
                        height: '100%',
                        objectFit: 'cover'
                    }} />
                    <Typography variant="body2" color="#5B5B5B"> Super excited to try kimchi jigae!</Typography>
                </Box>

                {/* <Typography variant="body1"> When I am not designing (even though it is my passion &lt;&#47;3), you can often find me doodling on my iPad, playing with my cat, or reminiscing on my time in Rome.</Typography> */}

            </Box>

            <Typography variant="body1"> Games I love: </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                my: '30px'
            }}>
                <img src={Umamusume}
                    style={{
                        width: '210px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={Persona}
                    style={{
                        width: '210px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={BOTW}
                    style={{
                        width: '210px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={Morimens}
                    style={{
                        width: '210px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />

            </Box>
            <Typography variant="body1" sx={{
                textAlign: "center",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}> Gotta catch 'em all! But you can catch me at
            </Typography>

            <Typography variant="body1" sx={{
                textAlign: "center",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: '30px'
            }}>
                <Link to={"mailto:angelzhua@gmail.com"} target="_blank" rel="noopener noreferrer">angelzhua@gmail.com </Link>

            </Typography>
        </Box >
    );
}