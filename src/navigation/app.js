import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import ViewAll from '../screen/ViewAll';
import MovieDetail from '../screen/MovieDetail';
import OrderPage from '../screen/Order';
import PaymentPage from '../screen/Payment';
import ProfilePage from '../screen/Profile';
import TicketResult from '../screen/TicketResult';
import Counter from '../screen/Counter';
import ListMovie from '../screen/ListMovie2';

import NotificationScreen from '../screen/Notification';

import DrawerContent from '../components/DrawerContent';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={MovieDetail}
        name="MovieDetail"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={OrderPage}
        name="OrderPage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={PaymentPage}
        name="PaymentPage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={TicketResult}
        name="TicketResult"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Navbar {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfilePage}
        name="ProfilePage"
        options={{
          title: 'Profile',
          header: props => <Navbar {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        component={NotificationScreen}
        name="Notification"
        options={{
          title: 'Notification',
          header: props => <Navbar {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
