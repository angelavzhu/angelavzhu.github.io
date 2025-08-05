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
                <Button> <Link to={"/"}> Work </Link> </Button>
                <Button> <Link to={"/about"}> About </Link> </Button>
                <Button> <Link to={"/play"}> Play </Link> </Button>
                <Button> <Link to={"/resume"}> Resume </Link> </Button>

            </Box>
        </Box>
    );
}
