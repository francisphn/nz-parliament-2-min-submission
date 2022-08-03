import Typography from "@mui/material/Typography";
import * as React from "react";
import {Box, Container} from "@mui/material";

const Header = () => {
    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                <Typography component="h1" variant="h4" sx={{mb:1}}><strong>SaveOurWater</strong></Typography>
                <Typography variant="h5" sx={{mb: 3}}>Three Waters Express Submission</Typography>
            </Box>
        </Container>
    )
}

export default Header
