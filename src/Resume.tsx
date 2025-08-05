import { Box, Typography } from "@mui/material";
import resume from './assets/Resume.pdf'

export default function Resume() {
    return (
        <Box marginTop="80px" mx="10%">
            <Typography variant="subheading"> Angela Zhu, junior at Cornell University studying Information Science
            </Typography>
            <Box my='32px'>
                <object data={resume} type="application/pdf" width="100%" height="500px">
                    <p>Unable to display PDF file. <a href={resume}>Download</a> instead.</p>
                </object>
            </Box>

        </Box >
    );
}