import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom"

import Logo from "../assets/logo.png"

export interface HeaderProps {
    position: string;
}

const pages = ["Work", "About", "Play", "Resume"];
const links = ["/work", "/about", "/play", "/resume"];

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
                flexDirection: 'row',
                gap: '4%'
            }}>
                {pages.map((word, index) => (
                    <Button
                        key={word}
                        href={links[index]}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <Typography sx={{ display: activePage === index ? 'flex' : 'none' }}> &#x1FAB7;</Typography>
                        <Typography sx={{
                            textTransform: 'none',
                            color: 'black',
                        }}>
                            {word}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Box>
    );
}
