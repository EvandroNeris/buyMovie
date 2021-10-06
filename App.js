import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/stacks/MainTab';
import { Provider } from 'react-redux';

import store from './src/store'

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
};
