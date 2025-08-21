import { Button, Typography } from '@mui/material'

export interface NavBarProps {
    href: "string",
    name: 'string'
}

export default function NavBarButton(props: NavBarProps) {
    return (
        <Button
            href={props.href}
            color="black">
            <Typography variant="body1" textTransform="none">
                {props.name}
            </Typography>
        </Button>
    )
}