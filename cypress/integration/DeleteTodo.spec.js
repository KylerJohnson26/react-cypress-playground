

describe('Delete To-do', () => {
    it('should delete to-do on click', () => {
        const todoString = 'Learn Cypress';
        // confirm url
        cy.visit('/');
        // get AddTodo input element and add text value to it
        cy.get('input[data-testid="add-todo-input"]').type(todoString);  
        // get AddTodo button and click it
        cy.get('button[data-testid="add-todo-button"]').click();
        // get the 3rd list itmm containing the above phrase and click it
        cy.contains(todoString).click();
        // check to make sure the page no longer contains the list item
        cy.contains(todoString).should('not.exist');
    });
});