import React, { Component } from 'react';
import Input from './Input';

class Todo extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <Input
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleKeyDown={this.props.handleKeyDown}
        />
        <div>
          <ul>
            {this.props.list.map((item) => {
              return (
                <li>
                  
                    {item}

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
