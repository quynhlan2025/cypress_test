describe("template spec", () => {
  let randomString = (Math.random() + 1).toString(36).substring(7);
  before(() => {
    cy.intercept('/api/users').as('login_api')

  });
  beforeEach(() => {    cy.visit("/");});
  
  it("Verify User can create acount successfully", () => {
    cy.get('.nav-item [href="#register"]').click();
    cy.log("Enter to Login Form");
    cy.get('input[placeholder="Username"]').type(`${randomString}`);

    cy.get('[placeholder="Email"]').type(`${randomString}@gmail.com`);
    cy.get('[placeholder="Password"]').type("12345678");
    cy.get('[type="submit"]').click();

  
    cy.wait('@login_api');
    cy.contains(`${randomString}`);

    cy.log("Step :  Click on Icon Setting ");
    cy.get('[href="#settings"]').click();

    cy.log("Step : Click on button log out");
    cy.get(".btn.btn-outline-danger").click();
  });

  it("Verify User can not login if entering wrong email or password", () => {
    cy.get('.nav-item [href="#login"]').click();
    cy.log("Step : Enter to Login Form");
    cy.get('[placeholder="Email"]').type(`${randomString}@gmail.comc.vn`);
    cy.get('[placeholder="Password"]').type("123456789124");

    cy.log("Step : Click on button Login");
    cy.get('button[type="submit"]').click();
    cy.get('[class="error-messages"] li');
    cy.wait('@login_api');
    cy.contains("email or password is invalid");
  });

  it("Verify User can login if entering correct email or password", () => {
  
    cy.get('.nav-item [href="#login"]').click();

    cy.log("Step : Enter to Login Form");
    cy.get('[placeholder="Email"]').type(`${randomString}@gmail.com`);
    cy.get('[placeholder="Password"]').type("12345678");

    cy.log("Step : Click on button Login");
    cy.get('button[type="submit"]').click();
    cy.wait('@login_api');
    cy.contains(`${randomString}`);
  });
});
