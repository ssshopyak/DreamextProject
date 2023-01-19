import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },
  logo: {
    marginLeft: 15,
    fontSize: 24,
    color: '#808080',
    fontWeight: 'bold',
  },
});
