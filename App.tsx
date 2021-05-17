// Re-export the root component from the Next.js website
// as the root component for the native React app.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './src/pages/index';
import About from './src/pages/about';
import Providers from './src/providers/index';
import Main from './src/components/Layouts/Main';
import { NavBar } from './src/components/Groups/NavBar'
import { constant } from './src/const';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Main>
          <Stack.Navigator screenOptions={{ header: (props) => <NavBar title={constant.appTitle} {...props} /> }} >
            <Stack.Screen name="home" component={index} />
            <Stack.Screen name="about" component={About} />
          </Stack.Navigator>
        </Main>
      </NavigationContainer>
    </Providers>
  );
}
