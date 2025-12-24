


describe('Santander Bank Functionality', () => {


    it('search for a loan and verify the unsecured message', () => {

        // Visit Santander Bank homepage
        cy.visit('https://www.santanderbank.com');

        //click on chose your checking account
        cy.get('[class="col2-btn trk-btn gate-trk btn-cta"]').eq(0).click();

        cy.get('[href="/personal/checking/select-checking"]').click();

        //scroll 30% of the page
        cy.scrollTo(0, '30%');
        //cy.scrollIntoView('[style="font-size:1.75em !important;"]');

        //expand the Santander Select® World Debit Mastercard® benefits
        cy.get('[aria-controls="accordionItem4"]').eq(0).click();

        cy.wait(2000);

        //capture the infofor assistance with Santander Select® World Debit Mastercard® benefits and verify it containd the number 866-214-5084
        cy.get('[id="accordionItem4"]').eq(0).invoke('text').then((assistMessage) => {
            expect(assistMessage).to.contain('866-214-5084');
        });    
       
    });

});            

