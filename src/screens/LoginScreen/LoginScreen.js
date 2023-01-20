import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './style';
import {Button} from '../../components/button';
import {authData} from './data';
import isEmail from 'validator/lib/isEmail';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../utils/Colors';
import {ShowError} from '../../utils/ShowMessages';
import Auth from '../../store/auth';
import {observer} from 'mobx-react';

export const LoginScreen = observer(({navigation}) => {
  const [phone, setPhone] = useState('+380'); // useRef

  const toValidateAuth = () => {
    navigation.navigate('CodeConfirm');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.logo}>Enter the phone number</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
          />
        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          style={{alignItems: 'center'}}>
          <Text>Press "Continue" to receive SMS confirmation code</Text>
          <View style={styles.button_box}>
            <Button
              title="Continue"
              onPress={toValidateAuth}
              backgroundColor={'#DC143C'}
              color={'#fff'}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
});
