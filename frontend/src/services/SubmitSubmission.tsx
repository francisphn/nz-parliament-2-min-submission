import axios from "axios";
import {apiUrl, submissionUrl} from "./Data";
import {getCookie} from "./CookieServices";

const submitSubmission = async (submissionText: reasonType[]) => {
    let text = ""

    submissionText.map((reason) =>
        (
            text += `<p><strong>${reason.heading}</strong><br />${reason.body}</p>`
        )
    )

    const response = await axios.post(apiUrl() + '/submit', {
        "firstName": getCookie("firstName"),
        "lastName": getCookie("lastName"),
        "email": getCookie("email"),
        "submission": text,
    }).then(response => {
        return response.status
    }, error => {
        return error
    })

    return response
}

export default submitSubmission;