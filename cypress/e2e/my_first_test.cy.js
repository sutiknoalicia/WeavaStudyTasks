/// <reference types="cypress" />


it("google test", () => {

    cy.visit("https://google.com")
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    cy.get('[style="display:inline-block;line-height:18px;margin-top:8px;padding:0;font-size:13px"]').click()
    //cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
    cy.contains('Videos').click() // find element based on its text
})

it.only('login test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > li').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
})