import { Box, Typography, Button } from "@mui/material"
// import LaunchIcon from '@mui/icons-material/Launch';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export interface ThumbnailProps {
    name: string;
    description: string;
    color: string;
    link: string;
    imgsrc?: string; // whether an image should be used instead of a color for the banner
    width?: string;
    external?: string; // whether the thumbnail links externally
}

export default function Thumbnail(props: ThumbnailProps) {
    return (
        <Button href={props.link}>
            <Box sx={{
                width: props.width ? props.width : '100%',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'center',
                backgroundColor: 'white',
                flexDirection: 'column',
            }}>
                <Box sx={{ display: props.imgsrc ? 'none' : 'flex' }} width="100%" minHeight="240px" marginBottom="4px" backgroundColor={props.color} />
                <img src={props.imgsrc} style={{
                    width: "100%",
                    minHeight: '250px',
                    objectFit: 'cover',
                    display: props.imgsrc ? 'flex' : 'none'
                }} />
                <Box display="flex" gap="1%">
                    <Typography variant="body1" fontWeight="600" sx={{ color: 'black' }}> {props.name} </Typography>
                    <ArrowOutwardIcon sx={{ color: 'black', display: props.external ? 'flex' : 'none' }} />
                </Box>
                <Typography variant="body2" sx={{ textTransform: 'none', color: 'black' }}> {props.description} </Typography>
                <Typography variant="body2" sx={{ textTransform: 'none', color: 'black' }}> {props.color} </Typography>
            </Box>
        </Button>
    );
}