

import { registrationPage } from '../POM/registration/RegistrationPage';

describe('Dribbble Registration Page Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('https://dribbble.com/');
    });


    it('should navigate to the login page when the login button is clicked', () => {
        registrationPage.clickLogin();
        cy.url().should('include', '/session/new'); // Adjust based on the actual URL
    });

    it('should navigate to the sign-up page when the sign-up button is clicked', () => {
        registrationPage.clickSignUp();
        cy.url().should('include', '/signup/new'); // Adjust based on the actual URL
    });





});
