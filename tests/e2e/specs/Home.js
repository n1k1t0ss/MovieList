// https://docs.cypress.io/api/introduction/api.html

describe('All Movies tests', () => {
  it('Visit the app root and ensure movies loaded', () => {
    cy.visit('/')
    cy.contains('.movie-title', 'Waterworld');

    cy.get('.pagination-buttons > :last-child')
      .contains('277')
  })

  it('Navigating to second page should update the list', () => {
    cy.visit('/')

    cy.get('.pagination-buttons > :nth-child(2)')
      .click()

    cy.contains('.movie-title', 'Deep Waterworld')

    cy.get('.pagination-buttons:last-child')
      .contains('277');
  })

  it('Page should be selected, when navigating on it', () => {
    cy.visit('/')

    cy.get('.pagination-buttons > :nth-child(3)')
      .should('have.class', 'it-btn--outlined')
      .click()

    cy.get('.pagination-buttons > :nth-child(3)')
      .click()

    cy.get('.pagination-buttons > :nth-child(3)')
      .should('not.have.class', 'it-btn--outlined')
  })

  it('Search for "spiderman" movie', () => {
    cy.visit('/')

    cy.get('input.search-input')
      .type('spider')
      .blur()

    cy.contains('.movie-title', 'Italian Spiderman')

    cy.get('.pagination-buttons:last-child')
      .contains('2')
  })


  it('Search for non-existing movie', () => {
    cy.visit('/')

    cy.get('input.search-input')
      .type('Marvels')
      .blur()

    cy.get('.no-movies').should('not.exist')
  })

  it('Search and navigate to a next page', () => {
    cy.visit('/')

    cy.get('input.search-input')
      .type('Harry Potter')
      .blur()

    cy.contains('.movie-title', 'Harry Potter and the Deathly')

    cy.get('.pagination-buttons > :nth-child(2)')
      .click()

    cy.contains('.movie-title', 'Harry Potter and the Forbid')

    cy.get('.pagination-buttons > :nth-child(4)')
      .click()

    cy.contains('.movie-title', 'Discovering the Real World')

  })

})
