import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import axios from "axios"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import {ThemeProvider} from '@mui/material/styles';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    ButtonGroup,
    LinearProgress,
    MenuItem,
    Paper,
    useTheme
} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const councilList = [
    "--",
    "Ashburton District Council",
    "Auckland Council",
    "Buller District Council",
    "Carterton District Council",
    "Central Hawke's Bay District Council",
    "Central Otago District Council",
    "Chatham Islands Council",
    "Christchurch City Council",
    "Clutha District Council",
    "Dunedin City Council",
    "Far North District Council",
    "Gisborne District Council",
    "Gore District Council",
    "Grey District Council",
    "Hamilton City Council",
    "Hastings District Council",
    "Hauraki District Council",
    "Horowhenua District Council",
    "Hurunui District Council",
    "Hutt City Council",
    "Invercargill City Council",
    "Kaikoura District Council",
    "Kaipara District Council",
    "Kapiti Coast District Council",
    "Kawerau District Council",
    "Mackenzie District Council",
    "Manawatu District Council",
    "Marlborough District Council",
    "Masterton District Council",
    "Matamata-Piako District Council",
    "Napier City Council",
    "Nelson City Council",
    "New Plymouth District Council",
    "Opotiki District Council",
    "Otorohanga District Council",
    "Palmerston North City Council",
    "Porirua City Council",
    "Queenstown-Lakes District Council",
    "Rangitikei District Council",
    "Rotorua Lakes Council",
    "Ruapehu District Council",
    "Selwyn District Council",
    "South Taranaki District Council",
    "South Waikato District Council",
    "South Wairarapa District Council",
    "Southland District Council",
    "Stratford District Council",
    "Tararua District Council",
    "Tasman District Council",
    "Taupo District Council",
    "Tauranga City Council",
    "Thames-Coromandel District Council",
    "Timaru District Council",
    "Upper Hutt City Council",
    "Waikato District Council",
    "Waimakariri District Council",
    "Waimate District Council",
    "Waipa District Council",
    "Wairoa District Council",
    "Waitaki District Council",
    "Waitomo District Council",
    "Wellington City Council",
    "Western Bay of Plenty District Council",
    "Westland District Council",
    "Whakatane District Council",
    "Whanganui District Council",
    "Whangarei District Council"
]

