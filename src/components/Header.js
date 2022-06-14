import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Text>Logo</Text>
      </View>
      <View>
        <Text onPress={openDrawer}>Icon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
