import React from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    return (
        <div className="input-group col-xs-8 col-xs-offset-2 mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="New To-do Description" 
                value={props.newTodoDescription}
                onChange={props.inputChange}
                data-testid="add-todo-input"
            />
            <div className="input-group-append">
                <button 
                    onClick={() => props.addTodo()}
                    className="btn btn-primary"     
                    type="button"
                    data-testid="add-todo-button">
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddTodo;