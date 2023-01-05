import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';
import {Button} from '../../components/button';
import {authData} from './data';
import isEmail from 'validator/lib/isEmail';
import Snackbar from 'react-native-snackbar';
import {NetInfoBage} from '../../components/netInfoBage';
import {useNetInfo} from '@react-native-community/netinfo';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../Colors';

export const LoginScreen = ({toAuthorize}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotEmptyAuthData, setIsNotEmptyAuthData] = useState(false);
  const [isWrongAuthData, setIsWrongAuthData] = useState(false);
  const [isNotInternet, setisNotInterner] = useState(true);
  const netInfo = useNetInfo();

  const toShowAuthError = title => {
    Snackbar.show({
      text: title,
      duration: Snackbar.LENGTH_LONG,
      textColor: 'rgba(227, 50, 50,0.5)',
    });
  };

  const toValidateAuth = () => {
    authData.map(e => {
      const isValidated =
        e.email === email && isEmail(email) && e.password === password;

      if (isValidated) {
        toAuthorize();
      } else {
        toShowAuthError('wrong email or password');
        setIsWrongAuthData(true);
      }
    });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsNotEmptyAuthData(true);
    }
    if (netInfo.isConnected) {
      setisNotInterner(false);
    }
  }, [email, netInfo.isConnected, password]);

  return (
    <>
      {isNotInternet && <NetInfoBage />}
      <LinearGradient
        style={styles.container}
        colors={Colors.BodyLinearGradient}>
        <View>
          <TextInput
            style={isWrongAuthData ? styles.wrongInput : styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={isWrongAuthData ? styles.wrongInput : styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="#fff"
          />
        </View>
        {isNotEmptyAuthData && (
          <View style={styles.button_box}>
            <Button
              title="Login"
              onPress={toValidateAuth}
              backgroundColor={Colors.TitleText}
              color={'white'}
            />
          </View>
        )}
      </LinearGradient>
    </>
  );
};
