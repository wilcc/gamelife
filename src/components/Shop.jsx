import React from 'react';

function Shop(props) {

  return (

      <div className="ui container" style={{display:'flex',flexDirection:'row',alignContent:'center',flexWrap:'wrap', width:'50%'}}>
        {/* <ul className="ui celled animated list"> */}
          {props.Shop.map((item) => {
            return (
            //   <li className="item">
            <div>
                <div className='ui small image'>
                <img src={item.image} alt="" />
                </div>
                <div>
                  {item.price} <img src="/images/icons/goldcoin.png" alt="" width='20px'/>
                </div>
            {/* //   </li> */}
            </div>
            );
          })}
        {/* </ul> */}
      </div>

  );
}

export default Shop;
