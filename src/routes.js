import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Auth from '~/router/Auth';
import Application from '~/router/Application';

export default function Routes(signed = false) {
  return (
    <NavigationContainer independent={1}>
      {signed == null ? <Auth /> : <Application />}
    </NavigationContainer>
  );
}
