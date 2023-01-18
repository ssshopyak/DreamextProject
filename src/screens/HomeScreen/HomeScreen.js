import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
export const HomeScreen = ({route}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Barcode
        format="EAN13"
        value="0123456789012"
        style={{marginBottom: 40}}
        maxWidth={Dimensions.get('window').width / 2}
      />
    </View>
  );
};
