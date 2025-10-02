import { Box, Typography } from '@mui/material';

interface SectionTagProps {
    textColor: string;
    secondaryColor: string; // color of border
    backgroundColor: string;
    text: string;
}
export default function SectionTag(props: SectionTagProps) {
    return (
        <Box sx={{
            width: '100%',
            py: '8px',
            paddingLeft: '16px',
            backgroundColor: props.backgroundColor,
            borderLeft: `8px solid ${props.secondaryColor}`,
        }}>
            <Typography variant="heading2" color={props.textColor}> {props.text} </Typography>
        </Box>
    )
}