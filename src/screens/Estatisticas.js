import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
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
                    style={{marginBottom:40, borderRadius:20}}
                />

                <Text style={styles['sub-title']}>Frequência de Tarefas Concluídas</Text>
                <BarChart 
                    data={data}
                    width={wp('100%') - 60}
                    height={200}
                    yAxisSuffix={'h'}
                    showBarTops={true}
                    showValuesOnTopOfBars={true}
                    chartConfig={{
                        backgroundGradientFrom: "#E0E0E0",
                        backgroundGradientFromOpacity: 0.3,
                        backgroundGradientTo: "#E0E0E0",
                        backgroundGradientToOpacity: 0.3,
                        fillShadowGradient: "#FF6352",
                        fillShadowGradientOpacity: 1,
                        color: (opacity = 1) => `rgba(230, 73, 73, ${opacity})`,
                        strokeWidth: 3,
                        barPercentage: 0.5,
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
                    style={{marginBottom:40, borderRadius:20}}
                />
            </View>
        </ScrollView>
    )
}