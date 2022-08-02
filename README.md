# New Zealand Parliament 2-minute Submission Tool

## The idea behind this tool

TLDR: In short, this comprehensive tool allows your user to submit a submission on a Bill that is currently before Select Committee by using a pre-written text template that you have written. All they have to do is to pop down their name and contact details, and then click submit all on your website. The entire process is less than 2 minutes.

In New Zealand, we pride ourselves in having an engaging democracy. However, Parliament does not make their API public, which is lacking behind compared to other Parliaments.

Think about this scenario. A Bill is going through Parliament, and it's currently at the Committee stage. You're very passionate about this Bill and submissions from the public are being accepted. So you've put your submission in, but then you also want to run a social media (or physical) campaign to encourage people to put their submissions in, too.

However, unlike signing a petition, a good submission takes *ages* to write. So you want to provide a model text for them to copy and paste, and they can then go to the Parliament website to start their submission.

The problem is, most people on social media these days would probably be using it on the phone, and it is not practical and takes a long time for them to copy and paste and switch between apps. Furthermore, the Parliament website is not optimised for mobile users.

**This is where this tool comes in.** It's a comprehensive tool that allows them to add their contact information, and then preview the text of the submission (that you have written beforehand), and then click submit! The entire process takes less than two minutes and is a great way to get as many submissions as possible for the bill.

## How it works

The frontend, which is written in React, handles the user interface and the user experience. 

Because Parliament does not provide an API (and they use Google Captcha), for such a tool to work, we need to scrape the Parliament website at the backend. The backend is therefore written in Flask in order to utilise Selenium WebDriver.

## Deployment

The most straightforward way to deploy this tool is to use Netlify or Firebase Hosting to host your React frontend, and Heroku to host the backend.

Why Heroku? The great thing about Heroku is that, unlike Google App Engine, it allows processes. So you can run an entire Chrome browser in there, and in turn, Selenium WebDriver.

## Author

I developed this tool as part of my contract with Lobby New Zealand, a think tank. They wanted to mobilise their members and supporters to submit against the Water Services Entities Bill (also known as Three Waters) and they needed a tool that could help them do this.

Some other think tanks, local councils and political parties also have the same idea as this one, however, unlike our backend which scrapes the Parliamentary website, they used email campaign software to send the submissions to the Select Committee's inbox. The drawback of this is that emailing isn't an official way to submit. They may get rejected, especially if you're submitting against a Bill, and the Select Committee is biased towards supporting the Bill. This scenario did happen and the other think tanks were made to print out all of their submissions and deliver them to Parliament.

Because of the fantastic tool, I offered to buy back my code from Lobby New Zealand, and they accepted. So here it is on GitHub.
