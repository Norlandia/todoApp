import React, { Component } from 'react';
import List from '../components/TodoList';

class TodoList extends Component {
  state = {
    newTodo: {
      text: '',
      isDone: false,
    },
    items: [],
  };

  handleChange = (e) => {
    this.setState({
      newTodo: {
        text: e.target.value,
        isDone: false,
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo.text !== '') {
      this.setState({
        newTodo: {
          text: '',
          isDone: false,
        },
        items: [...this.state.items, this.state.newTodo],
      });
    }
  };

  handleDelete = (index) => {
    this.setState({
      items: this.state.items.filter((item, i) => i !== index),
    });
  };

  handleDone = (index) => {
    const changedItem = {
      text: this.state.items[index].text,
      isDone: !this.state.items[index].isDone,
    };
    this.setState({
      items: this.state.items.map((item, i) =>
        i === index ? changedItem : item
      ),
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="todoListMain">
        <h1 className="title">Todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="input-field"
            placeholder="Task"
            value={this.state.newTodo.text}
            onChange={this.handleChange}
            autoFocus
          />
          <button className="add-button btn" type="submit">
            Add
          </button>
        </form>
        <List
          listItems={this.state.items}
          delete={this.handleDelete}
          markDone={this.handleDone}
        />
      </div>
    );
  }
}

export default TodoList;
