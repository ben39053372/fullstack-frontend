import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Atoms/Text';
import { signIn, useSession } from 'next-auth/client';
import { Button } from '../components/Group/Button';

export default function PrivatePage() {
  const [session, loading] = useSession();

  if (loading) {
    return <View>Loading</View>;
  }
  return (
    <View>
      {session ? (
        <Text>Private Page</Text>
      ) : (
        <>
          <Text>not Private</Text>
          <Button text="sign in" textVariant="h5" onPress={() => signIn()} />
        </>
      )}
    </View>
  );
}
