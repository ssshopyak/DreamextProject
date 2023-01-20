import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Auth from '../../store/auth';
export const ProfileScreen = ({route}) => {
  return (
    <View>
      <Text
        onPress={() => {
          Auth.ToLogout();
        }}>
        ProfileScreen
      </Text>
    </View>
  );
};
