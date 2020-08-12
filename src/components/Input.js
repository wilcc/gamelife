import React from 'react';

const Input = (props) => {

  return (
    <div>
      <input type="text" 
      placeholder='enter new todo'
      onChange={props.handleChange}
      value={props.input} 
      onKeyDown={props.handleKeyDown}
      />
      
    </div>
  );
};

export default Input;
