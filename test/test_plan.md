# Test plan for todo-list application


## Introduction

This test plan outlines the the testing processes and methodolgies for the todo-list appplication.

The todo-list application is a web based todo list type application that allows users to easily capture and create a list of todo items : 
- It has an input for users capture a list of items to the todo list
- users can add items to the todo list and view the the list of todo list items added in real time
- user will have the ability to edit/update existing list items
- users will have the abilty to remove list items off the exiting list
- the application will persist the items on the list across different insteances for a user

### Scope

#### In Scope

Features to be tested:

- Accessing the todolist application
- Adding todo list items
- Editing todo list items
- Removing todo list items
- Retaining todo list items across instances
- Cross browser functionality (chrome, brave, safari, firefox, edge)
- Backend functionality of application (API)

#### Out of Scope

Features not to be tested:

- UI design
- Browser excluded (IE, Opera)


### Quality Objective

- Ensure the Application conforms to functional and non-functional requirements
- Application meets the acceptance criteria outlined by business rules
- Application passes UAT 
- Bugs/issues are identified and fixed before go live

### Roles and Resposibilities

- Tester (QE/Analyst) - draft, complile and exceute test for the application on the test environment to ensure quality of the product and deploy tested version to the UAT environment . Write automated frontend and backend tests for the application
- Developer - deploy changes to test environments, add unit tests for extra test coverage, fix/patch bugs discovered during testing
- Product owner - to verify acceptance criteria and UAT testing before go live 


## Test Strategy

### Overview

We will be adopting an Agile testing approach for this project, as it also incorporates an incremental approach which will basically see us test out
functionality as it is been developed with the ability to deploy tested functionality for UAT while other features are still pending as to shorten the feedback cycle. This approach will  also allow us a quick feedback loop to having bugs and issues resolved while the application is being built out.

Testing will include front end end to end system tests and backend/API tests


### Suspension Criteria and Resumption Requirements

Suspension criteria 
- Test environments being down
- Blockers (e.g chnages in business rules that affect current fucntionality) 
- Unclear AC on features

Resumption criteria 
- Functional test environments
- No blockers for testing items
- clear and valid ACs for functionality

### Test Completeness

- 100% test coverage
- All Manual & Automated Test cases executed
- All open bugs are fixed or put in the backlog for fixed
- Software has passed UAT and is ready to go live



## Test Deliverables

1. Test Plan (this doc)

2. Test Cases 

[adding test cases here but it should be on a separate test cases document]

The following tests can be executed manually on the application frontend.

 >   1. Accessing the todolist page (initially)
 >   - steps: go to url "http://localhost:8080/todo" 
 >   - expected:
 >      - navigated to the todolist landing page
 >      - page tile header  = "QE todolist"
 >      - No items added onto the todo list
 >
 >   2. Accessing the todo list page when having added items 
 >   - pre-condition: Having previously added an item(s) to the todo list
 >   - steps: go to url "http://localhost:8080/todo"
 >   - expected:
 >      - navigated to the todolist landing page
 >      - page tile header  = "QE todolist"
 >      - previously added item(s) already added to the todo list
 >
 >  3. Adding an item to todo list
 >  - pre-condition: On the todolist page
 >  - steps:
 >    - input text in the "create new todo item" textbox
 >    - click "submit" button
 >  - expected:
 >    - item is added to the todo list
 >
 >   4. Adding an item to todo list which already has items added
 >   - pre-condition:
 >      - On the todolist page
>       - having already added todo list item(s) on the page 
>   - steps: input text in the "create new todo item" textbox
>   - click "submit" button
>   - expected:
>       - item is added to the todo list below the existing items on todo list
>
>   5. Submitting an empty todo list item
>   - pre-condition: On the todolist page
>   - steps: 
>       - no text in the "create new todo item" textbox
>       - click "submit" button
>   - expected:
>       - nothing is added to the todo list
>
>   6. Removing an item from the list
>   - pre-condition: items added on the todo list
>   - steps: click the "x" next to the item on the list
>   - expected: item removed from the todo list
>       
>   7. Update value of an item on the list
>    - pre-conditions: items added on the list
>    - steps:
>       - add text/numeric inputs in the update value textbox
>       - click the "update" button
>    - expcted: current item is updated to the new value text
>
>    8. Update value of an item without an update value added
>    - pre-conditions: items added on the list
>    - steps:
>       - do not add the update value textbox
>       - click the "update" button
>   - expected: current item will not updated if the value is null - value stays the same
>
>   9. Check if items persist on another instance of the application
>   - Pre-conditions: items added to a to do list
>   - steps:
>       - open todolist url on a different browser or tab 
>       - (refresh page if changes have been made on one of the todo list)
>   - expected: the todo list is displayed with all added items as on the original instance 

# [Running the automated tests using cypress]
 
- Launch the cypress UI from terminal (if this does not work initially start with installation step)
   - `yarn run cypress open` 

- if cypress is not installed with the project run this installation  step (else skip)
   -  Install cypress into your machine
   - `cd /{project path}`
   - `npm install cypress --save-dev`
   - `yarn run cypress open` - lauch cypress UI

- Cypress UI dasboard will be be lauched
- Select end-end testing option (should be configured already)
- Select browser of choice to execute tests on
- You will be navigated into the TODOLIST specs folder
- Click/lauch =todolistapp= script to run the end-2-end FE automated tests (**Pre-condition when running this script - make sure the todolist is in it's default state with no items added**)
- Click/launch  api script to run the backend/api automated test(**Pre-condition when running this script - make sure the todolist is in it's default state with no items added**)
- Test will run and update results on dashboard

- NB: **You will need to run `node app.js` on another terminal to create an instance of the todolist app**
- NB: **With every test run make sure the todolist application is in it's initial state (not items added)**


3. Bug Reports


## Resource & Environment Needs

### Testing Tools

- Requirements Tracking Tool  (JIra)
- Bug Tracking Tool (Jira bug tickets)
- Automation Tool (cypress)
- Test cases management tool (Qase) 

### Test Environment

- Dedicated test environment (STAGING URL etc)
- UAT environment setup similar to the live enviroment for accuracy 

Software
- Broswer (chrome, safari, brave)


## Terms/Acronyms 

- UAT - User Acceptance Testing
- AC - Acceptance Criteria