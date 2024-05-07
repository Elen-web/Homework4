import { signupPage } from '../POM/signup/SignupPage';

describe('Dribbble Signup Test with Multiple Users', () => {
    beforeEach(() => {
       
        cy.fixture('signup').as('users');
        signupPage.navigateToSignup();
        cy.wait(500); 
    });

    it('should sign up multiple users', function() {
        cy.get('@users').then((users) => {
            console.log(users); 
            if (Array.isArray(users)) {
                users.forEach(user => {
                    signupPage.fillSignupForm(user.name, user.username, user.email, user.password);
                    signupPage.agreeToTermsAndSignup();
    
                    cy.url().should('include', '/dashboard');
                    cy.get('.profile-name').should('contain', user.name);
    
                    cy.visit('https://dribbble.com/logout');
                    cy.wait(500);
                    signupPage.navigateToSignup();
                });
            } else {
                throw new Error('Fixture data is not an array');
            }
        });
    });
    
});