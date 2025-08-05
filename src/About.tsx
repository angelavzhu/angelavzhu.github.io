import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

import Umamusume from "./assets/about/Umamusume.jpg"
import BOTW from "./assets/about/BOTW.jpg"
import Morimens from "./assets/about/Morimens.jpg"
import Persona from "./assets/about/Persona5.jpg"

export default function Evently() {
    return (
        <Box marginTop="80px" mx="10%" >
            <Typography variant="accent" fontFamily="Mea Culpa"> Angela Zhu, </Typography>
            <Typography variant="heading1"> gacha addict and sticker hoarder </Typography>

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
                    <Typography variant="body1"> My inner artist yearns to find the perfect balance between usability and creativity. I aim to create human-centered products that are accessible and intuitive to use, but still challenge existing design patterns.  </Typography>
                    <Box sx={{
                        width: '100%',
                        height: '100px',
                        backgroundColor: 'yellow'
                    }} />
                </Box>
                <Box sx={{
                    width: '50%',
                    height: '300px',
                    backgroundColor: 'orange'
                }} />
            </Box>

            {/* lower box */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8%',
                my: '30px'
            }}>
                <Box sx={{
                    width: '50%',
                    height: '200px',
                    backgroundColor: "yellow",
                }} />
                <Box sx={{
                    width: '50%',
                    height: '200px',
                    backgroundColor: "yellow",
                }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '30px'
                }}>
                    <Typography variant="body1"> When I am not designing (even though it is my passion &lt;&#47;3), you can often find me doodling on my iPad, playing with my cat, or throwing pots at my local ceramics studio.</Typography>
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