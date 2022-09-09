import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";

import InputField from "./../componentes/InputFliedClaro";
import CustomButton from "./../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";

const CrearAnuncio = props => {

  const [selected, setSelected] = React.useState("");
  const [nombre, setNombre] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [pais, setPais] = useState(null);
  const [pass, setPass] = useState(null);
  const rol = "cliente";

  const data = [
    { key: "Colombia", value: "Colombia" },
    { key: "Venezuela", value: "Venezuela" },
    { key: "Brasil", value: "Brasil" },
    { key: "Peru", value: "Peru" },
    { key: "Mexico", value: "Mexico" },
    { key: "Argentina", value: "Argentina" },
  ];

  const [Error, setError] = useState(false);

  const validardatos = () => {
    if (nombre !== null && correo !== null &&  selected !== null && pass !== null ) {
      RegistrarCliente();
    } else {
      setError(true);
    }
  };

  const RegistrarCliente = () => {
    axios
      .post(url, { nombre, correo, selected, pass, rol })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("GraciasRegistrar");
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <ScrollView>
    <View showsVerticalScrollIndicator={false} style={styles.container}>
    
   
      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          color: "#000",
          marginBottom: 30,
          marginTop: 30,
        }}
      >
       Introduzca los datos correspondientes a su anuncio:
      </Text>
      {Error && (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#f8e44b",
            marginBottom: 30,
          }}
        >
          ¡Error, por favor rellene todos los campos!
        </Text>
      )}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          marginBottom: 5,
        }}
      >
        Titulo de la solicitud
      </Text>

      <InputField 
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          marginBottom: 5,
        }}
      >
        Descripcion de la solicitud
      </Text>
      <InputField
        keyboardType="email-address"
        value={correo}
        onChangeText={(text) => setCorreo(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          marginBottom: 5,
        }}
      >
        País de la solicitud
      </Text>

      <SelectList
        setSelected={setSelected}
        data={data}
        searchPlaceholder="Seleccione"
        arrowicon={<Ionicons name="chevron-down" size={20} color={"#000"} />}
        searchicon={
          <Ionicons name="ios-lock-closed-outline" size={20} color={"#000"} />
        }
        search={false}
        boxStyles={{
          borderRadius: 5,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderColor: "#ccc",
          marginBottom: 15,
        }} //override default styles
        inputStyles={{ color: "#000" }}
        dropdownTextStyles={{ color: "#000" }}
        defaultOption={{ key: "0", value: "Seleccione un pais" }} //default selected option
      />

      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          marginBottom: 5,
        }}
      >
        Ciudad 
      </Text>
      <InputField
        inputType="password"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          marginBottom: 5,
        }}
      >
      Costo de la solicitud
      </Text>
      <InputField 
        inputType="password"
      />
      <CustomButton label={"Registrar Anuncio"} onPress={validardatos} />

      
      <Text style={{
         fontSize: 14,
         color:'#000',
         marginLeft:14,
         marginRight:14,
         marginBottom:15,
         marginTop:20
         }}>
         Para mas informacion puede comunicarse a nuestro correo info@applogistick.com
       </Text>
       
    </View>
    </ScrollView>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
});
export default CrearAnuncio;