import React from 'react';
import Armor from './Armor'
import Weapon from './Weapon'

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
        <Armor Shop={props.Shop}/>
        <Weapon Shop={props.Shop} />
        
        
    </div>
  );
}

export default Item;
