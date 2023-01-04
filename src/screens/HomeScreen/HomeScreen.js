import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './style';

export const HomeScreen = ({route}) => {
  const {toAuthorize} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.logo}>SHEVA</Text>
        <TouchableOpacity onPress={toAuthorize}>
          <Image
            style={styles.icon}
            source={require('../../icons/logout.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
