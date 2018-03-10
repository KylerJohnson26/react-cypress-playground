This is a small demo showing how Cypress (an awesome end-to-end testing frameowrk) can be used with a react project. 

To see it in action:
* Run `git clone https://github.com/kljohnson2/react-cypress-playground.git`
* Then, `cd react-cypress-playground` to move into the project directory
* Next, run `npm install` to install all of the dependencies
* Run `npm start` to start up the project on `localhost:3000`

This is a super basic to-do list. You can add a to-do to the list or you can click on a to-do to delete it.

* To open the Cypress UI, run `npm run cypress:open`
* Click on `AddTodo.spec.js` to test the add functionality.
* Click on `DeleteTodo.spec.js` to test the delete functionality.

To see the test that you just ran, open the project in your favorite text editor and navigate to
`Cypress/integrations/AddTodo.spec.js` and take a look.

Cypress is super easy to use and a breeze to set up. For more about Cypress, visit <https://www.cypress.io/>