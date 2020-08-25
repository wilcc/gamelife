import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Swal from 'sweetalert2';
import monster from '../data/monster';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

class Dungeon extends Component {
  state = {
    monster,
  };
  attackConfirmation = (monster) => {
    this.props.health <= 0 ? Swal.fire({
      title: 'You are dead',
      text: `A pile of bones can't do nothing, go get some item and recover you health`,
      icon: 'warning',
      imageUrl: 'images/bones.jpg'
    }) :
    monster.defeated === true ? Swal.fire({
      title: 'Monster is dead',
      text: `You can only defeat him once a day`,
      icon: 'warning',
      imageUrl: monster.image,
    }) :
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to attack this ${monster.name}, consequence is unknown`,
      icon: 'warning',
      imageUrl: monster.image,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, let's destroy it!`,
    }).then((result) => {
      if (result.value) {
        this.attackMonster(monster);
      }
    });
  };

  attackMonster = (monster) => {
    let damage = Math.floor(Math.random() * 100);
    let damageTaken = Math.floor(Math.random() * 20);
    let newHp = monster.hp - damage;
    if(newHp<=0){
      newHp = 0
    }
    let characterHp = this.props.health - damageTaken;
    if (characterHp <= 0) {
      characterHp = 0;
    }
    this.props.setHealth(characterHp);
    const elementsIndex = this.state.monster.findIndex(
      (element) => element.id === monster.id
    );
    let newArray = [...this.state.monster];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      hp: newHp,
    };

    if (newHp <= 0) {
      Swal.fire({
        title: 'Congratulation',
        text: `You have defeated ${monster.name}`,
        icon: 'success',
      });
      let newCoin = this.props.coin + monster.coinReward;
      let newExp = this.props.exp + monster.expReward;
      let monsterStatus = true
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        defeated: monsterStatus,
      };
      this.props.setCoin(newCoin, newExp);
      localStorage.setItem('myCoin', newCoin);
      localStorage.setItem('myExp', newExp);
    }
    this.setState({
      monster: newArray,
    });
    if (characterHp === 0) {
      Swal.fire({
        title: 'Oh No, you have been defeated',
        text: `Complete more tasks to level up`,
        imageUrl: 'images/dead.jpg',
      });
    }
  };
  render() {
    return (
      <div className="ui container">
        <Carousel>
          {this.state.monster.map((monster) => {
            return (
              <Carousel.Item key={monster.id}>
                <ProgressBar
                  variant="success"
                  now={(monster.hp / monster.maxHp) * 100}
                />
                ,
                <img
                  className="d-block w-100"
                  src={monster.image}
                  alt="First slide"
                  onClick={() => {
                    this.attackConfirmation(monster);
                  }}
                />
                <Carousel.Caption>
                  <h3 style={{ color: 'black' }}>{monster.name}</h3>
                  <p style={{ color: 'black' }}>{monster.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Dungeon;

Dungeon.propTypes = {
  setCoin: PropTypes.func,
  coin: PropTypes.number,
  exp: PropTypes.number,
  health: PropTypes.number,
  setHealth: PropTypes.func,
};
