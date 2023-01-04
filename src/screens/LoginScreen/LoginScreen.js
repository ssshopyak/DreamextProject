import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {styles} from './style';
import {Button} from '../../components/button';
import {authData} from './data';
import isEmail from 'validator/lib/isEmail';

export const LoginScreen = ({toAuthorize}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotEmptyAuthData, setIsNotEmptyAuthData] = useState(false);
  const [isWrongAuthData, setIsWrongAuthData] = useState(false);

  const toValidateAuth = () => {
    authData.map(e => {
      const isValidated =
        e.email === email && isEmail(email) && e.password === password;

      if (isValidated) {
        console.log('success');
        toAuthorize();
      } else {
        console.log('wrong email or password');
        setIsWrongAuthData(true);
      }
    });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsNotEmptyAuthData(true);
    }
  }, [email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={isWrongAuthData ? styles.wrongInput : styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0,0.3)"
        />
        <TextInput
          style={isWrongAuthData ? styles.wrongInput : styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="rgba(0,0,0,0.3)"
        />
      </View>
      {isNotEmptyAuthData && (
        <View style={styles.button_box}>
          <Button
            title="Login"
            onPress={toValidateAuth}
            backgroundColor={'#3580ff'}
            color={'white'}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
