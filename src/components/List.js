import React, { Component } from 'react';
// import './List.css';

class List extends Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <div>
        {list.map(item =>
          <ul key={item.id}>
            <li
              onClick={onClick}>{item.name}</li>
            <li>가격 : {item.price}</li>
          </ul>
        )}
      </div>
    )
  }
}

export default List;