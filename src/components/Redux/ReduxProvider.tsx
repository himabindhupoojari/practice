// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
// import store from './store';
// import Counter from './Counter';

import store from './Store';
import Counter from './reduxComponents/Counter';
import StaticReduxForm from './reduxComponents/StaticReduxForm';

const ReduxProvider: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />    
      <StaticReduxForm />  
    </Provider>
  );
};

export default ReduxProvider;
