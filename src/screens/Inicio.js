import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import {
    LineChart,
  } from "react-native-chart-kit";

const data = {
    labels: ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab.", "Dom."],
    datasets: [{
        data: [
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0)
        ],
    }],
    legend: ["Alguma coisa"] //Legenda
}

export default () => {
    return (
        <ScrollView>
            <View style={[styles['main-container'], styles['container-wrapper']]}>
                <Text style={styles['sub-title']}>Próximas atividades</Text>
                <View style={styles['actv-wrapper']}>
                    <View style={styles['actv-item']}>
                        <Text style={{fontFamily:'Montserrat_500Medium', fontSize:16, color:'#000'}}>Atividade 1</Text>
                        <View style={[styles['item-stats'], {marginLeft:0}]}>
                            <Text style={[styles['font-default'], styles['item-date']]}>30 Set. 2021</Text>
                            <Text style={[styles['font-default'], {zIndex:-1}]}>23:59</Text>
                        </View>
                    </View>

                    <View style={styles['actv-item']}>
                        <Text style={{fontFamily:'Montserrat_500Medium', fontSize:16, color:'#000'}}>Atividade 2</Text>
                        <View style={[styles['item-stats'], {marginLeft:0}]}>
                            <Text style={[styles['font-default'], styles['item-date']]}>30 Set. 2021</Text>
                            <Text style={[styles['font-default'], {zIndex:-1}]}>23:59</Text>
                        </View>
                    </View>

                    <View style={styles['actv-item']}>
                        <Text style={{fontFamily:'Montserrat_500Medium', fontSize:16, color:'#000'}}>Atividade 3</Text>
                        <View style={[styles['item-stats'], {marginLeft:0}]}>
                            <Text style={[styles['font-default'], styles['item-date']]}>30 Set. 2021</Text>
                            <Text style={[styles['font-default'], {zIndex:-1}]}>23:59</Text>
                        </View>
                    </View>
                </View>
                

                <Text style={styles['sub-title']}>Frequência de Estudos</Text>
                <LineChart
                    data={data}
                    width={wp('100%') - 60}
                    height={200}
                    withVerticalLines={false}
                    yAxisSuffix={'h'}
                    chartConfig={{
                        backgroundGradientFrom: "#E0E0E0",
                        backgroundGradientFromOpacity: 0.3,
                        backgroundGradientTo: "#E0E0E0",
                        backgroundGradientToOpacity: 0.3,
                        fillShadowGradient: "#FF6352",
                        fillShadowGradientOpacity: 1,
                        color: (opacity = 1) => `rgba(230, 73, 73, ${opacity})`,
                        strokeWidth: 3,
                        barPercentage: 2,
                        propsForLabels: {
                            fontFamily: "Montserrat_400Regular",
                            fill: "rgba(0, 0, 0, 1)",
                        },
                        propsForHorizontalLabels: {
                            fontFamily: "Montserrat_400Regular",
                            fill: "rgba(0, 0, 0, .6)",
                        },
                        propsForVerticalLabels: {
                            fontFamily: "Montserrat_400Regular",
                            fill: "rgba(0, 0, 0, 1)",
                        },
                        propsForBackgroundLines: {
                            stroke: "rgba(0, 0, 0, 0.1)",
                            strokeWidth: 0.5,
                            strokeDasharray: '' //Dashed or solid
                        }
                    }}
                    style={{borderRadius:20}}
                />
            </View>
        </ScrollView>
    )
}