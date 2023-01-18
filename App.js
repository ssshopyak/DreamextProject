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
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={home}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Promotions"
          component={PromotionsScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={promotions}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={barcode}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={history}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={profile}
                style={{
                  width: size,
                  height: size,
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
