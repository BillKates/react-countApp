import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, increment, decrement }) => {
  return (
    <div>
      <div>
        カウント値 : {value}
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { count: { value: number } }) => ({ value: state.count.value });

export default connect(mapStateToProps, { increment, decrement })(Counter);
