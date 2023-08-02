//Backend tests for todolist application
//these test test basic functionality using the backend-api 
//They incorporate a bit of checking on the front-end (resulting HTML) not necessarily the UI
//These test can be used for very basic functionality (post-and-getting) only with minor modifications

/// <reference types="cypress" />

describe("API Tests", () => {
    beforeEach(() => {
        // beforeEach function runs before each test 
        // navigating to our todo list site 
        cy.visit('http://localhost:8080/todo')
    })

    //testing the connecvtion to the site 

    it('test connection to site', () => {
        cy.request("GET", "http://localhost:8080/todo", {
        }).then((r) => {
            expect(r.status).to.eq(200)
        })
    })

    //Test adding an item to todolist

    it('Add item to todolist', () => {
        //add item via post call
        const body = new URLSearchParams();
        body.append("newtodo", 'test-add');  // add item to list
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
            .then((r) => {
                expect(r.status).to.eq(200)
            }) ;
        //check if todo list item was added
        cy.reload()
        cy.get('li').contains('test-add').should('have.length', 1)

        //reset application state
        cy.cleanup()

    })

    //Delete an item off the todo list
    it("Delete item on todolist", () => {

        //adding 2 items to list
        for (let i = 1; i <= 2; i++) {
            cy.add_items_api()  
            cy.reload()   
        }       

        //delete 1st item on the list
        cy.request(
            {
                'method': 'GET',
                'url': 'http://localhost:8080/todo/delete/0'  //deleting the 1st item on the list
            })
            .then((r) => {
                expect(r.status).to.eq(200)
            }) 

        cy.reload()   

        //reset application state
        cy.cleanup()
    })

    //update an existing item o the todolist

    it("Update an existing item on todolist", () => {

        //add an item to the list
        cy.add_items_api() 
        cy.reload()    

        //update added item value
        const body = new URLSearchParams();
        body.append("edittodo", 'updated-item');   
        cy.request(
            {
                'method': 'POST',
                'url': 'http://localhost:8080/todo/edit/0',
                'headers': {
                    'Accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded',
                },
                body: Object.fromEntries(body),
            })
            .then((r) => {
                expect(r.status).to.eq(200)
            }) 
        //check item is updated to our update text
        cy.reload()   
        cy.get('li').contains('updated-item').should('have.length', 1)

        //reset application state
        cy.cleanup()
    })
})
