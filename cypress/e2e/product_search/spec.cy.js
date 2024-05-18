let data
describe('Product Search', () => {
  it('passes', () => {
    cy.fixture('phone_checkout.json').then(function(phone)
  {
    data = phone
  })
  })

  it('Successful product search', () => {
    
    cy.visit('/')
    cy.get(data.typePhone).should('be.visible').and('exist').type('phone')
    cy.get(data.click_search_button).click()
    cy.get(data.hover_over_phone).trigger('mouseover')
    cy.get(data.Click_On_cart).click({force:true})
    cy.contains('Checkout').click({force:true})



   
    
  })

})