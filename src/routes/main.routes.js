import React, { useRef } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerLayoutAndroid } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Inicio from '../screens/Inicio'
import ToDo from '../screens/ToDo'
import Estatisticas from '../screens/Estatisticas'
import Timer from '../screens/Timer'
import Calendario from '../screens/Calendario'
import Perfil from '../screens/Perfil'

import IconInicio from '../../assets/icons/Início.svg';
import IconToDo from '../../assets/icons/ToDo.svg';
import IconEstatisticas from '../../assets/icons/Estatísticas.svg';
import IconTimer from '../../assets/icons/Timer.svg';
import IconCalendario from '../../assets/icons/Calendário.svg';
import IconPerfil from '../../assets/icons/user.svg'

import styles from '../../styles.module.css';


//Tabs
const Tab = createBottomTabNavigator()
const TabsNavigator = ({screenProps: {setVisible, setText, setScreen}}) => {
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
      <Tab.Screen name="Calendario" children={() => <Calendario setVisible={setVisible} setText={setText} setScreen={setScreen} />} 
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


//Header
const StackNavigator = createStackNavigator({
    "Main": {
      screen: TabsNavigator,
      navigationOptions: ({navigation: {getScreenProps}}) => ({
        headerStyle:[styles['mainBar'], styles['header']],
        headerTitle:'Studa!',
        headerTitleStyle:styles['header-title'],
        // headerTitleContainerStyle:{marginTop:12},
        headerLeft:(()=> {
          return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => getScreenProps().drawer.current.openDrawer()}>
              <View style={styles['profile-icon']}>
                  <IconPerfil width={30} height={30} fill="#fff" />
              </View>
            </TouchableOpacity>
          )
        })
      })
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
export const MainNavigator = ({setVisible, setText, setScreen}) => {

    //Drawer
    const drawer = useRef(null);
    const navigationView = () => {
      return (
        <Perfil setVisible={setVisible} setText={setText} setScreen={setScreen} />
      )
    }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={wp('80%')}
            drawerBackgroundColor={'transparent'}
            renderNavigationView={navigationView}
        >
            <MainContainer screenProps={{setVisible, setText, setScreen, drawer}} />
        </DrawerLayoutAndroid>
    )
}

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';