import React, { useState, useContext } from 'react'
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
import { AuthContext } from '../context/auth.context';

const options = Object.keys(files);

export default ({isVisible, setVisible, text, screen}) => {

    const [fields, setFields] = useState({})
    const { signOut } = useContext(AuthContext)
    const { setIcon } = useContext(AuthContext)

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
                        <ModalInput screen="Nome" text="Novo Nome" setField={setFields} fields={fields} />
                        <ModalInput screen="Senha" text="Senha" secure={true} setField={setFields} fields={fields} />
                        <ModalButton text="Salvar" onSubmit={setVisible} fields={fields} />
                    </> :
                    (screen === "Senha") ?
                    <>
                        <ModalInput screen="Senha" text="Senha Atual" secure={true} setField={setFields} fields={fields} />
                        <ModalInput screen="Senha" text="Nova Senha" secure={true} setField={setFields} fields={fields} />
                        <ModalInput screen="Senha" text="Repetir Nova Senha" secure={true} setField={setFields} fields={fields} />
                        <ModalButton text="Salvar" onSubmit={setVisible} fields={fields} />
                    </> :
                    (screen === "Sair") ?
                    <>
                        <ModalButton text="Sim" outline={true} onPress={signOut} onSubmit={setVisible} />
                        <ModalButton text="Não" onSubmit={setVisible} />
                    </> :
                    (screen === "Icon") ?
                    <>
                        <ScrollView>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
                                <IconList options={options} setIcon={setIcon} />
                            </View>
                            <ModalButton text="Salvar" onSubmit={setVisible} />
                        </ScrollView>
                    </> :
                    (screen === "ToDoAdd") ?
                    <>
                        <ScrollView>
                            <ModalInput screen="Titulo" text="Título" setField={setFields} fields={fields} />
                            <ModalInput screen="Descricao" text="Descrição" setField={setFields} fields={fields} />
                            <ModalPicker setField={setFields} fields={fields} />
                            <ModalDateTimePicker cycle={false} setField={setFields} fields={fields} />
                            <ModalButton text="Salvar" onSubmit={setVisible} fields={fields} action="task" />
                        </ScrollView>
                    </> :
                    (screen === "Calendário") ?
                    <>
                        <ScrollView>
                            <ModalInput screen="Titulo" text="Título" setField={setFields} fields={fields} />
                            <ModalInput screen="Descricao" text="Descrição" setField={setFields} fields={fields} />
                            <ModalDateTimePicker cycle={true} setField={setFields} fields={fields} />
                            <ModalButton text="Salvar" onSubmit={setVisible} fields={fields} action="event" />
                        </ScrollView>
                    </> :
                    false
                }
            </View>
        </Modal>
    )
}