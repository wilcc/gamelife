import React from 'react';

function Shop(props) {
  return (
    <div
      className="ui container"
      style={{
        width: '100%',
      }}
    >
      <h2>Shop For Your Rewards</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {props.Shop.map((item) => {
          return (
            <div key={item.id}>
              <div className="ui small image">
                <a href="/#" onClick={() => props.handlePurchase(item)}>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div style={{margin:'0px 10px'}}>
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
