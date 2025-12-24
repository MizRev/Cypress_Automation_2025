

describe('emblem health functionality', () => {

	

	
    it('capture blog url title', () => {

		//cy.wait(2000);
		
		//visit the UPS homepage
		cy.visit('https://www.emblemhealth.com');

		cy.wait(2000);

		//click on live well
		cy.xpath('//*[text()="Live Well"]').eq(1).click();
		
		//click on Health & Wellness Blog
		cy.xpath('//*[contains(text(),"Wellness Blog")]').eq(3).click();

		//cy.wait (3000);
		
		//click on the first Blog article
		cy.xpath('//*[@class="cmp-blog-card__item"]').eq(0).click();

		//capture the url and verify it contains blog
		cy.url().should('contain', 'blog');

		

		});//end of error message

	});//end of test


	
