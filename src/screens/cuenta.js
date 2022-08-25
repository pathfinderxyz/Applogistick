import * as React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Cuenta = ({navigation}) => {
  return (
    <View style={{marginHorizontal:5,marginTop: 20}}>

    <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Detalless')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Mis datos
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Detalless')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Cambiar Email
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Detalless')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Cambiar contraseña
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Detalless')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Notificaciones
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Detalless')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Historial de servicios
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
         Salir
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>
    </View>
  );
}
export default Cuenta;