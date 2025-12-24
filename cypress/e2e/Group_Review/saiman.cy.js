describe('Citi website functionality', () => {

    it('', () => {

        //visit huntington.com
        cy.visit('https://www.citi.com');

        cy.wait(3000);

        //click on personal loans
        cy.get('[id="lob-pos-4"]').click();

        cy.wait(4000);

        //scroll down to other needs
        cy.scrollTo('center');

        //click on other needs
        cy.contains('OTHER NEEDS').click();

        //scroll to center
        cy.scrollTo('center');

        //click on personal loans are unsecured
        cy.contains('personal loans are unsecured').click();

        cy.wait(3000);

        //capture the url and verify it contains unsecured
        cy.url().should('contain', 'unsecured');

    });
});
