import React from 'react';

function Shop(props) {
  return (
    <div
      className="ui container"
      style={{
        width: '70%',
      }}
      >
      <h2>Shop For Your Rewards</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        
      }}>
      {props.Shop.map((item) => {
        return (
          <div key={item.id}>
            <div className="ui tiny image">
              <a href="/#" onClick={() => props.handlePurchase(item)}>
                <img src={item.image} alt="" />
              </a>
            </div>
            <div>
              {item.price}{' '}
              <img src="/images/icons/goldcoin.png" alt="" width="20px" />
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Shop;
