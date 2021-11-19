import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import IconEdit from '../../assets/icons/edit.svg'
import IconTrash from '../../assets/icons/trash.svg'
import ActivityItem from './ActivityItem'

import styles from '../../styles.module.css'

export default ({color}) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <ActivityItem titulo="Ciclo 1" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={color} btns={true} />
            <View style={{position:'absolute', right:0, flexDirection:'row', height:'100%'}}>
                <TouchableOpacity
                    style={[styles['list-actionBtn'], {backgroundColor:'#E4E4E4', borderTopLeftRadius:10, borderBottomLeftRadius:10, height:84}]}
                    activeOpacity={0.6}
                >
                    <IconEdit width={24} height={24} fill="#B0B0B0" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles['list-actionBtn'], {backgroundColor:'#E47D7D', borderTopRightRadius:10, borderBottomRightRadius:10, height:84}]}
                    activeOpacity={0.6}
                >
                    <IconTrash width={24} height={24} fill="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}