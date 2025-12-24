

//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    let keywords = []
    keywords.push('Javascript')
    keywords.push('Typescript')
    keywords.push('Cypress Testing Framework')

    it('Search for a keyword and verify the search url contains the keyword', () => {
        for (let i = 0; i < keywords.length; i++) {

        
            // Visit Brave Search homepage
            cy.visit('https://search.brave.com/')

            // type cypress testing in your search field and submit
            cy.get('[id=searchbox]').type(keywords[i] + '{enter}');

            // capture the current url and verify it contains Cypress+testing
            cy.url().should('contain', keywords[i].replace(/ /g, '+'));        
        } //end of for loop
    })//end of test 2

})//end of describe suite