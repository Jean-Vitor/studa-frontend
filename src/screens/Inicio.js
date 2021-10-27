import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

export default () => {
    return (
        <ScrollView>
            <View style={styles['main-container']}>
                <Text>Início</Text>
            </View>
        </ScrollView>
    )
}