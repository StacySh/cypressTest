import Login from '../pageObject/login'


describe('Test Of Pecode Soft Ware', () => {

    const login = new Login()

    it('Assert Test', () => {
        cy.visit(Cypress.env('url'))
       
        login.username()
            .type(Cypress.env('username'))
            .should('be.visible')

       login.password()
            .type(Cypress.env('password'))
            .should('be.visible')

       login.btnLogin()
            .click()
            .should('be.visible')
            .end()

        cy.contains('No account found with that username.')
            .should('be.visible')
            
    })

})
