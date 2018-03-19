import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <ul className="vending__list">
        {list.map(item =>
          <li className="vending__item" key={item.id}>
            <img src={item.img} alt="" />
            <span className="beverage__item" onClick={onClick}>{item.name}</span>
            <span>{item.price} 원</span>
          </li>
        )}
      </ul>
    )
  }
}

export default List;