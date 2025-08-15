import { Box, Typography, Button } from "@mui/material"

export interface ThumbnailProps {
    name: string;
    imgsrc: string;
    date: string;
    description: string;
    link: string;
    width?: string;
}

export default function Thumbnail(props: ThumbnailProps) {
    return (
        <Button href={props.link}>
            <Box sx={{
                width: props.width ? props.width : '100%',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'left',
                gap: '16px',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Typography variant="body1" sx={{ textTransform: 'none', color: 'black' }}> {props.name} </Typography>
                <img src={props.imgsrc} style={{
                    width: "100%",
                    objectFit: 'cover'
                }} />
                <Typography variant="body2" sx={{ textTransform: 'none', color: 'black' }}> {props.description} </Typography>
                <Typography variant="body2" sx={{ textTransform: 'none', color: 'black' }}> {props.date} </Typography>
            </Box>
        </Button>
    );
}