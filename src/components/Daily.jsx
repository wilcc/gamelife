import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';

class Daily extends Component {
  state = {
    list: [],
    input: '',
  };
  loadList = () => {
    const url = 'http://localhost:8080/daily/all';
    axios.get(url).then((dbList) => {
      this.setState({
        list: dbList.data,
      });
    });
  };
  onDelete = (id) => {
    axios.delete(`http://localhost:8080/daily/remove/${id}`).then(() => {
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
        .post('http://localhost:8080/daily/create', { input }, [axiosConfig])
        .then(() => {
          this.loadList();
          this.setState({
            input: '',
          });
        });
    }
  };
  handleComplete = (id) => {
    axios.put(`http://localhost:8080/daily/complete/${id}`).then(() => {
      this.loadList();
    });
    let newCoin = this.props.coin + 20;
    localStorage.setItem('myCoin', newCoin);
    this.props.setCoin(newCoin);
    console.log(this.props.coin);
  };
  handleRefresh = () => {};
  componentDidMount() {
    this.loadList();
  }
  render() {
    return (
      <div className="ui container" style={{ width: '500px' }}>
            <h2>Dailies</h2>
        <Input
          input={this.state.input}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
        />
        <div>
          <ul className="ui celled animated list">
            {this.state.list.map((item) => {
              return item.completed === false ? (
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
              ) : (
                <li
                  key={item._id}
                  className="item"
                  style={{ backgroundColor: 'yellow' }}
                >
                  <a
                    href="/#"
                    onClick={() => {
                      this.onDelete(item._id);
                    }}
                  >
                    <i className="trash icon"></i>
                  </a>
                  <a href="/#" onClick={() => {}}>
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

export default Daily;
