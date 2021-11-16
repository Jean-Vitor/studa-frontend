import React, { useState } from 'react'
import { ScrollView, Text, View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import Modal from "react-native-modal";
import ModalInput from './ModalInput';
import ModalButton from './ModalButton';
import ModalPicker from './ModalPicker';
import ModalDateTimePicker from './ModalDateTimePicker';

import IconList from './IconList';
import files from '../constants/files.js';

import styles from '../../styles.module.css'

const options = Object.keys(files);

export default ({isVisible, setVisible, text, screen}) => {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={() => setVisible(false)}
            deviceHeight={Math.max(Dimensions.get('window').height, Dimensions.get('screen').height)}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
        >
            <View style={styles['modal']}>
                <StatusBar 
                    animated
                    animation="fade"
                    backgroundColor="#441c13"
                />
                <Text style={styles['modal-title']}>{text}</Text>

                {
                    (screen === "Nome") ?
                    <>
                        <ModalInput screen="Nome" text="Novo Nome" />
                        <ModalInput screen="Senha" text="Senha" secure={true} />
                        <ModalButton text="Salvar" />
                    </> :
                    (screen === "Senha") ?
                    <>
                        <ModalInput screen="Senha" text="Senha Atual" secure={true} />
                        <ModalInput screen="Senha" text="Nova Senha" secure={true} />
                        <ModalInput screen="Senha" text="Repetir Nova Senha" secure={true} />
                        <ModalButton text="Salvar" />
                    </> :
                    (screen === "Sair") ?
                    <>
                        <ModalButton text="Sim" outline={true} />
                        <ModalButton text="Não" />
                    </> :
                    (screen === "Icon") ?
                    <>
                        <ScrollView>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
                                <IconList options={options} />
                            </View>
                            <ModalButton text="Salvar" />
                        </ScrollView>
                    </> :
                    (screen === "ToDoAdd") ?
                    <>
                        <ScrollView>
                            <ModalInput screen="Titulo" text="Título" />
                            <ModalInput screen="Descricao" text="Descrição" />
                            <ModalPicker />
                            <ModalDateTimePicker />
                            <ModalButton text="Salvar" />
                        </ScrollView>
                    </> :
                    false
                }
            </View>
        </Modal>
    )
}