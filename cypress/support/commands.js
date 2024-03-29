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

Cypress.Commands.add('selectQuestionOption', (productName) => {
    cy.get(".ant-select-item-option").each(($el, index, $list) => {
   
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
});
Cypress.Commands.add('clickOnTab', (tabElements,tabName) => {
  cy.get('.merchantTitle p').each(($el, index, $list) => {
        if($el.text().toLowerCase().includes(tabName.toLowerCase())) {
            cy.log($el.text());
            cy.wrap($el).click()
        }
    });
});

Cypress.Commands.add('login', (productName) => {

    cy.get('#email').type("team@harmonypayment.com");
    cy.get('#password').type("123456");
    cy.get('.mt-3 [type="submit"]').click();
});