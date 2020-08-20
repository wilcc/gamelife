import React from 'react';

function Item(props) {
  return (
    <div
      className="ui container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap:"wrap",
        paddingLeft: '100px',
        paddingRight: '100px',
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
              <div style={{ margin: '0px 10px' }}>
                {item.price}{' '}
                <img src="/images/icons/goldcoin.png" alt="" width="20px" />
              </div>
            </div>
          );
        })}

    </div>
  );
}

export default Item;
