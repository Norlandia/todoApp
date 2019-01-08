import React, { Component } from 'react';
import TodoList from '../components/TodoList';

class App extends Component {
  state = {
    currentItem: {
      text: '',
      key: '',
    }
  }

  addItem = () => {
    console.log('HElLO ADDITEM');
    
  }

  handleInput = (e) => {
    console.log('HELLO HADNLEITEM');
    
  }

  render() { 
    return (
      <div className="app">
        <TodoList addItem={this.addItem} />
      </div>
    );
  }
}
 
export default App;
