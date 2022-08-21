import 'react-native-gesture-handler';
import './ignoreWarnings';
import * as React from 'react';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/navigation/start';


const Stack = createNativeStackNavigator();
function App() {
  return (    
    <NavigationContainer>
      <Start />
   </NavigationContainer>
    
  );
}

export default App;