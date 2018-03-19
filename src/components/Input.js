import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { value, balance, onChange, onKeyDown } = this.props;
    return (
      <div>
        <span>잔액 : {balance} 원</span><br />
        <input
          className="vending__input"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={(node) => { this.input = node; }}
        />
      </div>
    )
  }
}

export default Input;
