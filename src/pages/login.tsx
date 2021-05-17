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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center"
  },
  rowView: {
    flexDirection: "row"
  }
})
