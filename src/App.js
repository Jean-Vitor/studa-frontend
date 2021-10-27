import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import { createSwitchNavigator } from "@react-navigation/compat";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Inicio from './screens/Inicio';
import ToDo from './screens/ToDo';

import styles from '../styles.module.css';

const AuthNavigator = createSwitchNavigator({
  "Login": {screen: Login},
  "Cadastro": {screen: Cadastro}
},
{
  initialRouteName: "Login"
})

const Tab = createBottomTabNavigator()
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="ToDo" component={ToDo} />
    </Tab.Navigator>
  )
}


export default function App() {

  const [isAuth, setAuth] = useState(false)

  return (
    <>
      <StatusBar 
        animated
        animation="fade"
        // backgroundColor="#ec6035"
        // style="auto"
      />
      <NavigationContainer>
        {
          (!isAuth) ? <MainNavigator /> :
          <AuthNavigator />
        }
      </NavigationContainer>
    </>
  );
}