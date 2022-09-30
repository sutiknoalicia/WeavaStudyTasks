it("google test", () => {
  cy.visit("https://google.com");
  cy.get('[name="q"]').type("Automation Step by Step").type("{enter}");
});
