import React from 'react';
import PropTypes from 'prop-types';


function Armor(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {props.Shop.filter((item) => item.category === 'armor').map((item) => {
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

export default Armor;

Armor.propTypes = {
  handlePurchase: PropTypes.func,
  Shop: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.symbol,
        PropTypes.number,
      ]).isRequired,
    })
  ),

};
