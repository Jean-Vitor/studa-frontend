import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css';

import Logo from '../../assets/icons/Logo.svg';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default ({navigation : {navigate}}) => {

    return (
        <KeyboardAvoidingView>
            {/* Acho que não precisa */}
            <ScrollView>
                <View style={[styles['main-container'], styles['single-container'], {height:hp('100%')}]}>
                    <View style={{alignItems:'center'}}>
                        <Logo width={wp('20%')} height={hp('20%')} />
                        <Text style={styles['title']}>Seja bem-vindo(a)!</Text>

                        <FormInput text="Nome" type="email-address" />
                        <FormInput text="Email" type="email-address" />
                        <FormInput text="Senha" />
                    </View>
                    
                    <View style={{alignItems:'center'}}>
                        <FormButton text="Cadastro" /> 
                        <Text style={{fontSize:15}, styles['font-default']}>Já possui uma conta?
                            <Text style={{fontFamily:'Montserrat-Bold', color:'#E64949'}} onPress={() => navigate('Login')}> Entre aqui!</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}