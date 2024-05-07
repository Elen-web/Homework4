

import { registrationPageLocators } from './registrationPageLocators';

class RegistrationPage {
    elements = {
        logo: () => cy.get(registrationPageLocators.logo),
        searchField: () => cy.get(registrationPageLocators.searchField),
        loginButton: () => cy.get(registrationPageLocators.loginButton),
        signUpButton: () => cy.get(registrationPageLocators.signUpButton)
    };

    verifyLogoVisibility() {
        this.elements.logo().should('be.visible');
    }

    typeInSearch(query) {
        this.elements.searchField().should('be.visible').clear().type(query);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    clickSignUp() {
        this.elements.signUpButton().click();
    }
}

export const registrationPage = new RegistrationPage();
