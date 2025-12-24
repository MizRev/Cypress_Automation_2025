


describe('USPS Website Functionality', () => {

    it('search for a package and verify the error message', () => {

        // Visit USPS homepage
        cy.visit('https://www.usps.com/');

        //add a wait time of 3 seconds
        cy.wait(2000);

        //hover over quicktools
        cy.get('[class="qt-nav menuheader"]').realHover();
      
        cy.wait(2000);

        //click on track a package
        cy.get('[role="menuitem"]').eq(1).click();

         cy.wait(3000);

        //capture the Url and verify it contains track
        cy.url().should('contain', 'Track');

        //store the current url to use in test 2
        cy.url().then((url) => {
            currentUrl = url
        });

         //enter an invalid tracking number
        cy.get('[class="form-control"]').type('1234567890');

        cy.wait(2000);

        //click on track button
        cy.get('[class="col-sm-2 track-btn-ctn"]').click();

        //capture the error message and verify it contains "Tracking is not available for this item."
        cy.get('[class="banner-content"]').invoke('text').then((errorMessage) => {
                expect(errorMessage).to.contain('Tracking is not available for this item.');

        
        });

    })//end of test 2    

})//end of describe suite

