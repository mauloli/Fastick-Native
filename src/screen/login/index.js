import React, {useState} from 'react';
import axios from '../../utils/axios';
import {Input, Icon, Stack, Center, NativeBaseProvider} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import {getUserById} from '../../stores/actions/profile';
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
import {useDispatch} from 'react-redux';

export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const handleLogin = async () => {
    try {
      const result = await axios.post('auth/login', form);
      console.log(result.data.data);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      await AsyncStorage.setItem('userId', result.data.data.id);
      await dispatch(getUserById(result.data.data.id));

      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error.response.data.msg);
      alert(error.response.data.msg);
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
        <Input
          style={{height: 60}}
          placeholder="Write your email"
          onChangeText={text => handleChange(text, 'email')}
        />
      </View>
      <Text style={{marginBottom: 12}}>Password</Text>
      <Input
        style={{height: 60}}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Icon
            as={<MaterialIcons name={show ? 'eyeo' : 'eye'} />}
            size={5}
            mr="2"
            color="muted.400"
            onPress={() => setShow(!show)}
          />
        }
        placeholder="Password"
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
