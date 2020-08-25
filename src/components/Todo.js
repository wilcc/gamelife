import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';
import PropTypes from 'prop-types'
import './todo.css'


class Todo extends Component {
  state = {
    list: [],
    input: '',
  };
  loadList = () => {
    const url = 'http://localhost:8080/todo/all';
    axios.get(url).then((dbList) => {
      this.setState({
        list: dbList.data,
      });
    });
  };
  onDelete = (id) => {
    axios.delete(`http://localhost:8080/todo/remove/${id}`).then(() => {
      this.loadList();
    });
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleKeyDown = (e) => {
    // e.preventDefault()
    if (e.key === 'Enter') {
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      };
      let input = this.state.input;
      axios
        .post('http://localhost:8080/todo/create', { input }, [axiosConfig])
        .then(() => {
          this.loadList();
          this.setState({
            input: '',
          });
        });
    }
  };
  handleComplete = (id) => {
    axios.delete(`http://localhost:8080/todo/remove/${id}`).then(() => {
      this.loadList();
    });
    let newCoin = this.props.coin + 20;
    let newExp = this.props.exp + 20;
    this.props.setCoin(newCoin,newExp);
    localStorage.setItem('myCoin', newCoin);
    localStorage.setItem('myExp',newExp)
  };
  
  componentDidMount() {
    this.loadList();

  }
  render() {
    return (
        <div className="container" style={{ width: '500px',backgroundColor:'transparent' }}>
          <h2>To Do List</h2>
          <Input
            input={this.state.input}
            handleChange={this.handleChange}
            handleKeyDown={this.handleKeyDown}
          />
          <div>
            <ul className="ui celled animated list">
              {this.state.list.map((item) => {
                return (
                  <li key={item._id} className="item">
                    <a
                      href="/#"
                      onClick={() => {
                        this.onDelete(item._id);
                      }}
                    >
                      <i className="trash icon"></i>
                    </a>
                    <a
                      href="/#"
                      onClick={() => {
                        this.handleComplete(item._id);
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


Todo.propTypes = {
  setCoin: PropTypes.func,
  coin: PropTypes.number,
  exp: PropTypes.number

};