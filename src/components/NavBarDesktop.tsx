import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom"

import Logo from "../assets/logo.png"

export interface HeaderProps {
    position: string;
}

const pages = ["Work", "About", "Play"];
const links = ["/", "/about", "/play"];

export default function Header(props: HeaderProps) {
    const location = useLocation();
    const currentPath = location.pathname;

    // Calculate active page directly without state
    const getActivePageIndex = () => {
        // Exact match first
        const exactMatch = links.findIndex(link => currentPath === link);
        if (exactMatch !== -1) return exactMatch;

        // Then check for path starts with (for nested routes)
        return links.findIndex(link => currentPath.startsWith(link + '/'));
    };

    const activePage = getActivePageIndex();
    return (
        <Box sx={{
            position: props.position,
            top: "0px",
            left: "0px",
            right: "0px",
            px: '50px',
            alignItems: 'center',
            zIndex: 51,
            background: 'linear-gradient(to right,  transparent, white)',
            display: "flex",
            justifyContent: 'space-between',
        }}>
            <Link to={"/"} style={{ padding: '4px' }}> <img src={Logo} height="56px" /> </Link>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {pages.map((word, index) => (
                    <Button
                        key={word}
                        href={links[index]}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            color: 'black',
                            '&:hover': {
                                color: '#007700',
                                backgroundColor: 'rgba(0,0,0,0)'
                            },
                        }}>
                        <Typography sx={{ display: activePage === index ? 'flex' : 'none' }}> &#x1FAB7;</Typography>
                        <Typography sx={{
                            textTransform: 'none',
                        }}>
                            {word}
                        </Typography>
                    </Button>
                ))}
                <Button href="https://drive.google.com/file/d/1mwTy7CJU0mkgGk4Wxc7viRZWfRg0xl6z/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'black',
                        '&:hover': {
                            color: '#007700',
                            backgroundColor: 'rgba(0,0,0,0)'
                        },
                    }}>
                    <Typography sx={{ textTransform: 'none' }}>
                        Resume
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}