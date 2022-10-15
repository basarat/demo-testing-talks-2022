import { todoPage } from "../../pagesObjects/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('No todos', () => {
  it('The main list and footer should be hidden', () => {

  });
});
