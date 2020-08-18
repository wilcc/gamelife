import React, { Component } from 'react';
import Todo from './Todo';
import Shop from './Shop';
import Daily from './Daily'
import axios from 'axios';
import shop from '../data/shop'
import user from '../data/user'

class App extends Component {
  state = {
    coin: Number(localStorage.getItem('myCoin')) || user.coin,
    shop,
  };
  loadList = () => {
    const url = 'http://localhost:8080/todo/all';
    axios.get(url).then((dbList) => {
      this.setState({
        list: dbList.data,
      });
    });
  };
  // onDelete = (id) => {
  //   axios.delete(`http://localhost:8080/todo/remove/${id}`).then(() => {
  //     this.loadList();
  //   });
  // };
  // handleChange = (event) => {
  //   this.setState({
  //     input: event.target.value,
  //   });
  // };
  // handleKeyDown = (e) => {
  //   // e.preventDefault()
  //   if (e.key === 'Enter') {
  //     let axiosConfig = {
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     };
  //     let input = this.state.input;
  //     console.log(this.state.input);
  //     axios
  //       .post('http://localhost:8080/todo/create', { input }, [axiosConfig])
  //       .then(() => {
  //         this.loadList();
  //         this.setState({
  //           input: '',
  //         });
  //       });
  //   }
  // };
  setCoin = (newCoin) =>{
    this.setState({
      coin:newCoin
    })
  }
  // handleComplete = (id) => {
  //   axios.delete(`http://localhost:8080/todo/remove/${id}`).then(() => {
  //     this.loadList();
  //   });
  //   let newCoin = this.state.coin + 20;
  //   this.setState(
  //     {
  //       coin: newCoin,
  //     },
  //     () => {
  //       console.log(this.state.coin);
  //     }
  //   );
  // };
  handlePurchase = (item) => {
    let newCoin = this.state.coin - item.price;
    let newList = this.state.shop.filter(
      (shopItem) => shopItem.name !== item.name
    );
    newCoin < 0
      ? console.log('sorry not enough coin')
      : this.setState({ coin: newCoin, shop: newList }, () => {
    localStorage.setItem('myCoin', newCoin);
          console.log(this.state.coin);
        });
  };
  
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          <div style={{border:'1px solid black'}}>
            <h2>To Do List</h2>
            <Todo
              setCoin = {this.setCoin}
              coin={this.state.coin}
            />
          </div>
          <div style={{border:'1px solid black'}}>
            <h2>Dailies</h2>
            <Daily
              setCoin = {this.setCoin}
              coin={this.state.coin}
            />
          </div>
          <div style={{border:'1px solid black'}}>
            <h2>Shop For Your Rewards</h2>
            <Shop Shop={this.state.shop} handlePurchase={this.handlePurchase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
