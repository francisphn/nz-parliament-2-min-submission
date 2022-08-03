# The Frontend

## Understanding the frontend
The best way to understand all the code in here is just to run it first. In this project directory, run `npm install` then `npm start` and play around with it. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It starts with the component `<Form>`, with the user providing their contact information as well as their local government council.

`<Preview>` is where the user can preview the submission that you have pre-written for them. This is also where they can preview their contact details as well as agree with the relevant policies of Parliament before the submission is sent.

`<PostSubmission>` is the final page that will show depending on whether the submission was successfully passed on to the backend.


## Customising the frontend
In `services/Data.tsx` is a collection of data, including the council list, the submission text for you to pre-write, as well as the URL to the API. Change these as necessary. You can change the council dropdown feature to a similar concept, such as regions.
After you're done with customisation, run `npm run build` to build a production version of this frontend. This will create a directory, `build` which you could start using.

## The user interface
This frontend uses components from [MUI](https://mui.com/material-ui/getting-started/overview/). Have a look at the documentation to get started on using the relevant components.

Make further changes as necessary.

## React
This frontend was created using Create React App. You can learn more about Create React App via the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
