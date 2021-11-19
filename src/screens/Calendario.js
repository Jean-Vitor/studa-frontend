import React, { useState, useRef } from 'react'
import { ScrollView, Text, View, TouchableNativeFeedback } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Calendar, Agenda, LocaleConfig } from 'react-native-calendars'
import IconArrow from '../../assets/icons/arrow.svg'
import dateFormat from '../config/dateFormat.js'
import CalendarBottomSheet from '../components/CalendarBottomSheet';

import styles from '../../styles.module.css'

LocaleConfig.locales['pt-BR'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-BR'

export default ({setVisible, setText, setScreen}) => {

    const [selected, setSelected] = useState(dateFormat(new Date(), "yyyy-mm-dd"))
    const [behaviour, setBehaviour] = useState('')

    const onDayPress = day => {
        setSelected(day.dateString)
        setBehaviour("Day")
        bottomSheet.current.collapse()
    }

    //BottomSheet
    const bottomSheet = useRef(null)

    return (
        <ScrollView>
            <View style={[styles['main-container'], styles['container-wrapper'], {height:hp('100%') - 170, justifyContent:'space-between'}]}>
                <Calendar 
                    monthFormat={"MMMM '\de' yyyy"}
                    renderArrow={(direction) => <IconArrow width={16} height={16} fill="#e66049" style={(direction == "left") ? {transform:[{rotate: '-90deg'}]} : {transform:[{rotate: '90deg'}]}} />}
                    renderHeader={(date) => <Text style={{marginTop:-2, fontFamily:"Montserrat_700Bold", fontSize:16}}>{dateFormat(date, "mmmm '\de' yyyy")}</Text>}
                    style={{width:wp('100%') - 60}}
                    theme={{
                        // textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#E64949',
                        selectedDayTextColor: '#fff',
                        todayTextColor: '#E64949',
                        // textDisabledColor: '#d9e1e8',
                        dotColor: '#E64949',
                        selectedDotColor: '#fff',
                        monthTextColor: '#000',
                        textDayFontFamily: 'Montserrat_400Regular',
                        textDayFontSize: 16,
                    }}
                    markingType={'dot'}
                    markedDates={{
                        [selected]: {selected:true, disableTouchEvent:true},
                        '2021-11-18': (selected == '2021-11-18') ? {marked:true, selected:true, disableTouchEvent:true, dotColor:'#fff'} : {marked:true},
                        '2021-11-20': (selected == '2021-11-20') ? {marked:true, selected:true, disableTouchEvent:true, dotColor:'#fff'} : {marked:true},
                        '2021-11-30': (selected == '2021-11-30') ? {marked:true, selected:true, disableTouchEvent:true, dotColor:'#fff'} : {marked:true},
                    }}
                    onDayPress={onDayPress}
                />
                
                <View style={[{width:'100%', borderRadius:8, backgroundColor:"#e66049"}]}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', true)} onPress={() => (setBehaviour("Button"), bottomSheet.current.collapse())}>
                        <View style={{padding:16}}>
                            <Text style={styles['btn-text']}>Visualizar ciclos de estudos</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

            <CalendarBottomSheet 
                bottomSheet={bottomSheet}
                behaviour={behaviour}
                date={selected}
                setVisible={setVisible}
                setText={setText}
                setScreen={setScreen}
            />
        </ScrollView>
    )
}