import React, { Component } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import TodoList from '../components/TodoList';

class App extends Component {
  state = {
    text: '',
  }
  render() { 
    return (
      <div>
        <h1>Todos</h1>
        <InputField />
        <Button />
        <TodoList />
      </div>
    );
  }
}
 
export default App;
