import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CustomTabBar from '../components/CustomTabBar';
import MovieDetails from '../screens/MovieDetails';
import Bag from '../screens/Bag';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={props=> <CustomTabBar {...props}/>}
    screenOptions={{
      headerShown: false
    }}
    
  >
    <Tab.Screen 
      name="Home" 
      component={Home} 
    />
    <Tab.Screen 
      name="Bag" 
      component={Bag} 
    />
    <Tab.Screen 
      name="MovieDetails" 
      component={MovieDetails} 
      options={{
        tabBarVisible: false
      }} 
    />
  </Tab.Navigator>
)