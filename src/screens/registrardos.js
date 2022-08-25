import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';

import InputField from './../componentes/InputField';
import CustomButton from './../componentes/CustomButton';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';


const RegistrarDos = ({navigation}) => {

  return (
    
      <View
        showsVerticalScrollIndicator={false}
        style={styles.container}>
          <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />

        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: '#fff',
            marginBottom: 30,
          }}>
          Transportista
        </Text>
        <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
         Nombre completo
        </Text>

        <InputField
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
        />
        <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
         Correo electronico
        </Text>
        <InputField
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />
         <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
         Contraseña
        </Text>
        <InputField
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
         <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
         Confirmar Contraseña
        </Text>
        <InputField
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
        <CustomButton label={'Registrar'} onPress={() => navigation.navigate('Home')}  />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text 
          style={{
            color: '#fff'
          }}>¿Ya esta registrado?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'orange', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#07092c',
    paddingHorizontal:25
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});
export default RegistrarDos;