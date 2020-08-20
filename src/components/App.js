import React, { Component } from 'react';
import Todo from './Todo';
import Shop from './Shop';
import Daily from './Daily';
import shop from '../data/shop';
import user from '../data/user';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import Profile from './Profile';
import Item from './Item';
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
    levelPercent:
      (Number(localStorage.getItem('myExp')) /
        Math.floor(
          (100 *
            (Number(localStorage.getItem('myLevel'))
              ? Number(localStorage.getItem('myLevel'))
              : 1)) ^
            1.5
        )) *
      100,
    toggle: 'item',
  };

  setCoin = (newCoin, newExp) => {
    let newLevelPercent = Math.floor((newExp / this.state.nextLevel) * 100);
    this.setState({
      exp: newExp,
      coin: newCoin,
      levelPercent: newLevelPercent,
    });
  };
  setItem = (state)=>{
    let newState = state
    this.setState({
      toggle:newState
    })
  }

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
  componentDidUpdate() {
    if (this.state.exp > this.state.nextLevel) {
      let newLevel = this.state.level + 1;
      let newExp = this.state.exp - this.state.nextLevel;
      let newLevelPercent = newExp / this.state.nextLevel;
      let newNextLevel = Math.floor((100 * newLevel) ^ 1.5);
      localStorage.setItem('myExp', newExp);
      localStorage.setItem('myLevel', newLevel);
      this.setState({
        level: newLevel,
        exp: newExp,
        nextLevel: newNextLevel,
        levelPercent: newLevelPercent,
      });
      Swal.fire({
        title: 'Level Up!',
        text: `Congratulations on reaching level ${newLevel}, now go back and work harder`,
        imageUrl: 'images/level-up.png',
        imageAlt: 'Custom image',
      });
    }
  }
  componentDidMount() {
    // localStorage.clear('myLevel')
  }

  render() {
    return (
      <div>
        <NavBar coin={this.state.coin} setItem={this.setItem}/>
        <Profile percent={this.state.levelPercent} level={this.state.level} />
        {this.state.toggle === 'item' ? (
          <Item Shop={this.state.shop} handlePurchase={this.handlePurchase} />
        ) : this.state.toggle === 'task' ?(
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
            <div style={{ width: '20%', border: '1px solid black' }}>
              <Shop
                Shop={this.state.shop}
                handlePurchase={this.handlePurchase}
              />
            </div>
          </div>
        ): <div>test</div>}
      </div>
    );
  }
}

export default App;
