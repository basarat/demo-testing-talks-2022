import { startServer } from "../../utils/server";
import * as page from "../../utils/pages/todoPage";

beforeEach(() => {
  startServer();
  page.visit();
});

describe('No todos', () => {
  it('The main list and footer should be hidden', () => {
    cy.get(page.selectors.mainList).should('not.be.visible');
    cy.get(page.selectors.footer).should('not.be.visible');
  });
});
