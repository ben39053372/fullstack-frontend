// Re-export the root component from the Next.js website
// as the root component for the native React app.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './src/pages/index';
import about from './src/pages/about';
import Providers from './src/Providers';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={index} />
          <Stack.Screen name="About" component={about} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
