import * as React from 'react';
import {Alert, ButtonGroup, MenuItem, Link, Grid, Box, Typography, Container, TextField, Button} from '@mui/material'
import {councilList} from "../services/Data"
import { useNavigate } from 'react-router-dom';
import {getCookie} from "../services/CookieServices";


const Form = () => {

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = React.useState("")  // This is the error message. An empty string means there aren't any errors.
    const [council, setCouncil] = React.useState(getCookie("council"))  // The default choice for the dropdown box.

    const onChangeCouncil = (event: any) => { // This function manages the dropdown
        setCouncil(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // This function handles the form
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get("firstName")
        const lastName = data.get("lastName")
        const email = data.get("email")

        if (firstName !== null && lastName !== null && email !== null && council !== null &&
            firstName !== "" && lastName !== "" && email !== "" && council !== "") {
            setErrorMessage("")
            document.cookie = 'submitForm=true'
            document.cookie = 'firstName=' + firstName
            document.cookie = 'lastName=' + lastName
            document.cookie = 'email=' + email
            document.cookie = 'council=' + council
            navigate("/preview")
        } else {
            setErrorMessage("One or more of the fields is blank!")
        }
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mb: 8 }}>

                <ButtonGroup fullWidth aria-label="outlined button group">
                    <Button variant="contained" disableElevation>1. Provide details</Button>
                    <Button disabled>2. Send your submission</Button>
                </ButtonGroup>

                <Typography component="h1" variant="body1" sx={{mt: 2}}>
                    Use this tool to quickly generate and submit a Parliamentary
                    submission against the Water Services Entities Bill which is the basis of the Three Waters Reform Programme.
                </Typography>

                <Typography component="h1" variant="body1" sx={{mt: 2}}>
                    <Link href={"https://www.legislation.govt.nz/bill/government/2022/0136/latest/LMS534587.html?search=y_bill%40bill_2022__bc%40bcur_an%40bn%40rn_25_a&amp;p=1"}>
                        Click here to read the bill (NZ Legislation)
                    </Link>
                </Typography>

                <Typography component="h1" variant="body1" sx={{mt: 1}}>
                    <Link href={"https://www.parliament.nz/en/pb/bills-and-laws/bills-proposed-laws/document/BILL_124081/water-services-entities-bill"}>
                        About the Bill (NZ Parliament)
                    </Link>
                </Typography>

                <Grid container spacing={2} sx={{mt: 1}}>
                    <Grid item xs={12}><Typography component="h1" variant="body1" sx={{mt: 1, mb: 1}}>To get started, fill in your details.</Typography></Grid>
                    <Grid item xs={12} sm={6}><TextField defaultValue={getCookie("firstName")} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus/></Grid>
                    <Grid item xs={12} sm={6}><TextField defaultValue={getCookie("lastName")} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/></Grid>
                    <Grid item xs={12}><TextField defaultValue={getCookie("email")} required fullWidth id="email" label="Email address" name="email" autoComplete="email"/></Grid>
                    <Grid item xs={12}><TextField select label="In which council area do you live?" value={council} id={"council"} onChange={onChangeCouncil} name={"council"} fullWidth >{councilList().map((council: string) => (<MenuItem key={council} value={council}>{council}</MenuItem>))}</TextField></Grid>
                </Grid>

                {errorMessage !== "" && <Alert severity="error" sx={{mt: 2, mb: 3}}>{errorMessage}</Alert>}

                <Button type="submit" fullWidth variant="contained" disableElevation sx={{ mt: 5, mb: 7 }}>Preview your submission</Button>
            </Box>
        </Container>

    )
}

export default Form