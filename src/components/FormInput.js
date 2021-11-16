import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css';

import { LinearGradient } from 'expo-linear-gradient';
import IconNome from '../../assets/icons/user.svg'
import IconEmail from '../../assets/icons/email.svg'
import IconSenha from '../../assets/icons/password.svg'
import IconEyeOff from '../../assets/icons/eye-off.svg'
import IconEye from '../../assets/icons/eye.svg'

export default ({text, type, secure}) => {

    const [isVisible, setVisible] = useState(true)

    const handlePasswordVisibility = () => {
        setVisible(!isVisible)
    }

    const icons = {
        Email: <IconEmail width={30} height={30} fill="#fff" />,
        Nome: <IconNome width={30} height={30} fill="#fff" />,
        Senha: <IconSenha width={30} height={30} fill="#fff" />
    }
    
    const icon = icons[text];

    return (
        <View style={[styles['form-input'], {width: (wp('100%') - 60)}]}>
            <LinearGradient 
                style={styles['gradientBg']}
                colors={['#E64949', '#E67849']}>
                    {icon}
            </LinearGradient>
            <TextInput style={[styles['input'], styles['font-default']]} keyboardType={type || 'default'} secureTextEntry={secure && isVisible} placeholder={text} placeholderTextColor='#646464' textAlign="center" />
            {(text === 'Senha' && isVisible) && <IconEyeOff style={styles['passIcon']} width={30} height={30} fill="#9B9B9B" onPress={handlePasswordVisibility} />}
            
            {(text === 'Senha' && !isVisible) && <IconEye style={styles['passIcon']} width={30} height={30} fill="#9B9B9B" onPress={handlePasswordVisibility} />}
        </View>
    )
}