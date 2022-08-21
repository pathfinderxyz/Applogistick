import React from 'react'
import { View, Text } from 'react-native'

const GameDetailsScreen = ({navigation, route}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Detalles del Juego {route.params?.id}</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default GameDetailsScreen;
