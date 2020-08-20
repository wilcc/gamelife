import React from 'react'

function Armor(props) {
    return (
        <div>
            {props.Shop.filter((item=> item.category==='armor')).map((item) => {
          return (
            <div style={{width:'50%'}} key={item.id}>
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
    )
}


export default Armor
