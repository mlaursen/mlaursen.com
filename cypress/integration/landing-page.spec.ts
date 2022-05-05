const presets: readonly Cypress.ViewportPreset[] = [
  "ipad-2",
  "ipad-mini",
  "iphone-3",
  "iphone-4",
  "iphone-5",
  "iphone-6",
  "iphone-6+",
  "iphone-7",
  "iphone-8",
  "iphone-x",
  "iphone-xr",
  "iphone-se2",
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "macbook-16",
  "samsung-note9",
  "samsung-s10",
];

describe("landing page", () => {
  it("should display correctly for all the cypress presets", () => {
    cy.visit("/");
    presets.forEach((preset) => {
      cy.log(`Using preset: "${preset}"`);
      cy.viewport(preset);

      cy.findByRole("heading", { name: "Hello," }).should("be.visible");
      cy.findByText(
        /^This page is empty since I haven't really made this site yet\. You can check out my /
      ).should("be.visible");
      cy.findByText(
        /for some more information about projects I work on\.$/
      ).should("be.visible");
      cy.findByRole("link", { name: "GitHub" })
        .should("be.visible")
        .should("have.attr", "href", "https://github.com/mlaursen");
    });
  });
});
