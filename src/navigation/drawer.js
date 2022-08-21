import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Movies from './../screens/movies';
import Metodos from './../screens/metodos';
import Login from './../screens/login';
import Tabs from './tabs';
import CustomDrawer from './../componentes/CustomDrawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen
        name="Metodos"
        component={Metodos}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen name="Salir"
        component={Login}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="exit-outline" size={22} color={color} />
          ),
        }} />

    </Drawer.Navigator>

  );
}
export default MyDrawer;