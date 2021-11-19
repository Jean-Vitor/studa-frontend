import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import styles from '../../styles.module.css'

export default ({content, setShow, setMode, mode, setDateChanged, dateChanged}) => {

    const [isFocused, setFocused] = useState(false)

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)

        if (setDateChanged !== undefined && dateChanged !== undefined)
        setDateChanged(dateChanged)
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={() => setFocused(true)}
            onPressOut={() => setFocused(false)}
            onPress={() => (showMode(mode))}
        >
            <View style={[styles['modal-input'], {width:'48%'}, isFocused && {borderColor:"#e66049"}]}>
                <Text style={[styles['font-default'], styles['input-text'], {textAlignVertical:'center'}]}>{content}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}