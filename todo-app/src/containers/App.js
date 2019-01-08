import React, { Component } from 'react';
import TodoList from '../components/TodoList';

class App extends Component {
  state = {
    text: '',
  }

  addItem = () => {
    
  }

  render() { 
    return (
      <div className="app">
        <TodoList addItem={this.addItem}/>
      </div>
    );
  }
}
 
export default App;
