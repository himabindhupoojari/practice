// rootReducer.ts
import { combineReducers } from 'redux';
// import counterReducer from './counterReducer';
import counterReducer from './reduxReducers/CounterReducer';
import stateReducer from './reduxReducers/StateReducer';
import StaticformReducer from './reduxReducers/StaticformReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  stateCounter: stateReducer,
  staticForm: StaticformReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
