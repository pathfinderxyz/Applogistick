import { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput,StyleSheet, TouchableOpacity, } from 'react-native';
import CustomSwitch from './../componentes/CustomSwitch';
import ListItem from './../componentes/ListItem';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


/* const NavigatetoDetails = props => {
  props.navigation.navigate('GameDetails');
} */

const Home = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);


  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />
      <ScrollView>
      <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            marginTop:38
          }}>
           <TouchableOpacity onPress={() => navigation.openDrawer()}>
           <Ionicons
              name="menu"
              size={27}
              color="#fff"
              style={{padding: 14}}
            />
          </TouchableOpacity>
          <Text style={{
            fontSize: 19,
            color:'#fff',
            padding:14,
            }}>
            Inicio
          </Text>
          
        </View>

        
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
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