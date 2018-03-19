import React, { Component } from 'react';
// import './Return';

class Return extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
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