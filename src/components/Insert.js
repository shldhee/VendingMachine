import React, { Component } from 'react';

class Insert extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
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