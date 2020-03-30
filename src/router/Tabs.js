import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator independent={1}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
