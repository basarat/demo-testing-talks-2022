import { port, SetAllRequest } from '../../src/common/types';

class TodoPage {
  clear() {
    const request: SetAllRequest = { items: [] };
    cy.request('PUT', `http://localhost:${port}/api/set-all`, request);
  }

  visit() {
    cy.visit(`http://localhost:${port}`);
  }

  classNames = {
    newTodoInput: 'new-todo',
    selectedRoute: 'selected',
  }

  get app() {
    return cy.get('.todoapp');
  }

  get newTodoInput() {
    return cy.get('.' + this.classNames.newTodoInput);
  }

  get main() {
    return cy.get('.main');
  }

  get footer() {
    return cy.get('.footer');
  }

  get allTodos() {
    return cy
      .get('[data-test^=item-label]')
      .then($items => {
        const items: string[] = []
        $items.each((_i, item) => {
          const $item = Cypress.$(item);
          items.push($item.text());
        });
        return items;
      });
  }

  get toggleAllCheckbox() {
    return cy.get('.toggle-all');
  }

  get todoCount() {
    return cy.get('.todo-count');
  }

  get clearCompleted() {
    return cy.get('.clear-completed');
  }

  get routeAll() {
    return cy.get('[data-test=all]');
  }

  get routeActive() {
    return cy.get('[data-test=active]');
  }

  get routeCompleted() {
    return cy.get('[data-test=completed]');
  }

  addTodo(text: string) {
    this.newTodoInput.type(text).type('{enter}');
    this.newTodoInput.should('have.value', '');
  }

  itemCheckboxByIndex(index: number) {
    return cy.get(`[data-test=item-toggle-${index}`);
  }

  itemLabelByIndex(index: number) {
    return cy.get(`[data-test=item-label-${index}]`);
  }

  itemDestroyByIndex(index: number) {
    return cy.get(`[data-test=item-destroy-${index}`);
  }

  itemEditByIndex(index: number) {
    return cy.get(`[data-test=item-edit-${index}]`);
  }
}

export const todoPage = new TodoPage();