import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <Box sx={{
            bottom: "0px",
            width: '84%',
            display: "flex",
            px: "8%",
            py: "16px",
            backdropFilter: 'blur(8px) opacity(50%)',
            justifyContent: 'space-between',
        }}>
            <Box sx={{ display: 'flex ', flexDirection: "column", width: "50%", gap: '4px' }}>
                <Typography variant="body2" textOverflow="wrap"> Reach out anytime to talk about my work, experiences, or how to center clay on a throwing wheel. </Typography>
                <Stack direction="row" gap="20px">
                    <Typography variant="body1" textOverflow="wrap" textTransform="none"> <Link to={"mailto:angelzhua@gmail.com"} target="_blank" rel="noopener noreferrer">angelzhua@gmail.com </Link> </Typography>
                    <Typography variant="body1" textTransform="none"><Link to={"https://www.linkedin.com/in/angela-zhu-26b22229a/"} target="_blank" rel="noopener noreferrer" >in </Link> </Typography>
                </Stack>
            </Box >
            < Box sx={{ display: "flex", width: '30%' }}>
                Image
            </Box >
        </Box >
    );
}
