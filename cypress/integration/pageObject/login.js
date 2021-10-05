class Login {

    username(){
        return  cy.get('input[placeholder="Username"]')
    }
    password(){
        return   cy.get('input[placeholder="Password"]')
    }
    btnLogin (){
       return cy.get('input[value="Login"]')
    }
}

export default Login