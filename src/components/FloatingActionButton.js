import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from '../../styles.module.css'

import { LinearGradient } from 'expo-linear-gradient';
import IconPlus from '../../assets/icons/plus.svg'

export default ({onPress, setText, text, setScreen, screen}) => {
    return (
        <TouchableOpacity
            style={styles['list-addBtn']}
            activeOpacity={0.8}
            onPress={() => (onPress(true), setText(text), setScreen(screen))}>
            <LinearGradient 
                style={{padding:10, borderRadius:20}}
                colors={['#E64949', '#E67849']} >
                    <IconPlus width={40} height={40} fill="#FFF" />
            </LinearGradient>
        </TouchableOpacity>
    )
}