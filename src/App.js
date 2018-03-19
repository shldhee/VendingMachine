import React, { Component } from 'react';

const list = [
  {
    id: 1,
    name: 'Sprite',
    price: 800,
  },
  {
    id: 2,
    name: 'Coke',
    price: 900,
  },
  {
    id: 3,
    name: 'Coffe',
    price: 1000,
  },
  {
    id: 4,
    name: 'Water',
    price: 700,
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      value: '',
      balance: 0,
    };

    this.onInsertMoney = this.onInsertMoney.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInsertMoneyChange = this.onInsertMoneyChange.bind(this);
    this.onInsertMoney = this.onInsertMoney.bind(this);
    this.onReturnMoney = this.onReturnMoney.bind(this);
    this.onSelectBeverage = this.onSelectBeverage.bind(this);
  }

  onInsertMoney(event) {
    const balance = this.state.balance + ~~this.state.value;
    this.setState({ balance, value: '' })
  }

  onReturnMoney() {
    alert(`거스름돈 ${this.state.balance}원`);
    this.setState({ balance: 0 })
  }

  onInsertMoneyChange(event) {
    this.setState({ value: event.target.value });
  }

  onInputKeyDown(event) {
    const text = event.target.value;
    if (!text || event.keyCode !== 13) {
      return;
    }
    const balance = this.state.balance + ~~this.state.value;
    this.setState({ balance, value: '' })
  }

  onSelectBeverage(event) {
    const selectedBeverage = event.target.textContent;
    const isBeverage = item => selectedBeverage === item.name;
    const charge = this.state.list.filter(isBeverage);
    if (this.state.balance < charge[0].price) {
      return alert("금액이 부족합니다.");
    } else {
      const balance = this.state.balance - charge[0].price;
      this.setState({ balance });
    }
  }

  render() {
    const {
      list,
      value,
      balance
    } = this.state;

    return (
      <div className="vendingMachine">
        <Header />
        <List list={list} onClick={this.onSelectBeverage} />
        <Input
          value={value}
          balance={balance}
          onChange={this.onInsertMoneyChange}
          onKeyDown={this.onInputKeyDown}
        />
        <Insert onClick={this.onInsertMoney} />
        <Return onClick={this.onReturnMoney} />
      </div>
    );
  }
}

const Header = () => <h1 className="vedingMachine__title">Vending Machine</h1>

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

class Input extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { value, balance, onChange, onKeyDown } = this.props;
    return (
      <div>
        <span>잔액 : {balance}</span>
        <input
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

export default App;
