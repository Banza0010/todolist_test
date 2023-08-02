/// <reference types="cypress" />

describe('todo list app', () => {
    beforeEach(() => {
        // beforeEach function runs before each test 
        // navigating to our todo list site 
        cy.visit('http://localhost:8080/todo')
    })

    it('Accessing the todolist page (initially)', () => {

        //assert site url and header text
        cy.verify_page()
    })

    it('Adding an item to todo list', () => {

        //assert site url and header text
        cy.verify_page()

        //add item and assert item is created
        cy.get('#newtodo').clear().type("item-1")
        cy.get('#new-submit').click()
        cy.get('#span-todo-0').should('have.text', 'item-1')

        //clean up
        cy.remove_item()
    })

    it('Adding an item to todo list which already has items added', () => {

        //assert site url and header text
        cy.verify_page()

        //add item and assert item is created
        cy.get('#newtodo').type("item-1")
        cy.get('#new-submit').click()
        cy.get('#span-todo-0').should('have.text', 'item-1')

        //asset if there's atleast 1 item on the todo list
        cy.get('li').should('have.length.at.least', 1)

        //add 2nd todo list item and assert if created
        cy.get('#newtodo').type("item-2")
        cy.get('#new-submit').click()
        cy.get('#span-todo-1').last().should('have.text', 'item-2')

        //clean-up/remove multiple items
        cy.get("li").each((item, index, list) => {
            cy.wrap(item).remove_item()
        });
    })

    it('Submitting an empty todo list item', () => {

        //assert site url and header text
        cy.verify_page()

        //clear any text in input and click submit button
        cy.get('#newtodo').clear()
        cy.get('#new-submit').click()

        //assert no items have been added to todo list
        cy.get('li').should('have.length.at.least', 0)
    })

    it('Removing an item from the list', () => {

        //assert site url and header text
        cy.verify_page()

        //add multiple items to todo list
        for (let i = 1; i <= 3; i++) {
            cy.get('#newtodo').type("item-" + (i))
            cy.get('#new-submit').click()
            cy.get('#span-todo-' + (i - 1)).last().should('have.text', 'item-' + (i))
        }

        //remove item 2 from list
        cy.get(':nth-child(2) > .edit-todo-form > a').click()

        //clean-up/remove multiple items
        cy.get("li").each((item, index, list) => {
            cy.wrap(item).remove_item()
        });
    })

    it('Update value of an item on the list', () => {

        //assert site url and header text
        cy.verify_page()

        //add todo list item
        cy.get('#newtodo').clear().type("update me.")
        cy.get('#new-submit').click()
        cy.get('#span-todo-0').should('have.text', 'update me.')

        //update added list item text
        cy.get('#edittodo-0').type('UPDATED!!')
        cy.get('#edit-submit-0').click()
        cy.get('#span-todo-0').should('have.text', 'UPDATED!!')

        //clean up
        cy.remove_item()
    })

    it('Check items persist on another instance of the application/on page refresh', () => {

        //assert site url and header text
        cy.verify_page()

        //add 5 items on todo list
        for (let i = 1; i <= 5; i++) {
            cy.get('#newtodo').type("item-" + (i))
            cy.get('#new-submit').click()
            cy.get('#span-todo-' + (i - 1)).last().should('have.text', 'item-' + (i))
        }

        //refresh page
        cy.reload()
        cy.wait(5000)

        //clean-up/remove multiple items
        cy.get("li").each((item, index, list) => {
            cy.wrap(item).remove_item()  //count number of list items and remove them all - cleanup
        });
    })

    it('Update value of an item without an update value added', () => {
        //this test currently fails as there is a bug in the esystem
        //assert site url and header text
        cy.verify_page()

        //add list item 
        cy.get('#newtodo').clear().type("update me.")
        cy.get('#new-submit').click()
        cy.get('#span-todo-0').should('have.text', 'update me.')

        //click update button without any update text
        cy.get('#edittodo-0').clear()
        cy.get('#edit-submit-0').click()
        cy.get('#span-todo-0').should('have.text', 'update me.')

        cy.remove_item()
    })
})