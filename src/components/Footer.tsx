import { Box, Typography, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "../assets/footer.png"
import { Link, useLocation } from "react-router-dom"


// Footer contains info about which pages are light/dark mode (hardcoded)
export default function Footer() {
    const location = useLocation();
    const darkMode = ['/algolink', '/crc'];
    const color = darkMode.includes(location.pathname) ? "white" : "black";

    console.log("footer color", color);
    return (
        <Box sx={{
            width: '100%',
            zIndex: 10,
            display: 'flex',
            backgroundColor: color === "white" ? 'rgba(0,0,0,0)' : 'white',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <hr width="90%" size="2" />
            <Box sx={{
                px: '50px',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'space-between',
                color: color,
                py: '32px'
            }}>
                <Box sx={{
                    display: 'flex ',
                    flexDirection: "column",
                    width: "50%",
                    gap: '8px',
                }}>
                    <Typography variant="body1" textOverflow="wrap"> <Link to={"mailto:avz7@cornell.edu"} style={{ color: color === "white" ? 'white' : "#007700" }}>Reach out anytime</Link> to talk about my work, experiences, or how to center clay on a throwing wheel. </Typography>
                    <Stack direction="row" py="4px" display="flex" alignItems="center">
                        <Typography variant="body1" textOverflow="wrap" paddingRight="24px"> Designed, animated, and coded with &lt;3 </Typography>
                    </Stack>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                    }}>
                        <Button startIcon={<EmailIcon sx={{ color: color === "white" ? 'white' : "#007700", mx: '-25px' }} />} href={"mailto:avz7@cornell.edu"} color={color} />
                        <Button startIcon={<LinkedInIcon sx={{ color: color === "white" ? 'white' : "#007700", mx: '-25px' }} />} href={"https://www.linkedin.com/in/angelavzhu/"} target="_blank" rel="noopener noreferrer" color={color} />
                    </Box>
                </Box >
                <img src={Image} width="40%" />
            </Box >
        </Box>
    );
}
