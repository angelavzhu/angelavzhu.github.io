import { Box, Typography, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "../assets/footer.png"

interface FooterProps {
    color: string; //white or black (text)
}

export default function Footer(props: FooterProps) {
    return (
        <Box>
            <hr width="90%" size="2" />

            <Box sx={{
                bottom: "0px",
                left: '0px',
                width: '84%',
                display: "flex",
                px: "8%",
                // borderStyle: 'solid',
                // borderWidth: '1px',
                // borderColor: '#AEAEAE',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: props.color
            }}>
                <Box sx={{
                    display: 'flex ',
                    flexDirection: "column",
                    width: "50%",
                    gap: '8px',
                }}>
                    <Typography variant="body1" textOverflow="wrap"> Reach out anytime to talk about my work, experiences, or how to center clay on a throwing wheel. </Typography>
                    <Stack direction="row" py="4px" display="flex" alignItems="center">
                        <Typography variant="body1" textOverflow="wrap" paddingRight="24px"> Designed, animated, and coded with &#9829;</Typography>
                        <Button startIcon={<EmailIcon />} href={"mailto:angelzhua@gmail.com"} color={props.color} />
                        <Button startIcon={<LinkedInIcon />} href={"https://www.linkedin.com/in/angela-zhu-26b22229a/"} target="_blank" rel="noopener noreferrer" color={props.color} />
                    </Stack>
                </Box >
                <img src={Image} width="40%" />
            </Box >
        </Box>
    );
}
