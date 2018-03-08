import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

class App extends Component {

  state = {
    todos: [
      { id: 0, description: 'Learn Node' },
      { id: 1, description: 'Learn React' },
      { id: 2, description: 'Learn Webpack' }
    ],
    newTodoDescription: ''
  };

  addTodoHandler = () => {
    const todos = [...this.state.todos];
    let todoDescription = this.state.newTodoDescription;
    console.log(todoDescription)
    const todoId = todos.length;
    const todo = {
      id: todoId,
      description: this.state.newTodoDescription
    }
    todos.push(todo);
    this.setState({ todos });
    todoDescription = '';
    this.setState({ newTodoDescription: todoDescription });
  }

  onInputChangeHandler = (event) => {
    const newTodoDescription = event.target.value;
    this.setState({ newTodoDescription });
  }

  deleteTodoHandler = (event, id) => {
    const todoIndex = this.state.todos.findIndex(t => {
      return t.id === id;
    });

    const todos = [...this.state.todos];
    todos.splice(todoIndex, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="list-group">
          <TodoList 
            todos={this.state.todos}
            deleteTodo={this.deleteTodoHandler}/>
        </ul>
        <AddTodo 
          addTodo={this.addTodoHandler}
          inputChange={this.onInputChangeHandler}
          newTodoDescription={this.state.newTodoDescription}/>
      </div>
    );
  }
}

export default App;
