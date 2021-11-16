import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from '../../styles.module.css'

import IconNome from '../../assets/icons/edit-name.svg'
import IconSenha from '../../assets/icons/edit-pasw.svg'
import IconEyeOff from '../../assets/icons/eye-off.svg'
import IconEye from '../../assets/icons/eye.svg'

export default ({screen, text, secure}) => {

    const [isVisible, setVisible] = useState(true)
    const [isFocused, setFocused] = useState(false)

    const handlePasswordVisibility = () => {
        setVisible(!isVisible)
    }

    let icon
    if (screen === 'Nome' || screen === 'Titulo' || screen === 'Descricao') {
        icon = <IconNome style={styles['input-icon']} width={30} height={30} fill={(isFocused) ? "#e66049" : "#bebebe"} />
    }
    else if (screen === 'Senha') {
        icon = <IconSenha style={styles['input-icon']} width={30} height={30} fill={(isFocused) ? "#e66049" : "#bebebe"} />
    }

    return (
        <View style={[styles['modal-input'], isFocused && {borderColor:"#e66049"}]}>
            {icon}
            <TextInput style={[styles['input'], styles['font-default'], {paddingRight:60, height:60}]} onPressIn={() => setFocused(true)} onEndEditing={() => setFocused(false)} keyboardType="default" secureTextEntry={secure && isVisible} placeholder={text} placeholderTextColor='#646464' textAlign="left" />
            {(screen === 'Senha' && isVisible) && <IconEyeOff style={styles['passIcon']} width={30} height={30} fill="#9B9B9B" onPress={handlePasswordVisibility} />}
            {(screen === 'Senha' && !isVisible) && <IconEye style={styles['passIcon']} width={30} height={30} fill="#9B9B9B" onPress={handlePasswordVisibility} />}
        </View>
    )
}