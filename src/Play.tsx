import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import Portrait from './assets/Play/portrait.jpg'
import Horse from './assets/Play/horse-black.png'

export default function Evently() {
    return (
        <Box marginTop="80px" mx="10%" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            flexDirection: 'column'
        }}>
            <Link to="/">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>
                    <img src={Portrait} width="30%" />
                    <Box sx={{
                        py: '12px',
                        px: '12px',
                        boxShadow: '0px 1px 2px grey',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="heading3" paddingBottom='12px'> Digital Art</Typography>
                        <Typography variant="body1"> 2020-2025</Typography>
                        <Typography variant="body1"> Personal artwork presented as digital media </Typography>
                    </Box>
                </Box>
            </Link>

            <Link to="/">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>
                    <img src={Horse} width="30%" />
                    <Box sx={{
                        py: '12px',
                        px: '12px',
                        boxShadow: '0px 1px 2px grey',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="heading3" paddingBottom='12px'> Apathia </Typography>
                        <Typography variant="body1"> Jan - May 2025 </Typography>
                        <Typography variant="body1"> Animation and character design for a strategy mobile game </Typography>
                    </Box>
                </Box>
            </Link>

            <Link to="/">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>
                    <img src={Portrait} width="30%" />
                    <Box sx={{
                        py: '12px',
                        px: '12px',
                        boxShadow: '0px 1px 2px grey',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="heading3" paddingBottom='12px'> Ceramics</Typography>
                        <Typography variant="body1"> Jun - Aug 2025</Typography>
                        <Typography variant="body1"> Pots and cups thrown as an (enthusiastic) amateur potter </Typography>
                    </Box>
                </Box>
            </Link>

        </Box >
    );
}