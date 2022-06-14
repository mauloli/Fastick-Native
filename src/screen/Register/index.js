import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from './style';
export default function RegisterScreen(props) {
  const handleLogin = () => {
    props.navigation.navigate('Login');
  };
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
        <TextInput style={styles.input} placeholder="Write Your First Name" />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Write Your Last Name" />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Write Your Phone Number" />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Email </Text>
        <TextInput style={styles.input} placeholder="Write Your Email" />
      </View>
      <View>
        <Text style={{marginBottom: 12}}>Password</Text>
        <TextInput style={styles.input} placeholder="Write Your Password" />
      </View>

      <TouchableOpacity style={styles.Button}>
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
