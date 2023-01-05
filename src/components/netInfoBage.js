import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NetInfoBage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    backgroundColor: '#757575',
    width: '100%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Regular',
  },
});
