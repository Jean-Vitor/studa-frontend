import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from '../../styles.module.css'

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default ({itemTxt, date, hour}) => {

    const [checkboxState, setCheckboxState] = useState(false)

    return (
        <View style={styles['list-item']}>
            <BouncyCheckbox
                size={25}
                fillColor="#E65949"
                text={itemTxt}
                textStyle={{ fontFamily:'Montserrat_500Medium', color:'#000' }}
                iconStyle={{ borderColor:"#E65949", borderRadius:8 }}
                isChecked={checkboxState}
                onPress={() => setCheckboxState(!checkboxState)}
                hitSlop={{ bottom: 45, right: 40 }}
            />
            <View style={styles['item-stats']}>
                <Text style={[styles['font-default'], styles['item-date']]}>{date}</Text>
                <Text style={[styles['font-default'], {zIndex:-1}]}>{hour}</Text>
            </View>
        </View>
    )
}