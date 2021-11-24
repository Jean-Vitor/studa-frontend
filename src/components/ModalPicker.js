import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Picker } from '@react-native-picker/picker';
import IconPriority from '../../assets/icons/priority.svg'

import styles from '../../styles.module.css'

export default ({setField, fields}) => {

    const [selected, setSelected] = useState("LOW")
    const [isFocused, setFocused] = useState(false)
    setField(Object.assign(fields, {priority: selected}))

    return (
        <View style={[styles['modal-input'], isFocused && {borderColor:"#e66049"}]}>
            <IconPriority style={styles['input-icon']} width={30} height={30} fill={(isFocused) ? "#e66049" : "#bebebe"} />
            <Picker
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) => {
                    setSelected(itemValue);
                    setField(Object.assign(fields, {priority: itemValue}));
                }}
                mode={'dropdown'}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{marginLeft:55, height:60}}
                dropdownIconColor={(isFocused) ? "#e66049" : "#979797"}
            >
                <Picker.Item label="Prioridade Baixa" value="LOW" />
                <Picker.Item label="Prioridade Alta" value="HIGH" />
            </Picker>
        </View>
    )
}