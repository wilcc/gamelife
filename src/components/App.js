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
import Dungeon from './Dungeon';
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
    health: 100,
    maxHealth: 100,
    mana: 100,
    class: localStorage.getItem('myClass') || 'Rookie',
    classImage:localStorage.getItem('myClassImage') || '',
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
    toggle: 'task',
  };

  setCoin = (newCoin, newExp) => {
    let newLevelPercent = Math.floor((newExp / this.state.nextLevel) * 100);
    this.setState({
      exp: newExp,
      coin: newCoin,
      levelPercent: newLevelPercent,
    });
  };
  setItem = (state) => {
    let newState = state;
    this.setState({
      toggle: newState,
    });
  };
  setHealth = (newHealth) => {
    this.setState({
      health: newHealth,
    });
  };
  handlePurchase = (item) => {
    let newCoin = this.state.coin - item.price;
    if(item.category==='potion'){
      let newHp = this.state.health + item.price
      if(newHp > this.state.maxHealth  ){newHp = this.state.maxHealth}
      this.setHealth(newHp)
    }
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
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/firework.gif")
      `
      });
    }

    if(this.state.level >= 5 && this.state.class === 'Rookie'){
      Swal.fire({
        title: 'Pick your class',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Warrior',
        cancelButtonText: 'Mage'
      }).then((result) => {
        if (result.value) {
          let newClass = 'Warrior'
          this.setState({
            class:newClass,
            classImage: 'images/icons/sword.png'
          })
          localStorage.setItem('myClass', 'Warrior')
          localStorage.setItem('myClassImage', 'images/icons/sword.png')
          Swal.fire({
            title:'Welcome Warrior',
            imageUrl: 'images/icons/sword.png'
          }
          )
        }else{
          let newClass = 'Mage'
          this.setState({
            class:newClass,
            classImage: 'images/icons/mage.png'
          })
          localStorage.setItem('myClass', 'Mage')
          localStorage.setItem('myClassImage', 'images/icons/mage.png')
          Swal.fire({
            title:'Welcome Mage',
            imageUrl: 'images/icons/mage.png'
          }
          )
        }
      })
    }
    
  }
  componentDidMount() {
    // localStorage.clear('myLevel')
  }

  render() {
    return (
      <div>
        <NavBar coin={this.state.coin} setItem={this.setItem} />
        <Profile
          percent={this.state.levelPercent}
          level={this.state.level}
          health={(this.state.health / this.state.maxHealth) * 100}
          class = {this.state.class}
          classImage = {this.state.classImage}
        />
        {this.state.toggle === 'item' ? (
          <Item Shop={this.state.shop} handlePurchase={this.handlePurchase} />
        ) : this.state.toggle === 'task' ? (
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
        ) : this.state.toggle === 'dungeon' ? (
          <div>
            {' '}
            <Dungeon
              setCoin={this.setCoin}
              coin={this.state.coin}
              exp={this.state.exp}
              health={this.state.health}
              setHealth={this.setHealth}
            />
          </div>
        ) : (
          <div>test</div>
        )}
      </div>
    );
  }
}

export default App;
