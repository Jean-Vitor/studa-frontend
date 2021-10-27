import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import LinearGradient from 'react-native-linear-gradient';

export default ({text}) => {
    return (
        <View style={{width: (wp('100%') - 60)}}>
            <TouchableOpacity 
                style={styles['gradientBtn-wrapper']}>
                <LinearGradient 
                    style={styles['gradientBtn']}
                    colors={['#E64949', '#E67849']} >
                        <Text style={styles['btn-text']}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}