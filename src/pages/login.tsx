<<<<<<< HEAD
import { useRouting } from 'expo-next-react-navigation';
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from '../components/Atoms/Text';
import { Button } from '../components/Groups/Button';
import { toProfile } from '../const/routes';
import { AuthContext } from '../utils/Auth/AuthGuard';

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { state, dispatch } = useContext(AuthContext);
  const { navigate } = useRouting();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
    navigate(toProfile);
  };

  const handleSignUp = () => {};

  if (state.isLogin) navigate(toProfile);

  return (
    <View>
      <Text>Login Page</Text>

      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />

      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
      />

      <Button
        text="LOGIN"
        textVariant="h3"
        onPress={() => {
          handleLogin();
        }}
      />
      <Button text="SIGN UP" textVariant="h3" onPress={() => {}} />
    </View>
=======
import Head from 'next/head';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from '../components/Atoms/Text';
import { TextInput } from '../components/Atoms/TextInput'
import { Button } from '../components/Groups/Button';

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <View style={styles.container} >
        <Text textVariant="h4" >Login Page</Text>
        <Text>Username:</Text>
        <TextInput value={username} onChangeText={setUsername} />
        <View style={{ height: 10 }} />
        <Text>Password:</Text>
        <TextInput value={password} onChangeText={setPassword} />
        <View style={{ height: 10 }} />
        <View style={styles.rowView}>
          <Button text="login" textVariant="h5" onPress={() => console.log("login")} />
          <View style={{ width: 20 }} />
          <Button text="sign up" textVariant="h5" onPress={() => console.log("sign up")} />
        </View>
      </View>
    </>
>>>>>>> 829f9c27c81fdab5072a414a4b60ffab5412e8ec
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
  },
});
=======
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center"
  },
  rowView: {
    flexDirection: "row"
  }
})
>>>>>>> 829f9c27c81fdab5072a414a4b60ffab5412e8ec
