import React from 'react';
import Armor from './Armor'
import Weapon from './Weapon'
import Items from './Items'

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
        <Armor Shop={props.Shop}/>
        <h2>Weapons</h2>
        <Weapon Shop={props.Shop} />
        <h2>Items</h2>
        <Items Shop={props.Shop} />
        
      
        
    </div>
  );
}

export default Item;
