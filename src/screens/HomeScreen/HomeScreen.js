import React from 'react';
import {View, Text} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}>
        HomeScreen
      </Text>
    </View>
  );
};
