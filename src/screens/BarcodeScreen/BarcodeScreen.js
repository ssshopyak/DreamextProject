import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, SafeAreaView} from 'react-native';
import {Header} from '../../components/header';
import {styles} from './style';
import info from '../../../assets/icons/info.png';
import fullsize from '../../../assets/icons/fullsize.png';
import {BarcodeComponent} from '../../components/barcode';
import {IconButton} from '../../components/iconButton';
export const BarcodeScreen = ({route}) => {
  return (
    <SafeAreaView>
      <Header />
      <View
        style={[
          styles.barcodeContainer,
          {height: Dimensions.get('window').height / 1.8 - 60},
        ]}>
        <View style={styles.topButtonContainer}>
          <IconButton
            source={fullsize}
            onPress={() => {
              console.log('fullsize');
            }}
          />
          <IconButton
            source={info}
            onPress={() => {
              console.log('info');
            }}
          />
        </View>
        <BarcodeComponent value={'0123456789012'} />
      </View>
      <View
        style={[
          styles.balanceContainer,
          {height: Dimensions.get('window').height / 5 - 60},
        ]}>
        <Text style={{textAlign: 'center'}}>Your balance:</Text>
        <Text style={{fontSize:24, color:'#DC143C'}}>13.50 UAH</Text>
      </View>
    </SafeAreaView>
  );
};
