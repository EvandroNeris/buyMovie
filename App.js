import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/stacks/MainTab';

export default () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};
