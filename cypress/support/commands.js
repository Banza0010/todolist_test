// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("remove_item", () => {
    cy.get(':nth-child(1) > .edit-todo-form > a').click()
})

Cypress.Commands.add("verify_page", () => {
    cy.url().should('eq', 'http://localhost:8080/todo')  
    cy.get('h1').should("have.text", "QE todolist") 
})

Cypress.Commands.add("add_item", () => {
    cy.get('#newtodo').clear().type("item-1") 
    cy.get('#new-submit').click()                
    cy.get('#span-todo-0').should('have.text', 'item-1')
})