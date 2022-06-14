import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import styles from './styles';
export default function ForgotPassword(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  const handleRegister = () => {
    props.navigation.navigate('ConfirmPassword');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Fastick</Text>
      </View>
      <Text style={styles.textHeader2}>Forgot Password</Text>
      <View style={{width: '90%', marginBottom: 22}}>
        <Text>we'll send a link to your email shortly</Text>
      </View>
      <Text style={{marginBottom: 12}}>Email</Text>
      <View>
        <TextInput style={styles.input} placeholder="Write Your Email" />
      </View>
      <TouchableOpacity style={styles.Button} onPress={handleRegister}>
        <Text style={{color: 'white'}}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
