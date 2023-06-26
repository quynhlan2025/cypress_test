/// <reference types="cypress"/>

class EmployeePage {
  // ===== 1. ELEMENTs =====
  getEmailTxt() {
    return cy.get("#form_item_email", {
      timeout: 10000,
    });
  }

  getLastNameTxt() {
    return cy.get("#form_item_lastName", {
      timeout: 10000,
    });
  }
  getFirstNameTxt(){
    return cy.get("#form_item_firstName", {
      timeout: 10000,
    });
  }
  getQuestionSelector() {
    return cy.get(".ant-select-selector", {
      timeout: 10000,
    });
  }

  getOptionOfQuestion(){
    return cy.get('.ant-select-item-option', {
      timeout: 10000,
    });
  }
  getQuestionByName() {
    return cy.xpath(".ant-select-selector", {
      timeout: 10000,
    });
  }

  getServiceOfInterest(){
    return cy.get("span.ant-checkbox", {
      timeout: 10000,
    });
  }
  
  getTypeOfAssociation(){
    return cy.get(".ant-radio-input", {
      timeout: 10000,
    });
  }
  getExplainTxt() {
    return cy.get("#form_item_explanation", {
      timeout: 10000,
    });
  }

  getSubmitBtn(){
    return cy.get("#[type='submit']", {
      timeout: 10000,
    });
  }
 
  getAssociatipon() {
    return cy.get("#form_item_typeOfAssociation .ant-radio-input");
  }

  getExplain() {
    return cy.get("#form_item_explanation");
  }

  getSubmitBtn() {
    return cy.get("button.ant-btn-lg");
  }
  
  // ===== 2. METHODs ======

  // ===== 3. VERIFY =======
}

export default EmployeePage;
