import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

import lilypads from "./assets/about/lilypad2.png"
import name from "./assets/about/name.png"
import Umamusume from "./assets/about/Umamusume.jpg"
import BOTW from "./assets/about/BOTW.jpg"
import Morimens from "./assets/about/Morimens.jpg"
import Persona from "./assets/about/Persona5.jpg"
import headshot from "./assets/about/headshot.JPG"
import img1 from "./assets/about/img1.jpg"
import img2 from "./assets/about/img2.jpg"
import img3 from "./assets/about/img3.jpg"

export default function Evently() {
    return (
        <Box marginTop="80px" mx="10%" >
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                zIndex: 500,
                flexWrap: 'wrap',
                py: '4px',
                marginBottom: '-16px'
            }}>
                <img src={name} width="300px" />
                <Typography variant="heading1" fontSize="38px">, gacha addict and cat lover </Typography>

            </Box>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                zIndex: 0,
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
                my: '52px',
                gap: '4vw',
                width: '100%',
                flexWrap: 'wrap'
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '16px',
                    width: { xs: '100%', s: '100%', md: '50%', lg: '50%' },
                }}>
                    <Typography variant="body1"> Hello there! I’m Angela, an accent-less Long Islander, programmer, and artist. I am a third-year student at Cornell University majoring in Information Science with minors in Computer Science and Game Design. </Typography>
                    <Typography variant="body1"> Starting from high school, I knew I had an interest in design, but it first developed into a passion for web development. I planned to pursue a Computer Science degree and become a front-end developer. However, as I became more involved in programming websites, I always felt like I was missing something.</Typography>
                    <Typography variant="body1" marginBottom='20px'>   </Typography>
                    <img src={img3} style={{
                        width: '100%',
                        objectFit: 'cover'

                    }} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: '100%', md: '40%', lg: '40%' },
                }}>
                    <img src={headshot} style={{
                        borderRadius: '100px',
                        minWidth: '300px',
                        objectFit: 'cover'
                    }} />
                </Box>
            </Box>

            <Typography variant="body1" my="52px"> Then, I discovered product design, and I realized what I was missing. Designers may not build and deploy the end product, but they truly understand it. When I work on a project, I love to iterate. I want to understand the users, end goals, and problems, and create solutions. And that’s what drew me to change my major, and start anew.</Typography>

            {/* lower box */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '4vw',
                my: '52px'
            }}>
                <Box sx={{
                    width: { xs: '100%', sm: '100%', md: '28%', lg: '28%' },
                }}>
                    <img src={img1} style={{
                        width: '100%',
                        objectFit: 'cover'
                    }} />
                </Box>
                <Box sx={{
                    width: { xs: '100%', sm: '100%', md: '28%', lg: '28%' },

                }}>
                    <img src={img2} style={{
                        width: '100%',
                        objectFit: 'cover'

                    }} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: '100%', md: '30%', lg: '30%' },
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    {/* <Typography variant="body1"> When I am not designing (even though it is my passion &lt;&#47;3), you can often find me doodling on my iPad, playing with my cat, or reminiscing on my time in Rome.</Typography> */}
                    <Typography variant="body1"> From my work, I've realized that product design must intersect with business, especially in today's saturated market. However, at the end of the day, products are made to be used-- by humans. </Typography>
                    <Typography variant="body1"> My goal as a designer is to be able to balance all aspects of design, from visuals to accessibility, to create intutive and scalable products. I also look to leverage my technical background to build connection between designers, developers, and more.</Typography>
                </Box>

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
                        width: '240px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={Persona}
                    style={{
                        width: '240px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={BOTW}
                    style={{
                        width: '240px',
                        height: '300px',
                        objectFit: 'cover'
                    }} />
                <img src={Morimens}
                    style={{
                        width: '240px',
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