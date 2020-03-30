import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '~/pages/SingUp';
import SingIn from '~/pages/SingIn';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
