import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Button, TouchableNativeFeedback } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import IconArrow from '../../assets/icons/arrow.svg'
import IconPlay from '../../assets/icons/play.svg'
import IconPause from '../../assets/icons/pause.svg'
import IconStop from '../../assets/icons/stop.svg'

const getTimer = (remainingTime) => {
    var date = new Date(null);
    date.setSeconds(remainingTime); 
    const SECONDS_HOUR = 3600;
    if (remainingTime === SECONDS_HOUR) return '60:00';
    return date.toISOString().substr(14, 5);
}


export default ({navigation : {navigate}}) => {
    const [time, setTime] = useState(25)
    const [isPlaying, setIsPlaying] = useState(false)
    const [key, setKey] = useState(true)
    
    const testMinValue = () => time > 5
    const testMaxValue = () => time < 60

    return (
        <ScrollView>
            <View style={[styles['main-container'], styles['container-wrapper']]}>
                <View style={styles['timer-duration']}>
                    <Text style={[styles['font-default'], {fontSize:18}]}>Tempo:</Text>
                    <View style={styles['numeric-input']}>
                        <TouchableOpacity onPress={() => {testMinValue() && (setTime(current => current - 1), setKey(prevKey => ++prevKey))}} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                            <IconArrow width={16} height={16} fill="#7B7B7B" style={{transform:[{rotate: '-90deg'}]}} />
                        </TouchableOpacity>
                        <Text style={[styles['font-default'], {fontSize:18, width:100, textAlign:'center'}]}>{time}min</Text>
                        <TouchableOpacity onPress={() => {testMaxValue() && (setTime(current => current + 1), setKey(prevKey => ++prevKey))}} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                            <IconArrow width={16} height={16} fill="#7B7B7B" style={{transform:[{rotate: '90deg'}]}} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles['timer-type']}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text style={[styles['font-default'], styles['type-text'], styles['typeSelected']]}>Pomodoro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Timer2')} activeOpacity={0.5}>
                        <Text style={[styles['font-default'], styles['type-text']]}>Short break</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Timer3')} activeOpacity={0.5}>
                        <Text style={[styles['font-default'], styles['type-text']]}>Long break</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles['countdown-wrapper']}>
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        key={key}
                        duration={time * 60}
                        colors={[
                        ['#E64949'],
                        ['#E67849'],
                        ]}
                        onComplete={() => [true]}
                        size={wp('60%')}
                        strokeWidth={8}
                        isLinearGradient
                    >
                    {({ remainingTime }) => (
                        <Text style={{ color: '#E64949', fontSize: 40 }}>
                            {getTimer(remainingTime)}
                        </Text>
                    )}
                    </CountdownCircleTimer>
                </View>
                <View style={styles['timer-btns']}>
                    {/* Play/Pause */}
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .1)', false, 39)} 
                        onPress={() => setIsPlaying(prev => !prev)}
                    >
                        <View style={[styles['actionBtn'], {backgroundColor:'#FF8C80'}]}>
                            {
                                (isPlaying) ? <IconPause width={35} height={35} fill="#A64035" /> :
                                <IconPlay width={35} height={35} fill="#A64035" />
                            }
                        </View>
                    </TouchableNativeFeedback>
                    {/* Stop */}
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255, 140, 127, .2)', false, 39)} 
                        onPress={() => setKey(prevKey => ++prevKey)}
                    >
                        <View style={styles['actionBtn']}>
                            <IconStop width={35} height={35} fill="#FF8C7F" />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </ScrollView>
    )
}