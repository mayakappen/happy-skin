
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('App', () => {
  it('should visit the home page', () => {
  })
  it('Should have a navbar', () => {
    cy.get('Nav').find('h1').contains('Happy-Skin')
  })
  // it('Should fetch all products', () => {
  //   cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json').as('products')
  //   cy.wait('@products')
  //   expect('products.length' > 100)
  // })
  it('Should filter by tag', () => {
    cy.get('span')
      .find('a[id="Hypoallergenic"]')
      .click({force: true})
      .get('h2')
        .should('contain', 'Multi Purpose Powder - Blush & Eye')
  })
  it('Should be able to clear out tag selection', () => {
    cy.get('.filters')
      .find('nav')
      .click()
      .get('h4')
        .should('contain', '')
  })
  it('Should have display correct categories when navbar clicked', () => {
    cy.get('nav')
    .get('a[id="Foundation"]')
    .click()
    .get('a[id="1045"]')
    .children('div')
  })
  it('Should display filterd versions of categories based on selected tags', () => {
    cy.get('span').find('a[id="purpicks"]')
      .click()
      .get('a[id="1039"]')
      .should('contain', 'Realist Invisible Setting Powder')
  })

})

