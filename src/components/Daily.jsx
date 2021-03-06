import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        axios.delete(`http://localhost:8080/daily/remove/${id}`).then(() => {
          this.loadList();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        });
      }
    })
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
    let newExp = this.props.exp +20
    localStorage.setItem('myCoin', newCoin);
    localStorage.setItem('myExp', newExp);
    this.props.setCoin(newCoin,newExp);
  };
  handleRefresh = () => {};
  componentDidMount() {
    this.loadList();
  }
  render() {
    return (
      <div className="ui container" style={{ width: '500px',backgroundColor:'transparent'}}>
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


Daily.propTypes = {
  setCoin: PropTypes.func,
  coin: PropTypes.number,
  exp: PropTypes.number

};