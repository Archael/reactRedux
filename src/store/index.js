import { configureStore } from '@reduxjs/toolkit';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  } else {
    return state;
  }
};

const store = configureStore({
  reducer: counterReducer,
});

export default store;
