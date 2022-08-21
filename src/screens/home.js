import { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import CustomSwitch from './../componentes/CustomSwitch';
import ListItem from './../componentes/ListItem';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import BannerSlider from '../componentes/BannerSlider';
import CarouselCards from './../componentes/CaroulseCards';


/* const NavigatetoDetails = props => {
  props.navigation.navigate('GameDetails');
} */

const Home = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            option3="Promocion"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        <CarouselCards />

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
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 3 &&
          promo.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;