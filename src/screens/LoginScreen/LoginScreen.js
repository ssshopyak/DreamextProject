import React from 'react';
import {View, Text} from 'react-native';

export const LoginScreen = ({toAuthorize}) => {
  return (
    <View>
      <Text onPress={toAuthorize}>LoginScreen</Text>
    </View>
  );
};
