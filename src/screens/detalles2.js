import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detalless = ({navigation, route}) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
     
      <Text 
      style={{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:10
      }}
      >{route.params?.title}
      </Text>
      <Text>DESCRIPCION DEL SERVICIO:</Text>
      <Text style={{
        marginBottom:10
      }}>{route.params?.descripcion}</Text>
      <Text style={{
        marginBottom:10
      }}>OFERTA INICIAL: {route.params?.precio}</Text>
      <Text>PAIS: {route.params?.pais}</Text>
      <Text>CIUDAD:{route.params?.ciudad}</Text>
      <Text style={{
        fontSize:13
      }}>CODIGO #{route.params?.id}</Text>
      
      
    </View>

     
    <TouchableOpacity
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:'#07092c',
          borderRadius: 15,
          marginHorizontal: 25,
    
        }}
        onPress={() => navigation.navigate('Membresia Premium')}>
       
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}>
          Adquirir servicio
        </Text>
        
        <MaterialIcons name="arrow-forward-ios" size={18} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
    marginBottom: 20,
    marginHorizontal: 25,
    backgroundColor:'#fff',
    padding:25,
    borderRadius:15
  },
  background: {
    position: 'absolute',
    borderRadius:15,
    left: 0,
    right: 0,
    top: 0,
    height: 50,
  },
 
});

export default Detalless;