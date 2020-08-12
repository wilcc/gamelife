import React, { Component } from 'react';
import Todo from './Todo';
import Shop from './Shop'

class App extends Component {
  state = {
    list: ['test', 'how do i look', 'sdfgsdfsdsdfsdgdsg'],
    input: '',
    coin: 0,
    shop:[{name:'sword',image:'/images/icons/sword_1.png',price:30},
    {name:'sword2',image:'images/icons/sword_2.png',price:50},
    {name:'sword3',image:'/images/icons/sword_3.png',price:100}]
  };

  onDelete = (found) => {
    let newList = this.state.list.filter((item) => item !== found);
    this.setState({
      list: newList,
    });
  };
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
  handleComplete = (found) => {
    let newList = this.state.list.filter((item) => item !== found);
    let newCoin = this.state.coin + 20;
    this.setState(
      {
        list: newList,
        coin: newCoin,
      },
      () => {
        console.log(this.state.coin);
      }
    );
  };
  render() {
    return (
      <div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div>
        <Todo
          list={this.state.list}
          input={this.state.input}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
          searchTerm={this.state.searchTerm}
          onDelete={this.onDelete}
          handleComplete={this.handleComplete}
          />
        </div>
        <div>
        <Shop Shop={this.state.shop}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
