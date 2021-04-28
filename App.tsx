// Re-export the root component from the Next.js website
// as the root component for the native React app.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './src/pages/index';
import About from './src/pages/about';
import Providers from './src/providers/index';
import Main from './src/components/Layouts/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Providers>
      <Main>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={index} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </Main>
    </Providers>
  );
}
