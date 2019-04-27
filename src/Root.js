import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import React from 'react';

export default function(props) {
  const store = createStore(reducers, {});
  return <Provider store={store}>{props.children}</Provider>;
}
