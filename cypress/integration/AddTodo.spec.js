

describe('Add To-do', () => {
    it('should add todo to list and clear input', () => {
        // ensure starting from root url
        cy.visit('/');
        // get AddTodo input element and add text value to it
        cy.get('input[data-testid="add-todo-input"]').type('Learn Cypress');
        // get AddTodo button and click it
        cy.get('button[data-testid="add-todo-button"]').click();
        // verify the string value added to the input appears in the DOM
        cy.contains('Learn Cypress');
        // Assert that AddTodo input is cleared afterward
        cy.get('input[data-testid="add-todo-input"]').should('be.empty');
    });
});