import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from '../screen/SplashScreen';
import AuthScreen from './auth';
import AppScreen from './app';
export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* component = untuk bagian Component yg di import */}
        {/* name = untuk pemanggilan screen */}
        <Stack.Screen
          component={SplashScreen}
          name="SpalshScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={AuthScreen}
          name="AuthScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={AppScreen}
          name="AppScreen"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
