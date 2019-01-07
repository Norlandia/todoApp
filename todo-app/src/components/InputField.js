import React, { Component } from 'react';
import Button from './Button';

class InputField extends Component {
  state = {
    text: '',
  };

  handleChange = (e) => {
    
    this.setState({
      text: e.target.value,
    });
    // console.log(this.state.text);
  };

  handleClick = () => {
    
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default InputField;
