import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {
  state = { list: [], input: '', coin: 0 };

  
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let newTodo = [this.state.input, ...this.state.list];
      this.setState({
        list: newTodo,
        input: '',
      });
    }
  };
  
  render() {
    return (
      <div>
        <Todo
          list={this.state.list}
          input={this.state.input}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
          searchTerm={this.state.searchTerm}


        />
      </div>
    );
  }
}

export default App;
