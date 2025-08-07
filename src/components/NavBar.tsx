import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"

export interface HeaderProps {
    position: string;
}
export default function Header(props: HeaderProps) {
    return (
        <Box sx={{
            position: props.position,
            top: "0px",
            left: "0px",
            right: "0px",
            px: '50px',
            py: '24px',
            zIndex: 100,
            background: 'linear-gradient(to right,  transparent, white)',
            display: "flex",
            justifyContent: 'space-between',
        }}>
            <Link to={"/"}> Logo </Link>
            <Box>
                <Button href={"/"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Work </Typography></Button>
                <Button href={"/about"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>About </Typography></Button>
                <Button href={"/play"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Play </Typography></Button>
                <Button href={"/resume"}> <Typography sx={{ textTransform: 'none', color: 'black' }}>Resume </Typography></Button>
            </Box>
        </Box>
    );
}
