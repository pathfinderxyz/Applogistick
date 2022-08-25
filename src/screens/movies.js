import * as React from 'react';
import { View, Text,Button,TextInput,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "@expo/vector-icons/Ionicons";

const NavigatetoHome = props => {
    props.navigation.navigate('Home');
}


const Movies = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:20,
            marginBottom:20,
            marginTop:25,
            }}>
            Encuentre el servicio que desee:
          </Text>
    <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            
            marginLeft:20,
            marginRight:20
          }}>
          
          <Ionicons
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="buscar servicio" />
        </View>
        </SafeAreaView>
  );
}
export default Movies;