export default function SubmissionForm() {
    const theme = useTheme();
    const [errorFlag, setErrorFlag] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")
    const [openPreview, setOpenPreview] = React.useState(false)
    const [council, setCouncil] = React.useState("Auckland Council")
    const [otherComments, setOtherComments] = React.useState("")

    const [submitterData, setSubmitterData] = React.useState<submitter>({
        firstName: "",
        lastName: "",
        email: "",
        council: ""
    })

    const reasons = [
        {
            heading: "The water entities are bureaucratic and unaccountable",
            body: "This is arguably the most concerning aspect of the proposed bill. " +
                "Right now, as my council controls these assets, " +
                "my local ratepayers have direct control over them with the way we vote in local elections. " +
                "Under the proposed water entity model, there will be four layers of control: councils will " +
                "co-operate with iwi to appoint a regional body, which will then appoint a selection panel, " +
                "which will then appoint the entity board. " +
                "Such massive bureaucracy will be undemocratic and will not work as they will remove accountability from the decision " +
                "making process and will not therefore deliver better services to ratepayers who pay rates on these assets.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason1(true)
                } else {
                    setReason1(false)
                }

            }
        },
        {
            heading: "Ratepayers own these assets",
            body: "These assets have been paid for by generations after generations of ratepayers in my local area, and we own them. " +
                "This Bill is significant in that it is proposing to take away these local assets and centralise them into entities. " +
                "I acknowledge that the Government has confirmed local councils would still 'own' these assets, however, they have no rights to " +
                "control them - which is like saying you can own a couch but you can't use it. Furthermore, the entity board will only have 7 seats " +
                "to represent councils and a lot of councils will therefore miss out, which is a big loss of democracy for us.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason2(true)
                } else {
                    setReason2(false)
                }
            }
        },
        {
            heading: "Co-governance of water assets is unjustified",
            body: "As ratepayers, we pay for these assets via our general rates levied against our properties. It is therefore " +
                "unfair to introduce 50:50 iwi co-governance into these entity boards. Decision making should " +
                "rely on the universal suffrage of all communities and residents in my area who pay these rates. There is no reason why " +
                "iwi should have special governing rights over these assets when they do not own them.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason3(true)
                } else {
                    setReason3(false)
                }
            }
        },
        {
            heading: "The economies of scale are unrealistic",
            body: "The Government is talking about reducing costs for households, due to the economies of scale that could " +
                "be gained in centralising these assets, and reducing the need for duplicate resources, " +
                "however there are many problems. Firstly, the Government is also claiming the Three Waters Reform Programme is also " +
                "going to create more jobs, and so the claim of reducing costs does not stack up when you have to pay more employees. Secondly, " +
                "it is worth noting that water assets are very local and not as mobile as the electricity grid, so there is little gain " +
                "when centralising them. Finally, many councils have achieved the economies of scale that the Government refers to.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason4(true)
                } else {
                    setReason4(false)
                }
            }
        },
        {
            heading: "My local area will cross-subsidise other areas",
            body: "By centralising the governance, including the funding and construction decision making of these assets, " +
                "I will be forced to cross-subsidise other poor performing areas in the same entity. It is unfair that I have to make an " +
                "investment to those areas because of their councils' lack of good management, and it will result in higher rates for my local ratepayers as for myself.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason5(true)
                } else {
                    setReason5(false)
                }
            }
        },
        {
            heading: "My alternative recommendations: optional council groupings",
            body: "I recommend that the Select Committee does not support this bill due to the outlined reasons. However, I also acknowledge that our water infrastructure " +
                "problems exist and the cause of the reforms, which is the Havelock North water outbreaks. An alternative solution to " +
                "these reforms would be optional groupings, whereby local councils can group together in an optional manner to create a water company, such as" +
                " Wellington Water in order to achieve the economies of scale that we aim for, for those councils who haven't reached it. As for water infrastructure where there is " +
                "already good management, they can simply choose continue on their path.",
            onChange: (event: any) => {
                if (event.target.checked) {
                    setReason6(true)
                } else {
                    setReason6(false)
                }
            }
        },
    ]

    const [reason1, setReason1] = React.useState(true)
    const [reason2, setReason2] = React.useState(true)
    const [reason3, setReason3] = React.useState(true)
    const [reason5, setReason5] = React.useState(true)
    const [reason6, setReason6] = React.useState(true)
    const [reason4, setReason4] = React.useState(true)

    const [displayData, setDisplayData] = React.useState<Array<reasonData>>(reasons)

    const makeDisplayData = () => {
        let displayData = []
        if (reason1) {
            displayData.push(reasons[0])
        } else {
            let me = reasons[0]
            me.body = ""
            displayData.push(me)
        }
        if (reason2) {
            displayData.push(reasons[1])
        }else {
            let me = reasons[1]
            me.body = ""
            displayData.push(me)
        }
        if (reason3) {
            displayData.push(reasons[2])
        }else {
            let me = reasons[2]
            me.body = ""
            displayData.push(me)
        }
        if (reason4) {
            displayData.push(reasons[3])
        }else {
            let me = reasons[3]
            me.body = ""
            displayData.push(me)
        }
        if (reason5) {
            displayData.push(reasons[4])
        }else {
            let me = reasons[4]
            me.body = ""
            displayData.push(me)
        }
        if (reason6) {
            displayData.push(reasons[5])
        }else {
            let me = reasons[5]
            me.body = ""
            displayData.push(me)
        }
        setDisplayData(displayData)
    }

    React.useEffect(() => {
        makeDisplayData()
    }, [openPreview, reason1, reason2, reason3, reason4, reason5, reason6])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get("firstName")
        const lastName = data.get("lastName")
        const email = data.get("email")

        if (firstName !== null && lastName !== null && email !== null && council !== null &&
            firstName !== "" && lastName !== "" && email !== "" && council !== "") {
            setErrorFlag(false)
            setErrorMessage("")
            setSubmitterData({
                firstName: firstName.toString(),
                lastName: lastName.toString(),
                email: email.toString(),
                council: council
            })
            setOpenPreview(true)
            window.scrollTo(0, 0)
        } else {
            setErrorFlag(true)
            setErrorMessage("One or more of the fields is blank!")
        }
    };

    const goBack = () => {
        setOpenPreview(false)
    }

    const onChangeCouncil = (event: any) => {
        setCouncil(event.target.value)
    }

    const onChangeOtherComments = (event: any) => {
        setOtherComments(event.target.value)
    }

    const [successful, setSuccessful] = React.useState(false)

    const onChangeAgree = (event: any) => {
        if (event.target.checked) {
            setErrorFlag(false)
            setErrorMessage("")
        } else {
            setErrorFlag(true)
            setErrorMessage("You need to agree to the Covid-19 Protection Framework and Privacy Statements.")
        }
    }

    const [loading, setLoading] = React.useState(false)

    const makeFinalData = async () => {
        setLoading(true)
        let text = ""

        text += `<p><strong>About this submission</strong><br />As a ratepayer of ${submitterData.council}, I am submitting against the Water Services Entities Bill.</p>`

        if (reason1) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[0].body}</p>`
        }
        if (reason2) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[1].body}</p>`
        }
        if (reason3) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[2].body}</p>`
        }
        if (reason4) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[3].body}</p>`
        }
        if (reason5) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[4].body}</p>`
        }
        if (reason6) {
            text += `<p><strong>${displayData[0].heading}</strong><br />${displayData[5].body}</p>`
        }
        if (otherComments !== "") {
            text += `<p><strong>Additional comments</strong><br />${otherComments}</p>`
        }

        await axios.post('https://threewai.herokuapp.com/hello', {
            "firstName": submitterData.firstName,
            "lastName": submitterData.lastName,
            "email": submitterData.email,
            "submission": text
        }).then(r => {
            console.log(r)
            console.log(`https://threewai.herokuapp.com/tasks/${r.data['id']}`)
            setLoading(false)
            setSuccessful(true)
        }, error => {
            setErrorFlag(true)
            setErrorMessage("An error happened.")
            setLoading(false)
            console.log(error)
        })

    }

    return (
        <ThemeProvider theme={theme}>



            <Alert severity="success" sx={{m:1}}>Please donate to support our campaign against Three Waters! <Link href={"/donate"}>Donate now</Link></Alert>
            <Container component="main" maxWidth="sm">
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'left'}}>

                    <Typography component="h1" variant="h4" sx={{mb:1}}><strong>Save Our Water Beta</strong></Typography>
                    <Typography variant="h5" >Three Waters Express Submission</Typography>
                    <Typography variant={"h6"} sx={{mb: 3}}>By Lobby New Zealand</Typography>

                    {!openPreview && !successful &&
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mb: 8 }}>

                            {errorFlag && <Alert severity="error" sx={{mt: 2, mb: 3}}>{errorMessage}</Alert>}

                            <ButtonGroup fullWidth aria-label="outlined button group">
                                <Button variant="contained" disableElevation>1. Provide details</Button>
                                <Button disabled>2. Send your submission</Button>
                            </ButtonGroup>

                            <Typography component="h1" variant="body1" sx={{mt: 2}}>
                                Use this tool to quickly generate and submit a Parliamentary
                                submission against the Water Services Entities Bill which is the basis of the Three Waters Reform Programme. <Link href={"/faq"}>How does this tool work?</Link>
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
                                <Grid item xs={12} sm={6}>
                                    <TextField defaultValue={submitterData.firstName} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus/>

                                </Grid>
                                <Grid item xs={12} sm={6}><TextField defaultValue={submitterData.lastName} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/></Grid>
                                <Grid item xs={12}><TextField defaultValue={submitterData.email} required fullWidth id="email" label="Email address" name="email" autoComplete="email"/></Grid>
                                <Grid item xs={12}><TextField select label="In which council area do you live?" value={council} id={"council"} onChange={onChangeCouncil} name={"council"} fullWidth >{councilList.map((council) => (<MenuItem key={council} value={council}>{council}</MenuItem>))}</TextField></Grid>
                            </Grid>

                            {errorFlag && <Alert severity="error" sx={{mt: 2, mb: 3}}>{errorMessage}</Alert>}
                            <Button type="submit" fullWidth variant="contained" disableElevation sx={{ mt: 5, mb: 7 }}>Preview your submission</Button>
                        </Box>
                    }
                </Box>
            </Container>


            <Container component="main" maxWidth="sm">

                {openPreview && !successful && <>
                    {errorFlag && <Alert severity="error" sx={{mt: 2, mb: 3}}>{errorMessage}</Alert>}

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 30}}>

                        <ButtonGroup fullWidth aria-label="outlined button group" sx={{mb: 3}}>
                            <Button variant="outlined" onClick={goBack}>1. Provide details</Button>
                            <Button variant="contained" disableElevation>2. Send your submission</Button>
                        </ButtonGroup>

                        <Typography variant={"h5"}>Your submission is ready!</Typography>

                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Typography component="h1" variant="body1" sx={{mt: 2}}>
                                    Preview your submission below. You can make further changes by selecting the reasons you would like to include in your submission.
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper elevation={5} sx={{mt: 2}}>
                                    <Grid sx={{padding: 3}} >

                                        <Typography variant={"h5"} sx={{mb: 2}}>
                                            Submission of {submitterData.firstName} {submitterData.lastName} on the Water Services Entities Bill
                                        </Typography>

                                        <Typography variant={"h6"}><strong>
                                            About this submission
                                        </strong></Typography>

                                        <Typography variant={"body1"}>
                                            As a ratepayer of {submitterData.council}, I am submitting against the Water Services Entities Bill.
                                        </Typography>

                                        {displayData.map((data) =>
                                            (
                                                <><Typography variant={"h6"} sx={{mt: 4}}><strong>{data.heading}</strong></Typography>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} onChange={data.onChange} label={"Include this section"} />
                                                    <Typography variant={"body1"}>{data.body}</Typography>
                                                </>

                                            ))
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

                        <Typography variant={"body1"}>{submitterData.firstName} {submitterData.lastName}, {submitterData.email} <br/> <Link onClick={goBack}>Not correct?</Link></Typography>

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

                        {errorFlag && <Alert severity="error" sx={{mt: 2}}>{errorMessage}</Alert>}

                        {!errorFlag && !loading && <Button fullWidth variant="contained" disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />} onClick={makeFinalData}>Complete your submission</Button>}

                        {!errorFlag && loading && <Button fullWidth variant="contained" disabled disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />}>Sending your submission</Button>}

                        {loading &&
                            <>
                                <Typography variant={"body1"} sx={{mt: 2, mb: 2}}>
                                    Your data is being sent to Parliament's website.
                                </Typography>

                                <LinearProgress />
                            </>
                        }

                        {errorFlag && <Button fullWidth variant="contained" disabled disableElevation sx={{ mt: 6, mb: 2 }} endIcon={<SendIcon />}>Complete your submission</Button>}


                    </Box></>}

                {successful && <>

                        {errorFlag && <Alert severity="error" sx={{mt: 2}}>{errorMessage}</Alert>}

                        <Box sx={{marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 30}}>

                            <Typography variant={"h5"}>You've submitted against Three Waters!</Typography>
                            <Typography variant={"body1"} sx={{mt:1}}>Thank you so much for having taken part in protecting local democracy.
                            We hope you found our tool helpful.</Typography>

                            <Typography variant={"body1"} sx={{mt:1, mb: 5}}>Important (beta notice): A confirmation email from Parliament will be sent to you in 5 minutes.
                                Should you not find that email (and this is unlikely), this tool may not have worked properly.<br/><br/>
                                <br/><br/>Feel free to retry if it doesn't work, or submit directly.</Typography>

                            <Accordion expanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography component="h1" variant="body1">
                                        Consider donating to help our Three Waters campaign</Typography>
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

                        </Box></>
                }
            </Container>
        </ThemeProvider>
    );
}