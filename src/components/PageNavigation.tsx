import { Box, Button, Typography } from "@mui/material"
import React, { useEffect } from "react"

export interface PageNavigationProps {
    color: string; // the color of the selected state
    mode: string; // light or dark mode
    tabNames: string[]; // the color of the selected state
}

export default function PageNavigation(props: PageNavigationProps) {
    // name of the page and also the name of the section that will be scrolled to
    const names = props.tabNames;
    const [selected, setSelected] = React.useState("Project Overview");

    // change nav state based on scroll position
    console.log("useeffect is running");
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            // Find which section we're currently in
            console.log("names length", names.length);
            for (let i = names.length - 1; i >= 0; i--) { // checks from bottom to top: if the position is above or below the current scroll
                console.log("checking", names[i]);
                const element = document.getElementById(names[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setSelected(names[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [names]);

    const processClick = (name) => {
        setSelected(name);
        document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Box sx={{
            position: 'fixed',
            top: '90px',
            display: 'flex',
            flexDirection: 'column',
            visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' }
        }}>
            {
                names.map((name) => (
                    <Button key={name} onClick={() => processClick(name)} sx={{
                        textTransform: 'none',
                        justifyContent: 'start',
                    }}
                    >
                        <Typography variant="body1" color={selected === name ? props.color : props.mode === "light" ? "black" : "white"} sx={{
                            fontWeight: selected === name ? 'bold' : 'normal',
                        }}> {name} </Typography>
                    </Button>
                ))
            }
        </Box >
    )
}