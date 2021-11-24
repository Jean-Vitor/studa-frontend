import React, { Component, useContext } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import files from '../constants/files.js'

import styles from '../../styles.module.css'
import { AuthContext } from '../context/auth.context.js'

export default class IconList extends Component {
    
    state = {
        value: 1,
    }

    render() {
        const { options, setIcon } = this.props
        const { value } = this.state

        return (
            <>
                {
                    options.map(key => {
                        const file = files[key];
                        return (
                            <View key={key} style={styles['icon-cell']}>
                                <View style={[styles['icon-selection'], (value === key) && {backgroundColor:"#e66049"}]} />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        this.setState({
                                            value: key,
                                        })
                                        setIcon(key)
                                    }}
                                >
                                    <Image source={file} style={{width:80, height:80, borderRadius:5}} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </>
        )
    }
}