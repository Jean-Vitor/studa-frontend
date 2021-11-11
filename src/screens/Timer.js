import React from 'react'
import { ScrollView, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import { createSwitchNavigator } from "@react-navigation/compat";
import { NavigationContainer } from '@react-navigation/native';
import TimerPomodoro from './TimerPomodoro';
import TimerShortB from './TimerShortB';
import TimerLongB from './TimerLongB';

const TimerTypes = createSwitchNavigator({
    "Timer1": {screen: TimerPomodoro},
    "Timer2": {screen: TimerShortB},
    "Timer3": {screen: TimerLongB}
},
{
    initialRouteName: "Timer1"
})

export default () => {

    return <TimerTypes />
}