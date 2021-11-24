import { StatusBar } from 'expo-status-bar';
import { useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black
} from '@expo-google-fonts/montserrat';
import { 
  MeriendaOne_400Regular 
} from '@expo-google-fonts/merienda-one'
import AppLoading from 'expo-app-loading';

import React from 'react';
import {
  Button, Text, TextInput, View, TouchableOpacity, DrawerLayoutAndroid, Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AuthContext, AuthProvider } from './context/auth.context'
import { Routes } from './routes';




export default function App() {

  //Load Google Fonts
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    MeriendaOne_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <AuthProvider>
        <StatusBar 
          animated
          animation="fade"
          // backgroundColor="#ec6035"
          // style="auto"
        />
        <Routes />
      </AuthProvider>
    );
  }
}