/* global cy */

const interceptCompanionUrlRequest = () =>
  cy
    .intercept({ method: 'POST', url: 'http://localhost:3020/url/get' })
    .as('url')
export const interceptCompanionUrlMetaRequest = () =>
  cy
    .intercept({ method: 'POST', url: 'http://localhost:3020/url/meta' })
    .as('url-meta')

export function runRemoteUrlImageUploadTest() {
  cy.get('[data-cy="Url"]').click()
  cy.get('.FirstAttempt-Url-input').type(
    'https://raw.githubusercontent.com/transloadit/FirstAttempt/main/e2e/cypress/fixtures/images/cat.jpg',
  )
  cy.get('.FirstAttempt-Url-importButton').click()
  interceptCompanionUrlRequest()
  cy.get('.FirstAttempt-StatusBar-actionBtn--upload').click()
  cy.wait('@url').then(() => {
    cy.get('.FirstAttempt-StatusBar-statusPrimary').should('contain', 'Complete')
  })
}

export function runRemoteUnsplashUploadTest() {
  cy.get('[data-cy="Unsplash"]').click()
  cy.get('.FirstAttempt-SearchProvider-input').type('book')
  cy.intercept({
    method: 'GET',
    url: 'http://localhost:3020/search/unsplash/list?q=book',
  }).as('unsplash-list')
  cy.get('.FirstAttempt-SearchProvider-searchButton').click()
  cy.wait('@unsplash-list')
  // Test that the author link is visible
  cy.get('.FirstAttempt-ProviderBrowserItem')
    .first()
    .within(() => {
      cy.root().click()
      // We have hover states that show the author
      // but we don't have hover in e2e, so we focus after the click
      // to get the same effect. Also tests keyboard users this way.
      cy.get('input[type="checkbox"]').focus()
      cy.get('a').should('have.css', 'display', 'block')
    })
  cy.get('.FirstAttempt-c-btn-primary').click()
  cy.intercept({
    method: 'POST',
    url: 'http://localhost:3020/search/unsplash/get/*',
  }).as('unsplash-get')
  cy.get('.FirstAttempt-StatusBar-actionBtn--upload').click()
  cy.wait('@unsplash-get').then(() => {
    cy.get('.FirstAttempt-StatusBar-statusPrimary').should('contain', 'Complete')
  })
}
