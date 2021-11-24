import React, { useState, useContext } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/auth.context';
import { MainNavigator } from './main.routes';
import { AuthNavigator } from './auth.routes';
import ModalBox from '../components/ModalBox';


export const Routes = () => {

    const [isVisible, setVisible] = useState(false)
    const [text, setText] = useState('')
    const [screen, setScreen] = useState('')


    //Modal
    const ModalComp = () => {
        return <ModalBox 
            isVisible={isVisible} 
            setVisible={setVisible} 
            text={text}
            screen={screen}
            />
    }

    const { signed } = useContext(AuthContext)
    console.log(signed)

    return (
        <NavigationContainer>
          {
            (isVisible) && <ModalComp />
          }
          {
            (signed) ? <MainNavigator setVisible={setVisible} setText={setText} setScreen={setScreen} /> : <AuthNavigator />
          }
        </NavigationContainer>
    )
}