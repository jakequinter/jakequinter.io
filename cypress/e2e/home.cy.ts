describe('Home', () => {
  it('renders home page', () => {
    cy.visit('http://localhost:3000')

    cy.get('h1').contains('Jake Quinter');
  })
  
  it('user can open command menu', () => {
    cy.get('button').contains('⌘').click(); 

    cy.get('li').contains(/home/i);
  })
})