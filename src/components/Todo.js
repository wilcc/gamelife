import React, { Component } from 'react';
import Input from './Input';

class Todo extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="ui container">
        <Input
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleKeyDown={this.props.handleKeyDown}
        />
        <div>
          <ul className="ui celled animated list" >
            {this.props.list.map((item) => {
              return (
                <li className='item'>
                  <a href='/#'
                    onClick={() => {
                      this.props.onDelete(item);
                    }}
                  >
                    <i className="trash icon"></i>
                  </a>
                  <a href="/#" onClick={()=>{
                      this.props.handleComplete(item)
                  }}>

                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
