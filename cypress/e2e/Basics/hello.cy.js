// / <reference types="cypress-xpath" />

describe('first test', ()=>{

    it('hello cypress',()=>{
        cy.visit("https://code.visualstudio.com/")
        cy.wait(5000)
        cy.get('#nav-extend').click()
        cy.wait(5000)
        cy.get('#connect-twitter-link > a').click()
        cy.wait(5000)
        cy.get('#navbar-brand').click()
        cy.wait(5000)
        cy.get('#download-dropdown').click()
    })
})