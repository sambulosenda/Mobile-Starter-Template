// ./navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#202b23',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
