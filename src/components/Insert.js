import React, { Component } from 'react';
import './Insert.css';

class Insert extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          className="vending__insert__btn"
          onClick={onClick}
          type="button"
        >
          Insert Money
          </button>
      </div>
    )
  }
}

export default Insert;
