import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from './styles';
export default function ConfirmPassword(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Fastick</Text>
      </View>
      <Text style={styles.textHeader2}>Set Password</Text>
      <View style={{width: '90%', marginBottom: 22}}>
        <Text>set your new password </Text>
      </View>
      <Text style={{marginBottom: 12}}>Password</Text>
      <View>
        <TextInput style={styles.input} placeholder="Write Your Email" />
      </View>
      <Text style={{marginBottom: 12}}>Confirm Password</Text>
      <TextInput style={styles.input} placeholder="Write Your Password" />
      <TouchableOpacity style={styles.Button}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
