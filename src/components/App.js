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
    {name:'sword3',image:'/images/icons/sword_3.png',price:100},
    {name:'Armor',image:'/images/icons/Armor_1.png',price:20},
    {name:'Armor2',image:'/images/icons/Armor_2.png',price:40},
    {name:'Armor3',image:'/images/icons/Armor_3.png',price:60},
    {name:'Armor4',image:'/images/icons/Armor_4.png',price:80},
    {name:'Armor5',image:'/images/icons/Armor_5.png',price:100},
    {name:'Armor6',image:'/images/icons/Armor_7.png',price:120},
    {name:'Armor7',image:'/images/icons/Armor_8.png',price:140},
    {name:'Armor8',image:'/images/icons/Armor_10.png',price:200},
  ]
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
