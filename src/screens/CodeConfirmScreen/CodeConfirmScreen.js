import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Auth from '../../store/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export const CodeConfirmScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Authorization</Text>
      <View style={styles.codeContainer}>
        <OTPInputView
          pinCount={4}
          style={{width: '50%', height: 200}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  codeContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  underlineStyleBase: {
    color: '#DC143C',
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#DC143C',
  },
});
