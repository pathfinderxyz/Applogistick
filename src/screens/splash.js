import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
/* import {Colors} from '../../src/constants' */


const Splash = ({navigation}) => {

   setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000)
    return (
       <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <Image source={require('./../assets/img/control.png')} style={{width:100,height:100}}  />    
            <Text style={{fontSize:20}} >Superplay</Text>
        </View>
    )
}

export default Splash;