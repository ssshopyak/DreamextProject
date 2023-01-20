import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Auth from '../../store/auth';
import {styles} from './style';
import {Button} from '../../components/button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export const CodeConfirmScreen = ({route}) => {
  const {phone} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Authorization</Text>
        <Text style={styles.underTitle}>
          We sent you an SMS with the code on
        </Text>
        <Text style={styles.underTitle}>{phone}</Text>
        <View
          style={[
            styles.codeContainer,
            {height: Dimensions.get('window').height / 4},
          ]}>
          <OTPInputView
            pinCount={4}
            style={{width: '60%', height: 60}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        style={{alignItems: 'center'}}>
        <View style={styles.button_box}>
          <Button
            title="Continue"
            onPress={() => {
              Auth.ToAuthorize();
            }}
            backgroundColor={'#DC143C'}
            color={'#fff'}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

