import React, {useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async () => {
    try {
      // const result = await axios.post('auth/login', form);
      // console.log(result.data.data);
      // await AsyncStorage.setItem('token', result.data.data.token);
      // await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);

      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error.response);
    }
    // props.navigation.navigate('AppScreen', {
    //   screen: 'Home',
    // });
  };

  const handleChange = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleForgot = () => {
    props.navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Fastick</Text>
      </View>
      <Text style={styles.textHeader2}>Sign In</Text>
      <View style={{width: '90%', marginBottom: 22}}>
        <Text>
          Sign in with your data that you entered during your registration
        </Text>
      </View>
      <Text style={{marginBottom: 12}}>Email</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Write Your Email"
          onChangeText={text => handleChange(text, 'email')}
        />
      </View>
      <Text style={{marginBottom: 12}}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Write Your Password"
        onChangeText={text => handleChange(text, 'password')}
      />
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginBottom: 24}}>
          <Text>Forgot Your Password?</Text>
          <Text
            onPress={handleForgot}
            style={{color: '#5F2EEA', textDecorationLine: 'underline'}}>
            Reset Now
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Don’t have an account?</Text>
          <Text
            style={{color: '#5F2EEA', textDecorationLine: 'underline'}}
            onPress={handleRegister}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
}
