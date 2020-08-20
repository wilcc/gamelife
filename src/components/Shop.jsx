import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Shop(props) {
  return (
    <div
      className="ui container"
      style={{
        width: '100%',
      }}
    >
      <h2>Shop For Your Rewards</h2>
      <div>
        <Tabs defaultActiveKey="armor" id="uncontrolled-tab-example">
          <Tab eventKey="weapon" title="Weapon">
          {props.Shop.filter((item=> item.category==='weapon')).map((item) => {
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              flexWrap: 'wrap',
            }}
            key={item.id}>
              <div className="ui small image">
                <a href="/#" onClick={() => props.handlePurchase(item)}>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div style={{ margin: '0px 10px' }}>
                {item.price}{' '}
                <img src="/images/icons/goldcoin.png" alt="" width="20px" />
              </div>
            </div>
          );
        })}
          </Tab>
          <Tab eventKey="armor" title="Armor" style={{

            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            flexWrap: 'wrap',

        }}>
          {props.Shop.filter((item=> item.category==='armor')).map((item) => {
          return (
            <div  key={item.id}>
              <div className="ui small image">
                <a href="/#" onClick={() => props.handlePurchase(item)}>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div style={{ margin: '0px 10px' }}>
                {item.price}{' '}
                <img src="/images/icons/goldcoin.png" alt="" width="20px" />
              </div>
            </div>
          );
        })}
          </Tab>
          <Tab eventKey="Items" title="Contact" >

          </Tab>
        </Tabs>
        {/* {props.Shop.map((item) => {
          return (
            <div key={item.id}>
              <div className="ui small image">
                <a href="/#" onClick={() => props.handlePurchase(item)}>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div style={{ margin: '0px 10px' }}>
                {item.price}{' '}
                <img src="/images/icons/goldcoin.png" alt="" width="20px" />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Shop;
