import EmployeePage from "../pageObject/Employee";
import employee from "../fixtures/employee.json";

import "../support/commands";
describe("Employee page", () => {
  let employeePage;
  let testdata;
  let randomString = (Math.random() + 1).toString(36).substring(7);
  before(() => {
    //  cy.fixture("employee.json").as("employeeData");
    cy.fixture("employee.json").then(function (testdata) {
      testdata = testdata;
    });
  });
  beforeEach(() => {
    cy.visit("/");
    employeePage = new EmployeePage();
    employeePage.getTypeOfAssociation().first().click();
  });

  it("Verify User can create account successfully", () => {
    employeePage.getEmailTxt().type("lan@gmail.com");
    employeePage.getLastNameTxt().type("Nguyen");
    employeePage.getFirstNameTxt().type("Lan");
    employeePage.getQuestionSelector().click();
    cy.selectQuestionOption("Other");
    employeePage.getServiceOfInterest().first().click();

    employeePage.getExplainTxt().type("explain");
    employeePage.getSubmitBtn().click();
    cy.get(".ant-alert-message").contains(
      "Your inquiry has been submitted successfully!"
    );

    //cy.get("span.ant-select-selection-item:after").click()
  });

  employee.forEach((employeeE) => {
    it(`Verify message if displays empty value ${employeeE.title}`, () => {
        
        employeePage.getEmailTxt().type(employeeE.email);
        employeePage.getSubmitBtn().click();
        cy.contains(employeeE.message);
    });
  });
  
  it("Verify message if displays empty value", () => {
    // employeePage.getEmailTxt().clear();
    employeePage.getSubmitBtn().click();
    cy.contains("'email' is required");
  });
});
