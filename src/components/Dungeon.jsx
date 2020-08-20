import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Swal from 'sweetalert2'

function Dungeon() {
  return (
    <div className="ui container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/monster/monster1.png"
            alt="First slide"
            onClick={()=>{

            }}
          />
          <Carousel.Caption>
            <h3 style={{color:'black'}}>Six Head Golem</h3>
            <p style={{color:'black'}}>Adorable but dangerous Golem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/monster/monster2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/monster/monster3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Dungeon;
