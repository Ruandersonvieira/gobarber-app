import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '~/pages/SingUp';
import SingIn from '~/pages/SingIn';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}

export default Routes;
