import React, {useState} from 'react';
import home from './assets/icons/home.png';
import promotions from './assets/icons/promotions.png';
import barcode from './assets/icons/barcode.png';
import history from './assets/icons/history.png';
import profile from './assets/icons/profile.png';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
import {PromotionsScreen} from './src/screens/PromotionsScreen/PromotionsScreen';
import {BarcodeScreen} from './src/screens/BarcodeScreen/BarcodeScreen';
import {HistoryScreen} from './src/screens/HistoryScreen/HistoryScreen';
import {ProfileScreen} from './src/screens/ProfileScreen/ProfileScreen';
const Tab = createBottomTabNavigator();

const App = () => {
  const [isNotAuthorized, setIsNotAuthorized] = useState(true); // to mobx

  const toAuthorize = () => {
    // to mobx
    setIsNotAuthorized(!isNotAuthorized);
  };

  if (isNotAuthorized) {
    return <LoginScreen toAuthorize={toAuthorize} />;
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

export default App;
