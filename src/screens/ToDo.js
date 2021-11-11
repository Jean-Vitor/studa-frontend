import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import dateFormat from 'dateformat'

import styles from '../../styles.module.css'

import IconArrow from '../../assets/icons/arrow.svg'
import IconFilter from '../../assets/icons/filter.svg'
import IconEdit from '../../assets/icons/edit.svg'
import IconTrash from '../../assets/icons/trash.svg'
import ItemCheckBox from '../components/ItemCheckBox';
import FloatingActionButton from '../components/FloatingActionButton';
import Swipeable from 'react-native-swipeable';
import SwipeableList from '../components/SwipeableList';

export default () => {
    //Date format
    const today = new Date()
    let month = dateFormat(today, "mmmm")
    switch (month) {
        case "January":
            month = "Janeiro"
            break;
        case "February":
            month = "Fevereiro"
            break;
        case "March":
            month = "Março"
            break;
        case "April":
            month = "Abril"
            break;
        case "May":
            month = "Maio"
            break;
        case "June":
            month = "Junho"
            break;
        case "July":
            month = "Julho"
            break;
        case "August":
            month = "Agosto"
            break;
        case "September":
            month = "Setembro"
            break;
        case "October":
            month = "Outubro"
            break;
        case "November":
            month = "Novembro"
            break;
        case "December":
            month = "Dezembro"
            break;
    }
    const date = `${dateFormat(today, "d '\de' ") + month + dateFormat(today, " '\de' yyyy")}`
    
    const [enabled, setEnabled] = useState(true)

    return (
        <>
            <ScrollView>
                <View style={[styles['main-container'], styles['container-wrapper']]}>
                    <Text style={{width:'100%', fontFamily:"Montserrat_500Medium", textAlign:'left', fontSize:20, color:'#949494'}}>Hoje,</Text>
                    <Text style={{width:'100%', fontFamily:"Montserrat_700Bold", textAlign:'left', fontSize:20}}>{date}</Text>

                    <View style={styles['list-header']}>
                        <Text style={[styles['font-default'], {fontSize:20}]}>Lista</Text>
                        <Text style={[styles['font-default'], styles['list-count'], {fontSize:18}]}>10</Text>
                        <View style={styles['list-headerIcons']}>
                            <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                                <IconFilter width={18} height={18} fill="#7B7B7B" />
                            </TouchableOpacity>
                            <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                            onPress={() => setEnabled(!enabled)}>
                                <IconArrow width={18} height={18} fill="#7B7B7B" style={!enabled && {transform:[{rotate: '180deg'}]}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        (enabled) ? 
                            <SwipeableList />
                        : false
                    }
                </View>
            </ScrollView>
            <FloatingActionButton />
        </>
    )
}   