// Re-export the root component from the Next.js website
// as the root component for the native React app.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './src/pages/index';
import About from './src/pages/about';
import Login from './src/pages/login';
import Profile from './src/pages/profile';

import Providers from './src/providers/index';
import Main from './src/components/Layouts/Main';
import { AuthContext, AuthProvider } from './src/utils/Auth/AuthGuard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Main>
          <AuthContext.Consumer>
            {({ state }) => (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="about" component={About} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="home" component={index} />
                <Stack.Screen name="login" component={Login} />
              </Stack.Navigator>
            )}
          </AuthContext.Consumer>
        </Main>
      </NavigationContainer>
    </Providers>
  );
}
