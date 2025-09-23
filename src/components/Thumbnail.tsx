import { Box, Typography, Button } from "@mui/material"
// import LaunchIcon from '@mui/icons-material/Launch';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export interface ThumbnailProps {
    name: string;
    description: string;
    mainTag: string; // colored tag
    tags: string;
    color: string; // the color of the text in the tags
    link: string;
    imgsrc?: string; // whether an image should be used instead of a color for the banner
    width?: string;
    rotate: string; // rotation angle for hover
    dark?: boolean; // whether the thumbnail has a dark background
    external?: string; // whether the thumbnail links externally
}

export default function Thumbnail(props: ThumbnailProps) {
    return (
        <Button href={props.link} sx={{
            width: props.width ? props.width : '100%',
            '&:hover': {
                scale: '1.01',
                // rotate: props.rotate,
                backgroundColor: props.dark ? 'rgba(0,0,0,0.7)' : 'white'
            },
        }}>
            <Box sx={{
                minHeight: '200px',
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
            }}>
                <Box sx={{ display: props.imgsrc ? 'none' : 'flex' }} width="100%" minHeight="240px" marginBottom="4px" />
                <img src={props.imgsrc} style={{
                    width: "100%",
                    minHeight: '200px',
                    minWidth: '300px',
                    objectFit: 'cover',
                    display: props.imgsrc ? 'flex' : 'none'
                }} />
                <Box display="flex" flexDirection="row">
                    <Typography variant="body1" sx={{ textTransform: 'none', color: props.color }}>{props.mainTag} &nbsp;</Typography>
                    <Typography variant="body1" sx={{ textTransform: 'none', color: '#5B5B5B' }}>{props.tags}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1%">
                    <Typography variant="heading3" fontWeight="600" sx={{ color: props.dark ? 'white' : 'black' }}> {props.name} </Typography>
                    <ArrowOutwardIcon sx={{ color: 'black', display: props.external ? 'flex' : 'none' }} />
                </Box>
                <Typography variant="body1" sx={{ textTransform: 'none', color: props.dark ? 'white' : 'black' }}> {props.description} </Typography>
            </Box>
        </Button>
    );
}