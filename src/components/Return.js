import React, { Component } from 'react';
import './Return.css';

class Return extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          className="vending__return__btn"
          onClick={onClick}
          type="button"
        >
          Return Money
        </button>
      </div>
    )
  }
}

export default Return;
