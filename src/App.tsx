import React, { Component } from 'react';

// プロパティとステートの型を定義
interface CounterProps {}
interface CounterState {
  value: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // インクリメントする関数
  onIncrement = () => {
    // setStateでstateの値を更新します
    this.setState({ value: this.state.value + 1 });
  }

  // デクリメントする関数
  onDecrement = () => {
    // setStateでstateの値を更新します
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <div>
          カウント値：{this.state.value}
        </div>
        <div>
          <button type="button" onClick={this.onIncrement}>+</button>
          <button type="button" onClick={this.onDecrement}>-</button>
        </div>
      </div>
    );
  }
}

const App = () => {
  return <Counter />
}

export default App;
