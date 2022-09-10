import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigatetoHome = props => {
    props.navigation.navigate('Home');
}

const AnuncioRegistrado = props => {
  return (
 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>El anuncio se registro con exito, vealo en la seccion de anuncios</Text>
     
    </View>
  
  );
}
export default AnuncioRegistrado;