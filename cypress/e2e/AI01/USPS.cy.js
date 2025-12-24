

describe('USPS Website Functionality', () => {

    it('search for a package and verify the error message', () => {

        // Visit USPS homepage
        cy.visit('https://www.usps.com/');

        //add a wait time of 3 seconds

        //hover over quicktools
        cy.get('[class="qt-nav menuheader"]').realHover();
      
        cy.wait(2000);

        //click on track a package
        cy.get('[role="menuitem"]').eq(1).click();

        //capture the Url and verify it contains track
        cy.url().should('contain', 'Track');

        cy.origin('https://tools.usps.com', () => {

            //enter an invalid tracking number
            cy.get('[id="tracking-input"]').type('1234567890');

            cy.wait(2000);

            //click on track button
            cy.get('[class="col-sm-2 track-btn-ctn"]').click();

            //capture the error message and verify it contains "Tracking is not available for this item."
            cy.get('[class="banner-content"]').invoke('text').then((errorMessage) => {
                expect(errorMessage).to.contain('Tracking is not available for this item.');
                

            });//end of error message    
        
        });//end of cy.origin

    })//end of test 1    

})//end of describe suite
