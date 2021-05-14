import Head from 'next/head';
import React from 'react';
import { Text, View } from 'react-native';

function About() {
  return (
    <View>
      <Head>
        <title>
          <Text>Home</Text>
        </title>
      </Head>
      <Text>About</Text>
    </View>
  );
}

export default About;
