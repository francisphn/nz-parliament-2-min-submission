import * as React from 'react';

// Import all MUI components and related items used
import SendIcon from '@mui/icons-material/Send'
import {Alert, ButtonGroup, LinearProgress, Paper, Link, Grid, Box, Typography, Container, Checkbox,
    TextField, Button, FormControlLabel} from '@mui/material'

// Import functions
import {submissionText} from "../services/Data"
import submitSubmission from "../services/SubmitSubmission";
import {getCookie} from "../services/CookieServices";
import {useNavigate} from "react-router-dom";

const Preview = () => {

    const navigate = useNavigate()

    React.useEffect(() => { // If form isn't submitted, redirect to /
        if (getCookie("submitForm") !== "true") {
            navigate("/")
        }
    }, [])

    const [errorMessage, setErrorMessage] = React.useState("")  // This is the error message, to be displayed in the error alert.

    const [otherComments, setOtherComments] = React.useState("")  // If the user has other comments in the "Preview" tab, as it's not a form.

    const onChangeOtherComments = (event: any) => { // This function manages the field which allows for additional comments
        setOtherComments(event.target.value)
    }

    const onChangeAgree = (event: any) => {
        if (event.target.checked) {
            setErrorMessage("")
        } else {
            setErrorMessage("You need to agree to the Covid-19 Protection Framework and Privacy Statements.")
        }
    }

    const [loading, setLoading] = React.useState(false)

    const handleSubmitSubmission = async () => {
        setLoading(true)

        const response = await submitSubmission(submissionText())
        document.cookie = "submitSubmission=true"
        if (response === 202) {
            document.cookie = "success=true"
            navigate("/submitted")
        } else {
            document.cookie = "success=false"
            navigate("/submitted")
        }
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 30}}>

                <ButtonGroup fullWidth aria-label="outlined button group" sx={{mb: 3}}>
                    <Button variant="outlined" href={"/"}>1. Provide details</Button>
                    <Button variant="contained" href={"/preview"} disableElevation>2. Send your submission</Button>
                </ButtonGroup>

                <Typography variant={"h5"}>Your submission is ready!</Typography>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography component="h1" variant="body1" sx={{mt: 2}}>
                            Preview your submission below.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={5} sx={{mt: 2}}>
                            <Grid sx={{padding: 3}} >

                                <Typography variant={"h5"} sx={{mb: 2}}>
                                    Submission of {getCookie("firstName")} {getCookie("lastName")} on the Water Services Entities Bill
                                </Typography>

                                <Typography variant={"h6"}><strong>
                                    About this submission
                                </strong></Typography>

                                <Typography variant={"body1"}>
                                    As a ratepayer of {getCookie("council")}, I am submitting against the Water Services Entities Bill.
                                </Typography>

                                {
                                    submissionText().map((reason) =>
                                        (
                                            <Box sx={{mt:3}}>
                                                <Typography variant={"h6"}>
                                                    <strong>
                                                        {reason.heading}
                                                    </strong>
                                                </Typography>

                                                <Typography variant={"body1"}>
                                                    {reason.body}
                                                </Typography>
                                            </Box>
                                        )
                                    )
                                }

                                <Typography variant={"h6"} sx={{mt: 4}}><strong>Do you have any other comments?</strong>

                                </Typography>

                                <Grid item xs={12} sx={{mt: 2}}>
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Add additional comments here..."
                                        multiline
                                        rows={7}
                                        defaultValue={otherComments}
                                        onChange={onChangeOtherComments}
                                    />
                                </Grid>

                            </Grid>



                        </Paper>
                    </Grid>

                </Grid>

                <Typography variant={"h6"} sx={{ mt: 4}}>Your contact details</Typography>

                <Typography variant={"body1"}>{getCookie("firstName")} {getCookie("lastName")}, {getCookie("email")} <br/> <Link href={"/"}>Not correct?</Link></Typography>

                <Typography variant={"h6"} sx={{ mt: 4}}>Covid-19 Protection Framework Statement</Typography>

                <Typography variant={"body1"}>
                    Parliament is open to visitors under the Covid-19 Protection Framework.
                    Any submitters invited to speak to a select committee in person will need to wear a mask when moving around the precinct.
                </Typography>

                <Typography variant={"h6"} sx={{ mt: 4}}>Privacy Statement</Typography>

                <Typography variant={"body1"}>
                    This website works by helping you submit against the Water Services Entities Bill quickly by generating a submission for you.
                    You acknowledge that this is your own submission.
                    Your submission and contact details will be uploaded through the backend to the form "Your submission" on Parliament's website.
                    We do not store your data. Below is the original Parliamentary Privacy Statement:
                </Typography>

                <Typography variant={"body1"} sx={{mt: 2}}>
                    The content provided in “Your submission” online form and/or any uploaded files and documents
                    will be published to the New Zealand Parliament website and available to public search engines.
                    It is your responsibility to ensure that your submission does not include any personal information that you do not want published.
                </Typography>


                <FormControlLabel sx={{mt: 3}} control={<Checkbox defaultChecked onChange={onChangeAgree} />} label={"I confirm I have read the Covid-19 Protection Framework and Privacy Statements set out above."} />

                {errorMessage !== "" && <Alert severity="error" sx={{mt: 2}}>{errorMessage}</Alert>}

                {errorMessage === "" && !loading && <Button fullWidth variant="contained" disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />} onClick={handleSubmitSubmission}>Complete your submission</Button>}

                {errorMessage === "" && loading && <Button fullWidth variant="contained" disabled disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />}>Sending your submission</Button>}

                {loading &&
                    <>
                        <Typography variant={"body1"} sx={{mt: 2, mb: 2}}>
                            Please be patient...
                        </Typography>
                        <LinearProgress />
                    </>
                }

                {errorMessage !== "" && <Button fullWidth variant="contained" disabled disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />}>Complete your submission</Button>}


            </Box>

        </Container>
    )
}

export default Preview
