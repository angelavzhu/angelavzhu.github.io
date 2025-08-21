import { Box, Typography } from "@mui/material";

export type VideoData = {
    video: string
    name: string
}

export default function VideoCell(props: VideoData) {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <video autoPlay muted controls style={{ width: '30%', minWidth: '300px', borderRadius: '50px' }}>
                <source src={props.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Typography variant="body1" paddingTop="20px"> {props.name}</Typography>
        </Box>
    )
}