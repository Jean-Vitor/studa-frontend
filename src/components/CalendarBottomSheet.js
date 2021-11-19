import React, { useMemo, useCallback } from 'react'
import { Text, View } from 'react-native'

import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import dateFormat from '../config/dateFormat.js'
import ActivityItem from './ActivityItem.js'
import FloatingActionButton from '../components/FloatingActionButton'
import ActivityItemButtons from './ActivityItemButtons.js'
import colors from '../constants/colors'

import styles from '../../styles.module.css'

export default ({bottomSheet, behaviour, date, setVisible, setText, setScreen}) => {

    const snapPoints = useMemo(() => ['35%', '86%'], []);

    const renderBackdrop = useCallback(props => (
        <BottomSheetBackdrop 
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
        />
    ), [])

    return (
        <BottomSheet
            ref={bottomSheet}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{width:60, backgroundColor:"rgba(0, 0, 0, .2)"}}
        >
            <BottomSheetScrollView>
                <View style={styles['btsht-wrapper']}>
                    {
                        (behaviour === "Day") ?
                        <>
                            <Text style={styles['day-title']}>{dateFormat(date, "d mmm yyyy")}</Text>
                            <ActivityItem titulo="Ciclo 1" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[0]} />
                            <ActivityItem titulo="Ciclo 2" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[1]} />
                            <ActivityItem titulo="Ciclo 3" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[2]} />
                            <ActivityItem titulo="Ciclo 4" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[3]} />
                            <ActivityItem titulo="Ciclo 5" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[4]} />
                        </> :
                        (behaviour === "Button") ?
                        <>
                            <ActivityItemButtons color={colors[0]} />
                            <ActivityItemButtons color={colors[1]} />
                            <ActivityItemButtons color={colors[2]} />
                            <ActivityItemButtons color={colors[3]} />
                        </> :
                        false
                    }
                </View>
            </BottomSheetScrollView>
            {
                (behaviour === "Button") &&
                <FloatingActionButton onPress={setVisible} setText={setText} text="Adicionar Ciclo de Estudos" setScreen={setScreen} screen="Calendário" />
            }
        </BottomSheet>
    )
}