import { StatusBar } from 'expo-status-bar';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
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

import React, { useState, useEffect, useRef } from 'react';
import {
  Button, Text, TextInput, View, TouchableOpacity, DrawerLayoutAndroid, Dimensions
} from 'react-native';
import { createSwitchNavigator } from "@react-navigation/compat";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Inicio from './screens/Inicio'
import ToDo from './screens/ToDo'
import Estatisticas from './screens/Estatisticas'
import Timer from './screens/Timer'
import Calendario from './screens/Calendario'

import IconInicio from '../assets/icons/Início.svg';
import IconToDo from '../assets/icons/ToDo.svg';
import IconEstatisticas from '../assets/icons/Estatísticas.svg';
import IconTimer from '../assets/icons/Timer.svg';
import IconCalendario from '../assets/icons/Calendário.svg';
import IconPerfil from '../assets/icons/user.svg'

import styles from '../styles.module.css';
import SwitchDarkMode from './components/SwitchDarkMode';
import Perfil from './screens/Perfil';
import ModalBox from './components/ModalBox';


const AuthNavigator = createSwitchNavigator({
  "Login": {screen: Login},
  "Cadastro": {screen: Cadastro}
},
{
  initialRouteName: "Login"
})



export default function App() {
  const [isVisible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [screen, setScreen] = useState('')

  //Tabs
  const Tab = createBottomTabNavigator()
  const TabsNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Inicio"
        backBehavior="history"
        tabBarOptions={{
          showLabel:false,
          activeTintColor:"#FFF",
          inactiveTintColor:"#BB473A",
          style:styles['mainBar']
        }}
      >
        <Tab.Screen name="Inicio" children={() => <Inicio />}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <IconInicio width={25} height={25} fill={color} />
              )
            }
          }}
        />
        <Tab.Screen name="ToDo" children={() => <ToDo setVisible={setVisible} setText={setText} setScreen={setScreen} />}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <IconToDo width={25} height={25} fill={color} />
              )
            }
          }}
        />
        <Tab.Screen name="Estatisticas" children={() => <Estatisticas />}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <IconEstatisticas width={25} height={25} fill={color} />
              )
            }
          }}
        />
        <Tab.Screen name="Timer" children={() => <Timer />}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <IconTimer width={25} height={25} fill={color} />
              )
            }
          }}
        />
        <Tab.Screen name="Calendario" children={() => <Calendario />} 
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <IconCalendario width={25} height={25} fill={color} />
              )
            }
          }}
        />
      </Tab.Navigator>
    )
  }


  //Drawer
  const drawer = useRef(null);
  const navigationView = () => {
    return (
      <Perfil setVisible={setVisible} setText={setText} setScreen={setScreen} />
    )
  }


  //Modal
  const ModalComp = () => {
    return <ModalBox 
      isVisible={isVisible} 
      setVisible={setVisible} 
      text={text}
      screen={screen}
    />
  }




  //Header
  const StackNavigator = createStackNavigator({
    "Main": {
      screen: TabsNavigator, 
      navigationOptions:{
        headerStyle:[styles['mainBar'], styles['header']],
        headerTitle:'Studa!',
        headerTitleStyle:styles['header-title'],
        // headerTitleContainerStyle:{marginTop:12},
        headerLeft:(()=> {
          return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => drawer.current.openDrawer()}>
              <View style={styles['profile-icon']}>
                  <IconPerfil width={30} height={30} fill="#fff" />
              </View>
            </TouchableOpacity>
          )
        }),
        headerRight:(()=> {
          return <SwitchDarkMode />
        })
      }
    }
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
    },
  })
  const MainContainer = createAppContainer(StackNavigator)


  //Main
  const MainNavigator = () => {
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={wp('80%')}
        drawerBackgroundColor={'transparent'}
        renderNavigationView={navigationView}
      >
        <MainContainer />
      </DrawerLayoutAndroid>
    )
  }

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#fff';

  const [isAuth, setAuth] = useState(false)

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
      <>
        <StatusBar 
          animated
          animation="fade"
          // backgroundColor="#ec6035"
          // style="auto"
        />
        <NavigationContainer>
          {
            (isVisible) && <ModalComp />
          }
          {
            (!isAuth) ? <MainNavigator /> : <AuthNavigator />
          }
        </NavigationContainer>
      </>
    );
  }
}