import React, { useState } from 'react'
import { Image, Modal, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

import styles from '../../styles.module.css'

import { LinearGradient } from 'expo-linear-gradient';
import IconNome from '../../assets/icons/edit-name.svg'
import IconSenha from '../../assets/icons/edit-pasw.svg'
import IconLogOut from '../../assets/icons/log-out.svg'
import IconArrow from '../../assets/icons/arrow.svg'

export default () => {
    const [isVisible1, setVisible1] = useState(false)

    const ModalPic = () => {
        return (
            <Modal
                isVisible={isVisible1}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View>
                    <TextInput />
                </View>
            </Modal>
        )
    }
    
    const ModalName = () => {
        
    }
    
    const ModalPasw = () => {
    
    }

    return (
            <View style={styles['drawer']}>
                <View style={{alignItems:'center'}}>
                    <View style={styles['icon-parent']}>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} activeOpacity={0.6}>
                            <View style={styles['icon-outline']}/>
                            <Image source={require('../../assets/img/icon1.jpg')} style={styles['icon']} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles['profile-name']}>Alberto da Silva</Text>
                    <Text style={[styles['font-default'], {marginBottom:40}]}>alberto.silva@gmail.com</Text>

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)} onPress={() => setVisible1(!isVisible1)}>
                        <View style={styles['profile-btn']}>
                            <IconNome width={30} height={30} fill="#000" />
                            <Text style={[styles['profile-btnText']]}>Editar nome de usuário</Text>
                            <IconArrow width={20} height={20} fill="#7B7B7B" style={{transform:[{rotate: '90deg'}, {scaleX: 1.4}]}} />
                        </View>
                    </TouchableNativeFeedback>

                    <View style={styles['gradient-line']}>
                        <LinearGradient
                            style={{width:'50%', height:1}}
                            colors={['transparent', '#A3A3A3']}
                            start={{x:0, y:1}}
                            end={{x:1, y:1}} />
                        <LinearGradient
                            style={{width:'50%', height:1}}
                            colors={['#A3A3A3', 'transparent']}
                            start={{x:0, y:1}}
                            end={{x:1, y:1}} />
                    </View>

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)}>
                        <View style={styles['profile-btn']}>
                            <IconSenha width={30} height={30} fill="#000" />
                            <Text style={[styles['profile-btnText']]}>Editar senha</Text>
                            <IconArrow width={20} height={20} fill="#7B7B7B" style={{transform:[{rotate: '90deg'}, {scaleX: 1.4}]}} />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={{alignItems:'center'}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)}>
                        <View style={styles['profile-btn']}>
                            <IconLogOut width={30} height={30} fill="#000" />
                            <Text style={[styles['profile-btnText']]}>Sair</Text>
                            <IconArrow width={20} height={20} fill="#7B7B7B" style={{transform:[{rotate: '90deg'}, {scaleX: 1.4}]}} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
    )
}