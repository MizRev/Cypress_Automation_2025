


describe('TD Bank functionality', () => {

    it('verify TD complete checking info message', () => {
        
        // Visit td bank homepage
        cy.visit('https://www.td.com/us/en/personal-banking/');

        cy.wait(2000);

        //click on the side menu bar
        cy.get('[class="cmp-site-utility-mobile__section-left"]').click();

        cy.wait(2000);

        //click on checking and savings
        cy.get('[class="cmp-header-site-navigation-links__menu-item"]').eq(4).click();

        cy.wait(2000);

        //click on checking using text
        cy.get('[data-di-id="di-id-ad1060b5-d42ae47d"]').click();

        cy.wait(2000);

        //click on Get Offer button
        cy.get('[class="cmp-button"]').eq(0).click();

        //click on open account button
        cy.get('[id="button-05a3b45b13"]').click();

        //capture info message and verify it contains "you could get an additional $200 bonus." and print
         cy.get('[id="complete-acc6"]').invoke('text').then((infoMessage) => {
            expect(infoMessage).to.contain('you could get an additional $200 bonus.');
            console.log('Info Message:', infoMessage);
        });

    })//end of it block    

})//end of describe block    
