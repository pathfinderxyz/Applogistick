import React from 'react'
import { View, Text } from 'react-native'

const Detalless = ({navigation, route}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>AppLogistick {route.params?.id}</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default Detalless;