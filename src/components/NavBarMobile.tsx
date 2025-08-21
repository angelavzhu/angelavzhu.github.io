import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Slide, Button, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import NavBarButton from './NavBarButton'
import Logo from "../assets/logo.png"

function NavBarContents({ open, onClose }) {
    return (
        <Box
            flexDirection="column"
            sx={{
                position: 'fixed',
                width: 'auto',
                height: '100vh',
                overflowX: 'hidden',
            }}>
            <Stack px='2%' py='2%' direction="row">
                <Box width="80%" />
                <Button
                    onClick={onClose}
                    sx={{
                        paddingTop: '5%',
                        color: 'black'
                    }}>
                    <CloseIcon />
                </Button>
            </Stack>

            {/* the links to all the pages. 'text' must exactly match the name of the link.  */}
            <Box flexDirection='column' display="flex" alignItems='center' justifyContent="center" width="100vw" gap="40px" paddingTop="10%" >
                <NavBarButton href="/work" name="Work" />
                <NavBarButton href="/about" name="About" />
                <NavBarButton href="/play" name="Play" />
                <NavBarButton href="/resume" name="Resume" />
            </Box>
        </Box>
    );
}

export default function NavBarMobile() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    }

    return (
        <>
            <Slide direction="left" in={open} mountOnEnter unmountOnExit
                sx={{
                    position: 'fixed',
                    zIndex: 10000,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: "white"
                }}>
                <Box>
                    <NavBarContents open={open} onClose={handleToggle} sx={{
                        position: 'fixed',
                        zIndex: 10000,
                        backgroundColor: 'white'
                    }} />
                </Box>
            </Slide>

            <Box
                id="navbar-wrapper"
                sx={{
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 100, //used to ensure the nav bar is in front of all other elements on the page
                    background: 'linear-gradient(to right,  transparent, white)',
                    alignItems: "center",
                    position: "fixed",
                    py: 1.5,
                    px: 4,
                    display: "flex",
                    justifyContent: "space-between",
                    visibility: open ? "hidden" : "visible"
                }}
            >
                <Link to={"/"} style={{ padding: '4px' }}> <img src={Logo} height="56px" /> </Link>
                <Button onClick={handleToggle}>
                    <MenuIcon sx={{ color: 'black' }} />
                </Button>

            </Box>

        </>

    );
}
