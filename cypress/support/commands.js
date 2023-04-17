Cypress.Commands.add('fillMandatoryFiledsAndSubmit', function(){
    cy.get('#firstName').type('Laura')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('laurasilva@mail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})