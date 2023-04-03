# Feedback Loop Website w/ React and Redux

## Description

The client wanted a multi-part form that allows users to leave feedback for the day. 
There are 4 primary parts of the website, which are as follows:
<br /><br />

## Part 1: Feedback Form
The feedback form creates a carousel with four cards, each with a question found below:
- How are you feeling today?
- How well are you understanding the content?
- How well are you being supported?
- Any comments you want to leave?

Instructions are provided to the user to rate their understanding from 1 to 10, and for the final card, to provide any comments. When the 'Add' button is pressed on each card its value will be dispatched to Redux to store the value. Additionally conditional rendering will both disable the input field, and render a new button called 'Change Feedback' with the option to change the number you entered.

Once the user is complete they can press the 'Review Feedback' button which will take them to Part 2: Form Review.
<br /><br />

## Part 2: Form Review

This page displays a single card with the values for each of the four categories being dynamically generated based on the previously entered values.

The user has the option to press the 'Previous' button to take them back to Part 1, while pressing 'Submit Feedback' will post the data to the database, and take the user to Part 3: Submission Accepted
<br /><br />

## Part 3: Submission Accepted

This is the final portion of the workflow for the standard user. It is a card that thanks them for submitting their feedback, and a button that they can press to take them back to Part 1 to complete the form again if they so choose. 
<br /><br />

## Part 4: Admin Feedback Results

The final page is a Feedback Results page. The page is currently not setup for multiple user types, but this page would be accessible to an admin. It displays a table which shows the data for all surveys in the database, and allows them to delete the feedback if so desired. If the delete button is pressed the user will be prompted via alert if they are sure they would like to delete the entry.
<br /><br />

### The Following Technologies Were Used

<img src="" />## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

<br />

### Setting Up This Repo
- Create a database using the information provided in the data.sql file.
- Install npm using the command 'npm install'
- Start the server using the command 'npm run server'
- Start the client using the command 'npm run client'

<br />

### Things To Add In the Future

- Allow input validation for individual input fields.
- Add the ability to flag an existing feedback entry for further review on the /admin view.
- Add user types for a standard user and an admin.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
