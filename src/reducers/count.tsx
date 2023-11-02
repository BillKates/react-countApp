import { INCREMENT, DECREMENT } from '../actions';

interface CountState {
  value: number;
}

const initialize: CountState = { value: 0 };

export const countReducer = (count: CountState = initialize, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { value: count.value + 1 };
    case DECREMENT:
      return { value: count.value - 1 };
    default:
      return count;
  }
};
