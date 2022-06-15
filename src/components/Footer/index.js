import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  return (
    <View style={{padding: 25, marginTop: 60}}>
      <Text
        style={{
          fontSize: 48,
          color: '#5F2EEA',
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Fastick
      </Text>

      <Text style={{width: '70%', marginBottom: 40}}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>

      <Text style={{marginBottom: 12, color: 'black', fontWeight: '600'}}>
        Explore
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <Text style={{marginRight: 60}}>Home</Text>
        <Text>List Movie</Text>
      </View>

      <Text style={{marginBottom: 15, color: 'black', fontWeight: '600'}}>
        Our Sponsor
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 45,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Ebu.Id
        </Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#394BA7'}}>
          CineOne21
        </Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#D00707'}}>
          Hiflix
        </Text>
      </View>

      <Text style={{marginBottom: 19}}>Follow Us</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 170,
          marginBottom: 60,
        }}>
        <Icon size={20} name="facebook" />
        <Icon size={20} name="instagram" />
        <Icon size={20} name="twitter" />
        <Icon size={20} name="youtube" />
      </View>

      <Text>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
  );
}
