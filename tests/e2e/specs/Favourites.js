// https://docs.cypress.io/api/introduction/api.html

describe('Toggle star state', () => {
    it('Clicking on gray star should make it active', () => {
        cy.clearCookies();
        cy.visit('/')

        cy.get(':nth-child(7) > .movie-header > .button-star')
            .should('exist')
            .should('not.have.class', '--active')
            .click()
            .should('have.class', '--active')
    })

    it('Clicking on active star should make it gray', () => {
        cy.get(':nth-child(7) > .movie-header > .button-star')
            .click()
            .should('not.have.class', '--active')
    })

})


describe('Show star in tab', () => {
    it('Clicking on star should add movie to favourites', () => {
        cy.clearCookies();
        cy.visit('/')

        cy.get(':nth-child(2) > .movie-header > .button-star')
            .should('exist')
            .should('not.have.class', '--active')
            .click()
        const header1 = cy.get(':nth-child(2) > .movie-header > .movie-title')

        cy.visit('/favourites')

        cy.contains(':nth-child(1) > .movie-header > .movie-title', 'Waterworld')
            .click()
            .should('not.have.class', 'movie-contaner')

    })

    it('Clicking on star in favourites shoud remove element', () => {
        cy.contains(':nth-child(1) > .movie-header > .movie-title', 'Waterworld')
            .click()
            .should('not.have.class', 'movie-contaner')
    })

})
