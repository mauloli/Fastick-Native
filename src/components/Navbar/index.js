import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
export default function Navbar(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.navContain}>
      <Text style={{fontSize: 30, color: '#5F2EEA', fontWeight: 'bold'}}>
        Fastick
      </Text>

      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}
