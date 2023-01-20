import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export const Button = ({title, onPress, backgroundColor, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View
        style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}>
        <Text style={{color: color, fontWeight: 'bold', textAlign: 'center'}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    width: '95%',
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
