import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Notification from '../../utils/notif';

export default function NotificationScreen() {
  const handleClickReminder = () => {
    console.log('Clicked');
    // [without schedule]
    // Notification.reminderProductNotification();
    const setNotification = {
      title: 'product',
      message: 'you can buy this product',
      date: new Date(Date.now() + 2 * 1000),
    };
    console.log(setNotification);
    Notification.scheduleProductNotification(setNotification);
  };
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
      <Button title="reminder product" onPress={handleClickReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
