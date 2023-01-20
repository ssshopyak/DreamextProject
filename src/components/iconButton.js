import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export const IconButton = ({source, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image
        source={source}
        style={{
          width: 25,
          height: 25,
          tintColor: '#DC143C',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
