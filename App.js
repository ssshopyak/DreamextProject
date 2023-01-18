import React, {useState} from 'react';
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Promotions" component={PromotionsScreen} />
        <Tab.Screen name="BarCode" component={BarcodeScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
