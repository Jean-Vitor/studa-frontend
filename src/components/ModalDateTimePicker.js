import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDateInput from './ModalDateInput.js';
import dateFormat from '../config/dateFormat.js';

import styles from '../../styles.module.css'

export default () => {

    const [date, setDate] = useState(null)
    const [mode, setMode] = useState('')
    const [show, setShow] = useState(false)

    const onChange = (e, newDate) => {
        setDate(newDate)
    }

    const day = dateFormat(date, "d mmm. yyyy")
    const hour = dateFormat(date, "H : MM")

    return (
        <>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ModalDateInput content={day} setShow={setShow} setMode={setMode} mode="date" />
                <ModalDateInput content={hour} setShow={setShow} setMode={setMode} mode="time" />
            </View>
            {
                show &&
                <DateTimePicker 
                    value={date || new Date()}
                    onChange={onChange}
                    mode={mode}
                    display="default"
                    minuteInterval={1}
                    is24Hour={true}
                />
            }
        </>
    )
}