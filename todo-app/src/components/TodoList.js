import React, { Component } from 'react';
import Todo from './Todo';
import Button from './Button';

class TodoList extends Component {
  state = {
    todos: [
      {
        name: 'Cook',
        isDone: false,
      },
      {
        name: 'Run',
        isDone: true,
      }
    ],
  };
  render() {
    return (
      <div>
        <ul>
          <Todo />
          <Button />
        </ul>
      </div>
    );
  }
}

export default TodoList;
