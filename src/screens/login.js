import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './../componentes/CustomButton';
import InputField from './../componentes/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

/* const NavigatetoHome = props => {
  props.navigation.navigate('Home');
} */

const Login = ({navigation})  => {
  return (
    
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 30,
          }}>
          Iniciar sesion
        </Text>
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
          fieldButtonLabel={"Olvidaste?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Entrar"} onPress={() => navigation.navigate('Home')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text
          style={{
            color: '#fff'
          }}>¿Eres Nuevo?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeleccionarRegistro')}>
            <Text style={{color: 'orange', fontWeight: '700'}}> Registrate</Text>
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
    paddingHorizontal:25,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});
export default Login;