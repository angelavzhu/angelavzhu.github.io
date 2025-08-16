import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton, Slide, Stack, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import Cell from "./VideoCell.tsx";
import CellData from "../data/EventlyFinal.ts";

function Carousel() {
    const [cells, setCells] = useState<React.ReactElement[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

    const cellsPerPage = 1;

    const pages = cells.length / cellsPerPage;

    const refreshCards: React.ReactElement[] = CellData.map((cell) => (
        <Cell {...cell} />
    ));

    const handleNextPage = (event) => {
        event.preventDefault();
        setSlideDirection("left");
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(refreshCards.length / cellsPerPage)); //support wraparound
    }

    const handlePrevPage = (event) => {
        event.preventDefault();
        setSlideDirection("right");
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(refreshCards.length / cellsPerPage)) % Math.ceil(refreshCards.length / cellsPerPage));
    }

    // const handleDotChange = (event) => {
    //     setCurrentPage(Number(event.target.value)); // when user clicks on a circle, it moves the timeline to that number
    //     console.log("Number: " + Number(event.target.value));
    // }

    // sets initial data (blank timeline)
    useEffect(() => {
        setCells(refreshCards);
    }, []);

    return (
        <Box>
            {/* contains entire carousel, items added to this box go to the right (row) */}
            <Box sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50%",
                width: "100%",
            }}>
                {/* contains cards - takes full width */}
                <Box sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    overflowY: "hidden",
                }}>
                    {/* iterate over each panel: 3 CELLS! must use Array.from because we go by cells */}
                    {Array.from({ length: Math.ceil(cells.length / cellsPerPage) }).map((_, index) => (
                        <Box
                            key={`cell-${index}`}  //creates unique identifier for each row
                            sx={{
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                display: currentPage === index ? "block" : "none", //checks if card is index (should be displayed) and only displays it if true
                            }} >

                            {/* slide animation */}
                            <Slide direction={slideDirection} in={currentPage === index} >
                                {/* format cards as stack */}
                                <Stack
                                    spacing={"0%"}
                                    direction="row"
                                    alignContent="center"
                                    justifyContent="center"
                                    sx={{
                                        //zIndex: "1000",
                                    }}>
                                    {cells.slice(
                                        index * cellsPerPage,
                                        index * cellsPerPage + cellsPerPage
                                    )}
                                </Stack>
                            </Slide>
                        </Box>
                    ))}
                </Box>

                {/* Overlayed nav button - handle previous page (<) button click */}
                <IconButton onClick={handlePrevPage}
                    sx={{
                        position: "absolute",
                        left: "2%",
                        //zIndex: 1500,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        "&hover": { backgroundColor: "rgba(0, 0, 0, 0.4)" },
                    }}>
                    <NavigateBefore sx={{ color: "white", transform: 'scale(2)', }} />
                </IconButton>
                {/* handle next page (>) button click */}
                <IconButton onClick={handleNextPage}
                    sx={{
                        position: "absolute",
                        right: "2%",
                        //zIndex: 1500,
                        backgroundColor: "rgba(0,0,0,0.2)",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" }
                    }}>
                    <NavigateNext sx={{ color: "white", transform: 'scale(2)', }} />
                </IconButton>
            </Box >

            {/* Dots */}
            {/* {<RadioGroup row value={currentPage} onChange={handleDotChange} sx={{
                mt: "-5%", justifyContent: "center",
                alignItems: "center", mb: "1%", gap: "1%"
            }}>
                {[...Array(pages)].map((_, index) => (
                    <FormControlLabel
                        key={index}
                        value={String(index)}
                        control={<Radio size="small"
                            sx={{ color: "white", '&.Mui-checked': { color: "white" }, transform: 'scale(2)', mx: "1%" }} />}
                        label=""
                    />
                ))}
            </RadioGroup>
            } */}
        </Box>
    );

}

export default Carousel;