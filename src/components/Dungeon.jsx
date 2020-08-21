import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Swal from 'sweetalert2';
import monster from '../data/monster';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Dungeon extends Component {
  state = {
    monster,
  };
  attackConfirmation = (monster) => {
    Swal.fire({
      Health: <ProgressBar variant="success" now={100} />,
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
    let newHp = monster.hp - damage;
    const elementsIndex = this.state.monster.findIndex(
      (element) => element.id === monster.id
    );
    let newArray = [...this.state.monster];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      hp: newHp,
    };
    this.setState({
      monster: newArray,
    });
  };
  render() {
    return (
      <div className="ui container">
        <Carousel>
          {this.state.monster.map((monster) => {
            console.log(this.state.monster);
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
