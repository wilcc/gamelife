import React, { Component } from 'react';
import Todo from './Todo';
import Shop from './Shop';
import Daily from './Daily';
import axios from 'axios';
import shop from '../data/shop';
import user from '../data/user';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    coin: Number(localStorage.getItem('myCoin')) || user.coin,
    level: Number(localStorage.getItem('myLevel')) || 1,
    nextLevel: Math.floor(
      (100 *
        (Number(localStorage.getItem('myLevel'))
          ? Number(localStorage.getItem('myLevel'))
          : 1)) ^
        1.5
    ),
    exp: Number(localStorage.getItem('myExp')) || 0,
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
  setCoin = (newCoin, newExp) => {
    this.setState({
      exp: newExp,
      coin: newCoin,
    });
  };
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
      ? Swal.fire({
          title: 'Not Enough Coin!',
          text: 'go back and my more money',
          imageUrl: 'images/help-me-im-poor.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      : this.setState(
          {
            coin: newCoin,
            shop: newList,
          },
          () => {
            localStorage.setItem('myCoin', newCoin);
          }
        );
  };
  componentDidUpdate(){
    if(this.state.exp > this.state.nextLevel){
      let newLevel = this.state.level+1
      let newExp = this.state.exp-this.state.nextLevel
      localStorage.setItem('myExp',newExp)
      localStorage.setItem('myLevel',newLevel)
      this.setState({
        level:newLevel,
        exp:newExp
      })
    }
  }
  componentDidMount() {
    console.log('level',this.state.level)
    console.log('next',this.state.nextLevel)
    console.log('exp',this.state.exp);
  }

  render() {
    return (
      <div>
        <NavBar coin={this.state.coin} />
        <Profile />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: '100px',
            paddingRight: '100px',
          }}
        >
          <div style={{ border: '1px solid black' }}>
            <Todo
              setCoin={this.setCoin}
              coin={this.state.coin}
              exp={this.state.exp}
            />
          </div>
          <div style={{ border: '1px solid black' }}>
            <Daily
              setCoin={this.setCoin}
              coin={this.state.coin}
              exp={this.state.exp}
            />
          </div>
          <div style={{ border: '1px solid black' }}>
            <Shop Shop={this.state.shop} handlePurchase={this.handlePurchase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
