import React, { useState, useContext } from 'react'
import { Image, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

import styles from '../../styles.module.css'

import { LinearGradient } from 'expo-linear-gradient';
import IconNome from '../../assets/icons/edit-name.svg'
import IconSenha from '../../assets/icons/edit-pasw.svg'
import IconLogOut from '../../assets/icons/log-out.svg'
import IconArrow from '../../assets/icons/arrow.svg'
import files from '../constants/files';
import { AuthContext } from '../context/auth.context';

export default ({setVisible, setText, setScreen}) => {

    const { user } = useContext(AuthContext)
    const { icon } = useContext(AuthContext)

    return (
            <View style={styles['drawer']}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} activeOpacity={0.6} onPress={() => (setVisible(true), setText("Alterar Foto de Perfil"), setScreen("Icon"))}>
                        <View style={styles['icon-parent']}>
                            <View style={styles['icon-outline']}/>
                            <Image source={files[icon]} style={styles['icon']} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles['profile-name']}>{user.name}</Text>
                    <Text style={[styles['font-default'], {marginBottom:40}]}>{user.email}</Text>

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)} onPress={() => (setVisible(true), setText("Alterar Nome"), setScreen("Nome"))}>
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

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)} onPress={() => (setVisible(true), setText("Alterar Senha"), setScreen("Senha"))}>
                        <View style={styles['profile-btn']}>
                            <IconSenha width={30} height={30} fill="#000" />
                            <Text style={[styles['profile-btnText']]}>Editar senha</Text>
                            <IconArrow width={20} height={20} fill="#7B7B7B" style={{transform:[{rotate: '90deg'}, {scaleX: 1.4}]}} />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={{alignItems:'center'}}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)} onPress={() => (setVisible(true), setText("Deseja mesmo sair?"), setScreen("Sair"))}>
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