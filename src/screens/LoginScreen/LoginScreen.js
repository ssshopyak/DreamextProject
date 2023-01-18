import React, {useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './style';
import {Button} from '../../components/button';
import {authData} from './data';
import isEmail from 'validator/lib/isEmail';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../utils/Colors';
import {ShowError} from '../../utils/ShowMessages';

export const LoginScreen = ({toAuthorize}) => {
  const [email, setEmail] = useState(''); // useRef
  const [password, setPassword] = useState(''); // useRef
  const [isNotEmptyAuthData, setIsNotEmptyAuthData] = useState(false);
  const [isWrongAuthData, setIsWrongAuthData] = useState(false);

  const toValidateAuth = () => {
    authData.map(el => {
      const isValidated =
        el.email === email && isEmail(email) && el.password === password;
      if (isValidated) {
        toAuthorize();
      } else {
        ShowError('wrong email or password');
        setIsWrongAuthData(true);
      }
    });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsNotEmptyAuthData(true);
    } else {
      setIsWrongAuthData(false);
    }
  }, [email, password]);

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={Colors.BodyLinearGradient}>
        <View>
          <Text style={styles.logo}>SHEVA</Text>
          <TextInput
            style={isWrongAuthData ? styles.wrongInput : styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={isWrongAuthData ? styles.wrongInput : styles.input}
            secureTextEntry={true}
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
