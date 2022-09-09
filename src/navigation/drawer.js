import 'react-native-gesture-handler';
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
import Home from '../screens/home';
import Chat from '../screens/chat';
import Soporte from '../screens/soporte';
import CrearAnuncio from '../screens/crearanuncio';


const Drawer = createDrawerNavigator();

const MyDrawer = () =>{

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0a1d60',
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
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen
        name="Planes de membresia"
        component={Metodos}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="rocket-outline" size={22} color={color} />
          ),
        }} />
          <Drawer.Screen
        name="Crear Anuncio"
        component={CrearAnuncio}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="add-outline" size={22} color={color} />
          ),
        }} />
         <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }} />
        <Drawer.Screen
        name="Soporte"
        component={Soporte}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
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