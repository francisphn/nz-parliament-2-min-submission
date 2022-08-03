# 2-minute Submission Scrape Engine

## About this API

The idea of this API is to allow users to generate a quick submission from a template using a frontend tool, and then this API will then scrape the actual Parliament website and input data into the submission form as in their website.

This API uses Selenium WebDriver, running on Flask and Celery.

Celery was used because some techniques (including `time.sleep()`) are used in order to bypass reCAPTCHA. Sometimes this may therefore cause request timeouts, and so Celery comes in to fix the problem.

## Customising the API
Open up `celery_worker.py` and change the URL to a different Bill that is before Select Committee. This URL is the webpage
where there is a "I am ready to make a submission button".

Alternatively, to make things versatile, you can modify the API and pass the URL from the frontend to the backend. This means the app can be reused
among different bills.

In this case, my original intention was to supply the backend to various other groups to use to submit on the Three Waters Bill, so the submission URL is mandated.

## Running on your local machine

### Setting up Python and Selenium
1. In this directory, run `python3.6 -m pip install -r requirements.txt` to install all modules as needed.
2. Install the appropriate Chrome WebDriver for Selenium from [here](https://chromedriver.chromium.org/downloads). Place it in this directory by replacing the existing `chromedriver` file.
3. Comment out line 20 in `celery_worker.py` as it will only be needed for Heroku (obviously uncomment before you deploy).

### Setting up Redis
4. Then run `sudo apt-get install redis-server` to install the Redis server.
5. Create a new .env file with the following value: `REDIS_URL=redis://localhost`
6. Run the Redis server using `redis-server`
7. Run `app.py` by using `python app.py` or `python3 app.py` if you also have Python 2.x installed.
8. Open the browser to see the magic working!

## Deployment
The recommended way to run is to deploy via Heroku, which allows for threads to be run (and therefore Google Chrome).

1. Uncomment line 20 in `celery_worker.py`.
2. Prepare a Heroku server. Add the following buildpacks:
   1. `heroku/python` to install Python
   2. `https://github.com/heroku/heroku-buildpack-google-chrome` to install Google Chrome
   3. `https://github.com/heroku/heroku-buildpack-chromedriver` to install ChromeDriver

3. Deploy this app to Heroku 

4. Check that these Add the following environment variables in Config Vars:
   1. `CHROMEDRIVER_PATH = /app/.chromedriver/bin/chromedriver`
   2. `GOOGLE_CHROME_BIN = /app/.apt/usr/bin/google-chrome`
   3. And that there are values of `REDIS_TLS_URL` and `REDIS_URL`
   
5. Remember to turn on both Dyno workers

## Questions
Here are some good resources:
1. [Getting started with Flask](https://towardsdatascience.com/creating-restful-apis-using-flask-and-python-655bad51b24)
2. [How to make a Fask API with Selenium and deploying it to Heroku](https://kingchun1991.medium.com/how-to-make-python-flask-restful-api-with-selenium-scraping-data-and-deploy-in-heroku-d2b769d4a0a8)
3. [A minimal example of using Flask with Celery on Heroku](https://github.com/ryandaryl/heroku-python-celery)

## How to use the API

1. Your frontend should post a JSON object to `/submit`
2. The format of this json object includes `firstName`, `lastName`, `email`, and `submission`. In this object `submission` is an HTML string, so feel free to use HTML tags like `<br>` and `<h3>` and `<bold>` to format your submission. 
3. The response will be a JSON object, whereby the property `id` is the Celery task ID. 
4. You can track the progress of the Celery background task at `tasks/<task_id>`. This feature is not implemented in the React frontend.

Here's an example from the React frontend using Axios

```
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
```
