import React from 'react';

function Shop(props) {
  return (
    <div>
      <div className="ui container" style={{ width: '50%' }}>
        <ul className="ui celled animated list">
          {props.Shop.map((item) => {
            return (
              <li className="item">
                <div>
                  Name:{item.name}
                </div>
                <div>
                  Price:{item.price}
                </div>
                <div>

                  image: <img src={item.image} alt="" width='30px'/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
