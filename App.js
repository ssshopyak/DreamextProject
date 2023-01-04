import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [isNotAuthorized, setIsNotAuthorized] = useState(true);

  const toAuthorize = () => {
    setIsNotAuthorized(!isNotAuthorized);
  };

  if (isNotAuthorized) {
    return <LoginScreen toAuthorize={toAuthorize} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            toAuthorize: toAuthorize,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
