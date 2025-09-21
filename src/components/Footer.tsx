import { Box, Typography, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "../assets/footer.png"
import { Link } from "react-router-dom"

interface FooterProps {
    color: string; //white or black (text)
}

export default function Footer(props: FooterProps) {
    return (
        <Box sx={{
            bottom: "0px",
            left: '0px',
            width: '100%',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <hr width="90%" size="2" />
            <Box sx={{
                width: '70%',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                color: props.color,
                py: '32px'
            }}>
                <Box sx={{
                    display: 'flex ',
                    flexDirection: "column",
                    width: "48%",
                    gap: '8px',
                }}>
                    <Typography variant="body1" textOverflow="wrap"> <Link to={"mailto:avz7@cornell.edu"} style={{ color: props.color === "white" ? 'white' : "#007700" }}>Reach out anytime</Link> to talk about my work, experiences, or how to center clay on a throwing wheel. </Typography>
                    <Stack direction="row" py="4px" display="flex" alignItems="center">
                        <Typography variant="body1" textOverflow="wrap" paddingRight="24px"> Designed, animated, and coded with &#9829;</Typography>
                    </Stack>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                    }}>
                        <Button startIcon={<EmailIcon sx={{ color: props.color === "white" ? 'white' : "#007700", mx: '-25px' }} />} href={"mailto:avz7@cornell.edu"} color={props.color} />
                        <Button startIcon={<LinkedInIcon sx={{ color: props.color === "white" ? 'white' : "#007700", mx: '-25px' }} />} href={"https://www.linkedin.com/in/angelavzhu/"} target="_blank" rel="noopener noreferrer" color={props.color} />
                    </Box>
                </Box >
                <img src={Image} width="50%" />
            </Box >
        </Box>
    );
}
