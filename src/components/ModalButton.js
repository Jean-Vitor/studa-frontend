import React from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles.module.css'

export default ({text, outline}) => {
    return (
        <View style={[styles['modal-btn'], outline && {backgroundColor:'transparent', borderColor:'#e66049', borderWidth:2}]}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(outline ? 'rgba(230, 96, 73, .2)' : 'rgba(0, 0, 0, .2)', true)}>
                <View style={{padding:12}}>
                    <Text style={[styles['btn-text'], outline && {color:'#e66049'}]}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}