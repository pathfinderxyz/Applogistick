import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigatetoHome = props => {
    props.navigation.navigate('Home');
}

const Metodos = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Metodos</Text>
     
    </View>
  );
}
export default Metodos;