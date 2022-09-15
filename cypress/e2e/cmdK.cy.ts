describe('cmdK menu', () => {
  it('renders cmdK menu', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').contains('⌘')
  })

  it('can open cmdK menu with cmd+k and close with esc', () => {
    cy.get('body').type('{meta}k');
    cy.get('li').contains(/home/i);

    cy.get('body').type('{esc}');
    cy.get('li').contains(/home/i).should('not.exist');
  })

  describe('displays all menu items', () => {
    it('displays navigation', () => {
      cy.get('button').contains('⌘').click(); 
  
      cy.get('li').contains(/home/i);
      cy.get('li').contains(/about/i);
      cy.get('li').contains(/bookshelf/i);
      cy.get('li').contains(/food/i);
      cy.get('li').contains(/blog/i);

      cy.get('body').type('{esc}');
    })

    it('displays socials', () => {
      cy.get('button').contains('⌘').click(); 
  
      cy.get('li').contains(/github/i);
      cy.get('li').contains(/twitter/i);
      cy.get('li').contains(/email/i);

      cy.get('body').type('{esc}');
    })

    it('displays system', () => {
      cy.get('button').contains('⌘').click(); 
  
      cy.get('li').contains(/change theme to dark/i);

      cy.get('body').type('{esc}');
    })

    it('allows you to navigate to other pages', () => {
      cy.get('button').contains('⌘').click(); 
      cy.get('li').contains(/about/i).click();

      cy.url().should('include', '/about');

      cy.get('button').contains('⌘').click();
      cy.get('li').contains(/home/i).click();

      cy.url().should('include', '/');

      cy.get('body').type('{esc}');
    })

    it('allows you to switch themes', () => {
      cy.get('button').contains('⌘').click(); 
      cy.get('li').contains(/change theme to dark/i).click();
      
      cy.get('button').contains('⌘').click(); 
      cy.get('li').contains(/change theme to light/i).click();
    })
  })
})