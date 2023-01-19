import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {Header} from '../../components/header';
import {styles} from './style';
import {BarcodeComponent} from '../../components/barcode';
export const BarcodeScreen = ({route}) => {
  return (
    <SafeAreaView>
      <Header />
      <View
        style={[
          styles.barcodeContainer,
          {height: Dimensions.get('window').height / 2},
        ]}>
        <View style={styles.topButtonContainer}>
          <Text>Button</Text>
          <Text>Button</Text>
        </View>
        <BarcodeComponent value={'0123456789012'} />
      </View>
    </SafeAreaView>
  );
};
