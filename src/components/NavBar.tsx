import { useState, useEffect } from 'react'
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
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const currPath = location.pathname;
        const activeIndex = links.findIndex(link => currPath === link || currPath.startsWith(link + '/'));
        setActivePage(activeIndex);
    }, [location]);

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

            {/* <Box>

                <Button href={"/work"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Work </Typography></Button>
                <Button href={"/about"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>About </Typography></Button>
                <Button href={"/play"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Play </Typography></Button>
                <Button href={"/resume"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Resume </Typography></Button>
            </Box> */}
        </Box>
    );
}
