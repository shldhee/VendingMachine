import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Input from './components/Input';
import Insert from './components/Insert';
import Return from './components/Return';

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

export default App;
