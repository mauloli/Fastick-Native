import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/login';
import Register from '../screen/Register';
import ForgotPassword from '../screen/ForgotPassword';
import ConfirmPassword from '../screen/ConfirmForgot';
export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ConfirmPassword}
        name="ConfirmPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
