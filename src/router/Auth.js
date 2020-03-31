import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '~/pages/SingUp';
import SingIn from '~/pages/SingIn';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}
