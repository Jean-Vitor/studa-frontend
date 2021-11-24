import React, { useContext } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import { LinearGradient } from 'expo-linear-gradient';
import { register } from '../services/auth'
import { AuthContext } from '../context/auth.context';

export default ({text, onPress, fields}) => {

    const { signIn } = useContext(AuthContext)
    const handler = (text == "Cadastro") ? register : signIn

    return (
        <View style={{width: (wp('100%') - 60)}}>
            <TouchableOpacity 
                style={styles['gradientBtn-wrapper']}
                activeOpacity={0.6}
                onPress={() => (handler(fields), (onPress !== undefined) ? onPress() : null)}
                >
                <LinearGradient 
                    style={styles['gradientBtn']}
                    colors={['#E64949', '#E67849']} >
                        <Text style={styles['btn-text']}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}