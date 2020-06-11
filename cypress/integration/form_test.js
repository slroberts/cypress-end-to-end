describe("Form - testing our form inputs", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  // Debuf|Run Test|Debug Test
  it("add text to inputs and submit form", function () {
    cy.get('[data-cy="name"]').type("Shomari").should("have.value", "Shomari");
    cy.get('[data-cy="email"]')
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
    cy.get('[data-cy="motivation"]')
      .type("I want to help")
      .should("have.value", "I want to help");
    cy.get('[data-cy="positions"]')
      .select("Yard Work")
      .should("have.value", "Yard Work");
    cy.get('[data-cy="terms"]').check().should("be.checked");
    cy.get('[data-cy="submit"]').click();
  });
});
