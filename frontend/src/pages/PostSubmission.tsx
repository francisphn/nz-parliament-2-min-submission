import {Box, Container, Typography} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {deleteAllCookies, getCookie} from "../services/CookieServices";

const PostSubmission = () => {

    const navigate = useNavigate()

    React.useEffect(() => {
        if (getCookie("submitSubmission") !== "true") {
            navigate("/")
        } else {
            deleteAllCookies()
        }

    }, [])

    return (
        <Container component="main" maxWidth="sm">
            {getCookie("success") === "true"?
                <Box sx={{ mb: 8, mt: 4}}>
                    <Typography variant={"h6"}>Thank you for your submission.</Typography>
                    <Typography>Your submission currently sits in our queue for the server to process.</Typography>
                    <Typography>After 5 minutes, you can expect a Parliamentary email to be sent to you.</Typography>
                </Box> :
                <Box sx={{ mb: 8, mt: 4}}>
                    <Typography variant={"h6"}>An error happened.</Typography>
                    <Typography>This is unfortunate and we're sorry.</Typography>
                    <Typography>Please try again later.</Typography>
                </Box>
            }
        </Container>
    )
}

export default PostSubmission