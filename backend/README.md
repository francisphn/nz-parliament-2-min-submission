# NZ Parliament Submission Scrape Engine

## About this API

The idea of this API is to allow users to generate a quick submission from a template using a frontend tool, and then this API will then scrape the actual Parliament website and input data into the submission form as in their website.

This API uses Selenium WebDriver, running on Flask and Celery.

Celery was used because some techniques (including `time.sleep()`) are used in order to bypass reCAPTCHA. Sometimes this may therefore cause request timeouts, and so Celery comes in to fix the problem.

## Getting started

The app needs to be run through Heroku which allows for threads to be run (and therefore Google Chrome).

1. Open `celery_worker.py` and change the URL link to the submission link.
2. Prepare a Heroku server by installing Chrome and ChromeDriver
3. Deploy this app to Heroku
4. Remember to turn on both Dyno workers in the Heroku settings


## How to use the API

1. Your frontend should post a JSON object to `/hello`
2. The format of this json object includes `firstName`, `lastName`, `email`, and `submission`. In this object `submission` is an HTML string, so feel free to use HTML tags like `<br>` and `<h3>` and `<bold>` to format your submission. 
3. The response will be a JSON object, whereby the property `id` is the Celery task ID.
4. You can track the progress of the Celery background task at `tasks/<task_id>`

Here's an example from my React frontend using Axios

```
await axios.post('https://threewai.herokuapp.com/hello', {
            "firstName": submitterData.firstName,
            "lastName": submitterData.lastName,
            "email": submitterData.email,
            "submission": text
        }).then(r => {
            console.log(r)
            console.log(`https://threewai.herokuapp.com/tasks/${r.data['id']}`)
        }, error => {
            setErrorFlag(true)
            setErrorMessage("An error happened.")
            console.log(error)
        })
```
