import 'react-native-gesture-handler';
import './ignoreWarnings';
import * as React from 'react';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/navigation/start';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/Appnav';


const Stack = createNativeStackNavigator();
function App() {
  return (


    <AuthProvider>
      <AppNav />
    </AuthProvider>

  );
}

export default App;