import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Atoms/Text';
import { Button } from '../components/Groups/Button';
import { withAuth } from '../utils/Auth/AuthGuard';

export default function PrivatePage() {
  return withAuth(
    <View>
      <Text>PrivatePage</Text>
    </View>,
  );
}
