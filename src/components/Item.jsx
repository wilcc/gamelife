import React from 'react';
import Armor from './Armor'
import Weapon from './Weapon'
import Items from './Items'
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <div
      className="ui container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:"wrap",
        paddingLeft: '100px',
        paddingRight: '100px',
      }}
    >
        <h2>Armors</h2>
        <Armor Shop={props.Shop} handlePurchase={props.handlePurchase}/>
        <h2>Weapons</h2>
        <Weapon Shop={props.Shop} handlePurchase={props.handlePurchase}/>
        <h2>Items</h2>
        <Items Shop={props.Shop} handlePurchase={props.handlePurchase}/>
        
      
        
    </div>
  );
}

export default Item;

Item.propTypes = {
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
