import React, { Component } from 'react';
import List from '../components/List';

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
    this.setState({
      text: '',
      items: [...this.state.items, this.state.text],
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="todoListMain">
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Task"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <List listItem={this.state.items}/>
      </div>
    );
  }
}

export default TodoList;
