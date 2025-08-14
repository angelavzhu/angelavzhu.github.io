import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

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
                marginBottom: '-10px'
            }}>
                <img src={name} width="300px" />
                <Typography variant="heading1">, gacha addict and sticker hoarder </Typography>

            </Box>

            {/* top section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8%',
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '16px',
                    width: '50%',
                    my: '30px'
                }}>
                    <Typography variant="body1"> Hello there! I’m Angela, an accent-less Long Islander, programmer, and artist. I am a third-year student at Cornell University majoring in Information Science with minors in Computer Science and Game Design. </Typography>
                    <Typography variant="body1" marginBottom='20px'> My inner artist yearns to find the perfect balance between usability and creativity. I aim to create human-centered products that are accessible and intuitive to use, but still challenge existing design patterns.  </Typography>
                    <img src={img3} style={{
                        width: '100%',
                        objectFit: 'cover'

                    }} />
                </Box>
                <img src={headshot} style={{
                    paddingTop: '24px',
                    paddingBottom: '24px',
                    width: '40%',
                    objectFit: 'cover'

                }} />
            </Box>

            {/* lower box */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8%',
                my: '30px'
            }}>
                <img src={img1} style={{
                    width: '24%',
                    objectFit: 'cover'

                }} />
                <img src={img2} style={{
                    width: '24%',
                    objectFit: 'cover'

                }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '30px'
                }}>
                    <Typography variant="body1"> When I am not designing (even though it is my passion &lt;&#47;3), you can often find me doodling on my iPad, playing with my cat, or reminiscing on my time in Rome.</Typography>
                    <Typography variant="body1"> I love all things art, from the clarinet to sculpture, and am always willing to talk about my extensive tea collection. </Typography>
                </Box>

            </Box>

            <Typography variant="body1"> Games I love: </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
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
                justifyContent: 'center'
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