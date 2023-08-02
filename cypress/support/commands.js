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

Cypress.Commands.add("add_items_api", () => {
    const body = new URLSearchParams();
    body.append("newtodo", 'test-item'); 
    cy.request(
        {
            'method': 'POST',
            'url': 'http://localhost:8080/todo/add',
            'headers': {
                'Accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
            },
            body: Object.fromEntries(body),
        })
})

Cypress.Commands.add("clear_list", () => {
    cy.request(
        {
            'method': 'GET',
            'url': 'http://localhost:8080/todo/delete/0' 
        })
        .then((r) => {
            expect(r.status).to.eq(200)
        }) 
})

Cypress.Commands.add("cleanup", () =>{
    cy.wait(1000)
    cy.clear_list() 
    cy.reload() 
})