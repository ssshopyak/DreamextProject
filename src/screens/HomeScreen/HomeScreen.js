import React from 'react';
import {View, Text} from 'react-native';

export const HomeScreen = ({route}) => {
  const {toAuthorize} = route.params;
  return (
    <View>
      <Text onPress={toAuthorize}>HomeScreen</Text>
    </View>
  );
};
