import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './style';
export default function RegisterScreen(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
    password: '',
  });
  const handleLogin = () => {
    props.navigation.navigate('Login');
  };
  const handleRegister = async () => {
    try {
      const result = await axios.post(`auth/register`, form);
      alert(result.data.msg);
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const handleChange = (text, name) => {
    setForm({...form, [name]: text});
  };
  console.log(form);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Fastick</Text>
      </View>

      <Text style={styles.textHeader2}>Sign Up</Text>

      <View style={{width: '90%', marginBottom: 22}}>
        <Text>Fill your additional details </Text>
      </View>

      <View>
        <Text style={{marginBottom: 12}}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your First Name"
          onChangeText={text => handleChange(text, 'firstName')}
        />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your Last Name"
          onChangeText={text => handleChange(text, 'lastName')}
        />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your Phone Number"
          onChangeText={text => handleChange(text, 'noTelp')}
        />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your Email"
          onChangeText={text => handleChange(text, 'email')}
        />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your Password"
          onChangeText={text => handleChange(text, 'password')}
        />
      </View>

      <TouchableOpacity style={styles.Button} onPress={handleRegister}>
        <Text style={{color: 'white'}}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginBottom: 24}}>
          <Text>Already have an account?</Text>
          <Text
            style={{color: '#5F2EEA', textDecorationLine: 'underline'}}
            onPress={handleLogin}>
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
