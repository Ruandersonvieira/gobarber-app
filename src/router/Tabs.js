import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator
      independent={1}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Appointments') {
            iconName = 'event';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255,255,255, 0.6)',
        style: {
          backgroundColor: '#8b41a8',
        },
      }}
    >
      <Tab.Screen name="Appointments" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
