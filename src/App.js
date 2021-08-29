// ./App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './Navigation/TabNavigator';
import DrawerNavigator from './Navigation/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;
