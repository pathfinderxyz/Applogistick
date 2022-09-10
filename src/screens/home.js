import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import CustomSwitch from './../componentes/CustomSwitch';
import ListItemHome from './../componentes/ListemHome';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


/* const NavigatetoDetails = props => {
  props.navigation.navigate('GameDetails');
} */
const url = "https://apilogistick.iawork.tk/public/anuncios";

const Home = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(url).then(response => {
      setData(response.data);
      console.log(response.data);
    })
  }

  console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient

        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          marginTop: 38
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={27}
            color="#fff"
            style={{ padding: 14 }}
          />
          
        </TouchableOpacity>
        <Text style={{
            fontSize: 19,
            color: '#fff',
            padding: 14,
          }}>
            Inicio
          </Text>


        <TouchableOpacity>
        <MaterialIcons
            name="filter-alt"
            size={24}
            color="#fff"
            style={{ padding: 14 }}
          />
        </TouchableOpacity>

      </View>
      <ScrollView>

        <Text style={{
          fontSize: 22,
          color: '#fff',
          padding: 14,
        }}>
          Servicios disponibles
        </Text>
        <Text style={{
          fontSize: 15,
          color: '#fff',
          marginLeft: 14,
          marginBottom: 20,
        }}>
          Encuentre el servicio que desee
        </Text>

        {gamesTab == 1 &&
          data.sort((a, b) => b.id - a.id).map(item => (
            <ListItemHome
              key={item.id}
              title={item.nombre}
              subTitle={item.descripcion}
              pais={item.pais}
              ciudad={item.ciudad}
              price={item.precio}
              onPress={() =>
                navigation.navigate('Detalles', {
                  title: item.title,
                  id: item.id,
                })
              }
            />

          ))}


      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#07092c'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});

export default Home;