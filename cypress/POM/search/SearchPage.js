

import { searchPageLocators } from './searchPageLocators';

class SearchPage {
    elements = {
        searchInput: () => cy.get(searchPageLocators.searchInput),
        brandingLink: () => cy.get(searchPageLocators.brandingLink),
        uxLink: () => cy.get(searchPageLocators.uxLink)
    };

    typeInSearch(query) {
        this.elements.searchInput().should('be.visible').clear().type(query);
    }

    submitSearch() {
        this.elements.searchInput().type('{enter}');
    }
}

export const searchPage = new SearchPage();
