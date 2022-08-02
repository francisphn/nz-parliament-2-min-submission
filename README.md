# New Zealand Parliament 2-minute Submission Tool

## The idea behind this tool

In short, this comprehensive tool allows your user to submit a submission on a Bill that is currently before Select Committee by using a pre-written text template that you have written. All they have to do is to pop down their name and contact details, and then click submit all on your website. The entire process is less than 2 minutes.

## How it works

The frontend, which is written in React, handles the user interface and the user experience. 

Because Parliament does not provide an API (and they use Google Captcha), for such a tool to work, we need to scrape the Parliament website at the backend. The backend is therefore written in Flask in order to utilise Selenium WebDriver.

## Getting Started

You're recommended to make changes from the frontend first, then the backend. More information on getting started for the frontend is found in the `README.md` file in `/frontend` and similarly for the backend.

## Deployment

The most straightforward way to deploy this tool is to use Netlify or Firebase Hosting to host your React frontend, and Heroku to host the backend.

Heroku is great because it can run threads. More information on deployment for the frontend is found in the `README.md` file in `/frontend` and similarly for the backend.