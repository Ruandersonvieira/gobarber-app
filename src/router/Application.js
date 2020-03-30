import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from '~/router/Tabs';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
