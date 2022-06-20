import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function SplashScreen(props) {
  useEffect(() => {
    const token = AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  }, []);
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}
