import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {AccordionDetails} from "@mui/material";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Accordion, AccordionSummary} from "@mui/material";


const theme = createTheme();

export default function Donate() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    // const [error, setError] = React.useState("")
    //
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //
    //     const firstName = data.get('firstName');
    //     const lastName = data.get('lastName');
    //     const email = data.get('email');
    //     const address = data.get('address')
    //     const card = data.get('card')
    //     const mm = data.get('mm')
    //     const yy = data.get('yy')
    //     const amount = data.get('amount')
    //
    //     if (firstName !== null && lastName !== null && email !== null && address !== null && card !== null && mm !== null &&
    //     yy !== null && amount !== null && firstName !== "" && lastName !== "" && email !== "" && address !== "" && card !== "" &&
    //     mm !== "" && yy !== "" && amount !== "") {
    //         setError("")
    //
    //     } else {
    //         setError("One or more of the above fields is blank!")
    //     }
    // };

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
                    <Typography variant={"h6"} sx={{mb: 3}}>By Lobby New Zealand</Typography>


                    <Typography component="h1" variant="h5">Thank you so much for your donations.</Typography>
                    <Typography variant="h6" sx={{mb: 3, mt: 2}}>By donating to our Three Waters campaign,
                    you will help us fight against this undemocratic reform that the Government is trying to push through,
                    so that we could keep our assets in local control by local democracy.</Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 10 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>

                                <Accordion expanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography component="h1" variant="body1">
                                        Bank transfers</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}><Typography component="h1" variant="body1" sx={{ mb: 1}}>
                                            <strong>Lobby New Zealand</strong>
                                            <br/>06-0577-0229643-00<br/>ANZ Wellington South</Typography></Grid>




                                    </Grid>

                                    <Typography>
                                        We appreciate your donations. Please include "3WATERS" as a reference.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                                <Typography variant="h6" sx={{mb: 3, mt: 6}}><Link href={"/"}>Return to submission form</Link></Typography>



                            </Grid>



                            {/*<Grid item xs={12}>*/}

                            {/*<Accordion expanded>*/}
                            {/*    <AccordionSummary*/}
                            {/*        expandIcon={<ExpandMoreIcon />}*/}
                            {/*        aria-controls="panel1a-content"*/}
                            {/*        id="panel1a-header"*/}
                            {/*    >*/}
                            {/*        <Typography component="h1" variant="body1">*/}
                            {/*            <Chip size="small" label="CARDS" /> Credit or debit cards</Typography>*/}
                            {/*    </AccordionSummary>*/}
                            {/*    <AccordionDetails>*/}

                            {/*        <Grid container spacing={2}>*/}

                            {/*            <Grid item xs={12}>*/}
                            {/*                <Typography>*/}
                            {/*                    Your donation will be cleared at the end of the day. Please fill in the following billing details.*/}
                            {/*                </Typography>*/}
                            {/*            </Grid>*/}

                            {/*        <Grid item xs={12} sm={6}>*/}
                            {/*            <TextField*/}
                            {/*                autoComplete="given-name"*/}
                            {/*                name="firstName"*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="firstName"*/}
                            {/*                label="First name"*/}
                            {/*                autoFocus*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={12} sm={6}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="lastName"*/}
                            {/*                label="Last name"*/}
                            {/*                name="lastName"*/}
                            {/*                autoComplete="family-name"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={12}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="email"*/}
                            {/*                label="Email address"*/}
                            {/*                name="email"*/}
                            {/*                autoComplete="email"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={12}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="address"*/}
                            {/*                label="Street address"*/}
                            {/*                name="address"*/}
                            {/*                autoComplete="street-address"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={12}><Typography component="h1" variant="body1" sx={{mt: 2, mb: 1}}>*/}
                            {/*            Provide your Visa or MasterCard card information, and how much you would like to donate. We appreciate your donations! </Typography></Grid>*/}

                            {/*        <Grid item xs={12}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="card"*/}
                            {/*                label="Card number"*/}
                            {/*                name="card"*/}

                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={2}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="mm"*/}
                            {/*                label="MM"*/}
                            {/*                name="mm"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={2}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="yy"*/}
                            {/*                label="YY"*/}
                            {/*                name="yy"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*        <Grid item xs={2}>*/}
                            {/*            <TextField*/}
                            {/*                required*/}
                            {/*                fullWidth*/}
                            {/*                id="cvv"*/}
                            {/*                label="CVV"*/}
                            {/*                name="cvv"*/}
                            {/*            />*/}
                            {/*        </Grid>*/}

                            {/*            <Grid item xs={6}>*/}
                            {/*                <TextField*/}
                            {/*                    required*/}
                            {/*                    fullWidth*/}
                            {/*                    id="amount"*/}
                            {/*                    label="Amount in NZD"*/}
                            {/*                    name="amount"*/}
                            {/*                />*/}
                            {/*            </Grid>*/}

                            {/*            {error !== "" && <Grid item xs={12}>*/}

                            {/*                <Alert severity="error" sx={{mt: 2}}>{error}</Alert>*/}

                            {/*            </Grid>}*/}

                            {/*            <Grid item xs={12}>*/}
                            {/*                <Button*/}
                            {/*                    type="submit"*/}
                            {/*                    fullWidth*/}
                            {/*                    variant="contained"*/}
                            {/*                >*/}
                            {/*                    Donate*/}
                            {/*                </Button>*/}
                            {/*            </Grid>*/}



                            {/*        </Grid>*/}
                            {/*    </AccordionDetails>*/}
                            {/*</Accordion>*/}
                            {/*</Grid>*/}




                        </Grid>

                        <Grid container justifyContent="flex-end">
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}