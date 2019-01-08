import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    text: '',
    items: [],
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
    
  }

  render() {
    console.log(this.state.text);
    return (
      <div className="todoListMain">
        <div className="header">
          <form >
            <input
              placeholder="Task"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
