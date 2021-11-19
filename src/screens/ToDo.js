import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, View, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import dateFormat from '../config/dateFormat.js'

import styles from '../../styles.module.css'

import IconArrow from '../../assets/icons/arrow.svg'
import IconFilter from '../../assets/icons/filter.svg'
import FloatingActionButton from '../components/FloatingActionButton';
import SwipeableList from '../components/SwipeableList';

export default ({setVisible, setText, setScreen}) => {
    const today = new Date();
    const month = dateFormat(today, "mmmm");
    const year = dateFormat(today, " '\de' yyyy");
    const day = dateFormat(today, "d '\de' ");
    const date = `${day + month + year}`;
    
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
                        (enabled) && <SwipeableList usage="checklist" />
                    }
                </View>
            </ScrollView>
            <FloatingActionButton onPress={setVisible} setText={setText} text="Adicionar Item" setScreen={setScreen} screen="ToDoAdd" />
        </>
    )
}   