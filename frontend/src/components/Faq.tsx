import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Faq() {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{mb:1}}><strong>Save Our Water Beta</strong></Typography>
                    <Typography variant="h5" >Three Waters Express Submission</Typography>
                    <Typography variant={"h6"} sx={{mb: 6}}>By Lobby New Zealand</Typography>


                    <Typography component="h1" variant="h5">How does this tool work?</Typography>

                    <Typography variant="body1" sx={{mt: 2}}>
                        The idea of this tool is to help you submit against the Water Services Entities Bill in under 2 minutes.
                    </Typography>

                    <Typography variant="body1" sx={{mt: 2}}>
                        Start by keying in your contact details (as required by Parliament) and customise your submission by entering the council name of where you live.
                    </Typography>

                    <Typography variant="body1" sx={{mt: 2}}>
                        You will then get a submission template generated for you. Customise further by selecting which section to include in your submission, and which to leave out.
                         You can even add your own comments! After that, agree to the Covid-19 Protection Framework Statement and Privacy Statement as set out by Parliament and us.
                    </Typography>

                    <Typography variant="body1" sx={{mt: 2}}>
                        Finally, click submit! Your submission will be processed and sent to Parliament's server.
                    </Typography>

                    <Typography component="h1" sx={{mt:6}} variant="h5">Where do I find the source code for this project? How can I build a website similar to yours?</Typography>

                    <Typography variant="body1" sx={{mt: 2}}>
                        We're not releasing the source code just yet. However, if you're interested, please get in touch at francis@lobbynewzealand.org.nz.
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 6}}><Link href={"/"}>Return to submission form</Link></Typography>

                    <Typography variant="h6" sx={{mb: 6, mt: 6}}><Link href={"/donate"}>Donate now</Link></Typography>

                </Box>
            </Container>
        </ThemeProvider>
    );
}