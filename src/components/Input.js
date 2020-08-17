import React from 'react';

const Input = (props) => {

  return (
    <div className="ui fluid input">
      <input type="text" 
      placeholder='Enter new task'
      onChange={props.handleChange}
      value={props.input} 
      onKeyDown={props.handleKeyDown}
      />
      
    </div>
  );
};

export default Input;
