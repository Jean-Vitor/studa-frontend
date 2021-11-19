import React from 'react'
import { Text, View } from 'react-native'

import styles from '../../styles.module.css'

export default ({titulo, mainStat, secondStat, colorful, bgColor, btns}) => {
    return (
        <View style={[styles['actv-item'], btns && {width:'60%'}, colorful ? {backgroundColor:bgColor} : {backgroundColor:"rgba(224, 224, 224, .3)"}]}>
            <Text style={{fontFamily:'Montserrat_500Medium', fontSize:16, color:'#000'}}>{titulo}</Text>
            <View style={[styles['item-stats'], {marginLeft:0}]}>
                <Text style={[styles['font-default'], styles['item-date'], colorful && {backgroundColor:"#fff", color:"#000"}]}>{mainStat}</Text>
                <Text style={[styles['font-default']]}>{secondStat}</Text>
            </View>
        </View>
    )
}