import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Registrar from './../screens/registrar'
import Home from '../screens/home';
import MyDrawer from './drawer';
import Onboarding from '../screens/OnboardingScreen';
import GameDetailsScreen from '../screens/DetallesJuegos';
import Splash from '../screens/splash';

const Stack = createNativeStackNavigator();

const Start= () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Onboarding" component={Onboarding}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar}/>
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Detalles" component={GameDetailsScreen} 
      options={
        ({ route, navigation }) => ({
        title: route.params?.title,
        headerShown: true,
      })
      }/>
      
    </Stack.Navigator>
  );
};

export default Start;
