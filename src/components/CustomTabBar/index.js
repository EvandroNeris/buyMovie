import React from 'react';

import {
  TabArea,
  TabItem
} from './styles';

import HomeIcon from '../../assets/home.svg';

export default ({ state, navigation }) => {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => navigateTo('Home')}>
        <HomeIcon style={{ opacity: state.index == 0 ? 1 : 0.5 }} width="24" height="24" fill="#ffffff" />
      </TabItem>
    </TabArea>
  );
}
