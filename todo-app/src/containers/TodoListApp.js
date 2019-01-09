import React, { Component } from 'react';
import List from '../components/TodoList';

class TodoList extends Component {
  state = {
    text: '',
    items: [],
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.setState({
        text: '',
        items: [...this.state.items, this.state.text],
      });
    }
  };

  handleDelete = (index) => {
    this.setState({
      items: this.state.items.filter((item, i) => i !== index),
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
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="add-button btn" type="submit">
            Add
          </button>
        </form>
        <List listItems={this.state.items} delete={this.handleDelete} />
      </div>
    );
  }
}

export default TodoList;
