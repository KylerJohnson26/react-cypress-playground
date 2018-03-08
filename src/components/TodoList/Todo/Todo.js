import React from 'react';

import classes from './Todo.css';

const Todo = (props) => {

    return (
        <li 
            className="list-group-item"
            onClick={props.onDeleteTodo}>
            {props.description}
        </li>
    )
}

export default Todo;
