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
                        <Text style={styles['title']}>Bem-vindo(a) de volta!</Text>

                        <FormInput text="Email" type="email-address" secure={false} />
                        <FormInput text="Senha" secure={true} />
                    </View>
                    
                    <View style={{alignItems:'center'}}>
                        <FormButton text="Login" /> 
                        <Text style={{fontSize:15}, styles['font-default']}>Ainda não possui uma conta?
                            <Text style={{fontFamily:'Montserrat_700Bold', color:'#E64949'}} onPress={() => navigate('Cadastro')}> Cadastre-se!</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}