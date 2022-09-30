it("learning assertions", () => {
  cy.visit("https://example.cypress.io/");
  cy.contains("get").click();

  //implicit assertions
  cy.get("#query-btn")
    .should("contain", "Button") // should-contain assertion
    .should("have.class", "query-btn") // should-have assertion
    .should("be.visible") // should-be assertion
    .should("be.enabled");
  //.should("be.empty");
  cy.get("#query-btn").invoke("attr", "id").should("equal", "query-btn"); // should-equal assertion
  cy.get("#query-btn") // chained assertion
    .should("contain", "Button")
    .and("have.class", "query-btn");

  //explicit assertions
  expect(true).to.be.true; //expect
  let name = "Alicia";
  expect(name).to.be.equal("Alicia"); // also expect

  assert.equal(4, 4, "Not Equal"); // assert
  assert.strictEqual(4, 4, "Not Strictly Equal");
});
