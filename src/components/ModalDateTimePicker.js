import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDateInput from './ModalDateInput.js';
import dateFormat from '../config/dateFormat.js';

import styles from '../../styles.module.css'

export default ({cycle, setField, fields}) => {

    const [date, setDate] = useState(null)
    const [mode, setMode] = useState('')
    const [show, setShow] = useState(false)

    const [initDate, setInitDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [dateChanged, setDateChanged] = useState('')

    const formattedDate = dateFormat(new Date(), 'isoDateTime')
    const dateToDb = formattedDate.substring(0, formattedDate.length - 5).concat('-0300')
    console.log(dateToDb)
    if (cycle) {
        if (dateChanged == "inicial") {
            setField(Object.assign(fields, {startDate: dateToDb}))
        }
        else {
            setField(Object.assign(fields, {endDate: dateToDb}))
        }
    }
    else {
        setField(Object.assign(fields, {conclusionDate: dateToDb}))
    }

    const onChange = (e, newDate) => {
        const formattedDate = dateFormat(newDate, 'isoDateTime')
        const dateToDb = formattedDate.substring(0, formattedDate.length - 5).concat('-0300')
        console.log(dateToDb)

        if (cycle) {
            if (dateChanged == "inicial") {
                setInitDate(newDate)
                setField(Object.assign(fields, {startDate: dateToDb}))
            }
            else {
                setEndDate(newDate)
                setField(Object.assign(fields, {endDate: dateToDb}))
            }
        }
        else {
            setDate(newDate)
            setField(Object.assign(fields, {conclusionDate: dateToDb}))
        }
    }

    const initDay = dateFormat(initDate, "d mmm. yyyy")
    const endDay = dateFormat(endDate, "d mmm. yyyy")
    const initHour = dateFormat(initDate, "H : MM")
    const endHour = dateFormat(endDate, "H : MM")

    const day = dateFormat(date, "d mmm. yyyy")
    const hour = dateFormat(date, "H : MM")

    return (
        <>
            {
                (cycle) ?
                <>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <ModalDateInput content={initDay} setShow={setShow} setMode={setMode} mode="date" setDateChanged={setDateChanged} dateChanged="inicial" />
                        <ModalDateInput content={endDay} setShow={setShow} setMode={setMode} mode="date" setDateChanged={setDateChanged} dateChanged="final" />
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <ModalDateInput content={initHour} setShow={setShow} setMode={setMode} mode="time" setDateChanged={setDateChanged} dateChanged="inicial" />
                        <ModalDateInput content={endHour} setShow={setShow} setMode={setMode} mode="time" setDateChanged={setDateChanged} dateChanged="final" />
                    </View>
                </>
                :
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <ModalDateInput content={day} setShow={setShow} setMode={setMode} mode="date" />
                    <ModalDateInput content={hour} setShow={setShow} setMode={setMode} mode="time" />
                </View>
            }
            {
                show &&
                <DateTimePicker 
                    value={(((dateChanged == "inicial") ?  initDate : endDate) || date) || new Date()}
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