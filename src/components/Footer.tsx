import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "../assets/footer.png"

interface FooterProps {
    color: string; //white or black (light or dark mode)
}

export default function Footer(props: FooterProps) {
    return (
        <Box sx={{
            bottom: "0px",
            width: '84%',
            display: "flex",
            px: "8%",
            backdropFilter: 'blur(8px) opacity(50%)',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: props.color
        }}>
            <Box sx={{ display: 'flex ', flexDirection: "column", width: "50%", gap: '8px' }}>
                <Typography variant="body2" textOverflow="wrap"> Reach out anytime to talk about my work, experiences, or how to center clay on a throwing wheel. </Typography>
                <Stack direction="row" gap="20px" py="4px" marginLeft="-16px">
                    <Button startIcon={<EmailIcon />} href={"mailto:angelzhua@gmail.com"} color={props.color} />
                    <Button startIcon={<LinkedInIcon />} href={"https://www.linkedin.com/in/angela-zhu-26b22229a/"} target="_blank" rel="noopener noreferrer" color={props.color} />
                </Stack>
            </Box >
            <img src={Image} width="40%" />
        </Box >
    );
}
