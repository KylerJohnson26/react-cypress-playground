import React from 'react';
import './TodoList.css';

import Todo from './Todo/Todo';

const TodoList = (props) => {
    return props
        .todos
        .map((todo, index) => {
            return <Todo
                description={todo.description}
                key={todo.id}
                onDeleteTodo={(event) => props.deleteTodo(event, todo.id)}/>
        });
}

export default TodoList;