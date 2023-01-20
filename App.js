import React, {useState} from 'react';
import {Image} from 'react-native';
import Auth from './src/store/auth';
import {observer} from 'mobx-react';

import home from './assets/icons/home.png';
import promotions from './assets/icons/promotions.png';
import barcode from './assets/icons/barcode.png';
import history from './assets/icons/history.png';
import profile from './assets/icons/profile.png';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
import {CodeConfirmScreen} from './src/screens/CodeConfirmScreen/CodeConfirmScreen';
import {PromotionsScreen} from './src/screens/PromotionsScreen/PromotionsScreen';
import {BarcodeScreen} from './src/screens/BarcodeScreen/BarcodeScreen';
import {HistoryScreen} from './src/screens/HistoryScreen/HistoryScreen';
import {ProfileScreen} from './src/screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  if (!Auth.isAuthorizated) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CodeConfirm" component={CodeConfirmScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {borderTopColor: '#808080', borderTopWidth: 1},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: '#DC143C',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={home}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#DC143C' : '#808080',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Promotions"
          component={PromotionsScreen}
          options={{
            tabBarActiveTintColor: '#DC143C',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={promotions}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#DC143C' : '#808080',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeScreen}
          options={{
            tabBarActiveTintColor: '#DC143C',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={barcode}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#DC143C' : '#808080',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarActiveTintColor: '#DC143C',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={history}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#DC143C' : '#808080',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarActiveTintColor: '#DC143C',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={profile}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#DC143C' : '#808080',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
