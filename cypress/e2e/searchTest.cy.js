

import { searchPage } from '../POM/search/SearchPage';



describe('Search Functionality on Dribbble', () => {
    beforeEach(() => {
        cy.visit('https://dribbble.com/search');
    });

    it('should allow users to type "design" in the search field, submit the search, and verify links', () => {
        const searchTerm = "design";
        searchPage.typeInSearch(searchTerm);
        searchPage.submitSearch();

        cy.url().should('include', `${encodeURIComponent(searchTerm)}`);

        // Verify that specific links appear on the results page
        searchPage.elements.brandingLink().should('be.visible');
        searchPage.elements.uxLink().should('be.visible');
    });
});