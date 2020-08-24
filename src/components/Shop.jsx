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
        <Tabs
          defaultActiveKey="armor"
          id="uncontrolled-tab-example"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Tab eventKey="weapon" title="Weapon">
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              flexWrap: 'wrap',
            }}>
            {props.Shop.filter((item) => item.category === 'weapon').map(
              (item) => {
                return (
                  <div style={{ width: '50%' }} key={item.id}>
                    <div className="ui small image">
                      <a href="/#" onClick={() => props.handlePurchase(item)}>
                        <img src={item.image} alt="" />
                      </a>
                    </div>
                    <div style={{ margin: '0px 10px' }}>
                      {item.price}{' '}
                      <img
                        src="/images/icons/goldcoin.png"
                        alt=""
                        width="20px"
                      />
                    </div>
                  </div>
                );
              }
            )}
            </div>
          </Tab>

          <Tab
            eventKey="armor"
            title="Armor"
            
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              flexWrap: 'wrap',
            }}>
            {props.Shop.filter((item) => item.category === 'armor').map(
              (item) => {
                return (
                  <div style={{ width: '50%' }} key={item.id}>
                    <div className="ui small image">
                      <a href="/#" onClick={() => props.handlePurchase(item)}>
                        <img src={item.image} alt="" />
                      </a>
                    </div>
                    <div style={{ margin: '0px 10px' }}>
                      {item.price}{' '}
                      <img
                        src="/images/icons/goldcoin.png"
                        alt=""
                        width="20px"
                      />
                    </div>
                  </div>
                );
              }
            )}
            </div>
          </Tab>
          <Tab
            eventKey="item"
            title="Item"
            
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              flexWrap: 'wrap',
            }}>
            {props.Shop.filter((item) => item.category === 'potion').map(
              (item) => {
                return (
                  <div style={{ width: '50%' }} key={item.id}>
                    <div className="ui small image">
                      <a href="/#" onClick={() => props.handlePurchase(item)}>
                        <img src={item.image} alt="" />
                      </a>
                    </div>
                    <div style={{ margin: '0px 10px' }}>
                      {item.price}{' '}
                      <img
                        src="/images/icons/goldcoin.png"
                        alt=""
                        width="20px"
                      />
                    </div>
                  </div>
                );
              }
            )}
            </div>
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
