import React, { Component } from 'react';
import Input from './Input';

class Todo extends Component {
  render() {
    console.log(this.props.list);
    return (
      <div className="ui container" style={{ width: '500px' }}>
        <Input
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleKeyDown={this.props.handleKeyDown}
        />
        <div>
          <ul className="ui celled animated list">
            {this.props.list.map((item) => {
              return (
                <li key={item._id} className="item">
                  <a
                    href="/#"
                    onClick={() => {
                      this.props.onDelete(item._id);
                    }}
                  >
                    <i className="trash icon"></i>
                  </a>
                  <a
                    href="/#"
                    onClick={() => {
                      this.props.handleComplete(item._id);
                    }}
                  >
                    {item.input}
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
