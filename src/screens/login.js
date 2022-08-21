import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './../componentes/CustomButton';
import InputField from './../componentes/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* const NavigatetoHome = props => {
  props.navigation.navigate('Home');
} */

const Login = ({navigation})  => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
       
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        
        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />
        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Entrar"} onPress={() => navigation.navigate('Home')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30
          }}>
          <Text>¿Eres Nuevo?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;