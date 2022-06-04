import React, { Component } from 'react';

import todosData from './components/todosData';
import ToDoItem from './components/ToDoItem';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map((elem) => (
      <ToDoItem key={elem.id} fields={elem} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
