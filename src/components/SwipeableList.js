import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import Swipeable from 'react-native-swipeable';
import IconEdit from '../../assets/icons/edit.svg'
import IconTrash from '../../assets/icons/trash.svg'
import ItemCheckBox from './ItemCheckBox';
import ActivityItem from './ActivityItem';
import colors from '../constants/colors'
import dateFormat from '../config/dateFormat.js'

export default class SwipeableList extends Component {
    
    constructor(props) {
        super(props)
        this.currentlyOpenSwipeable = null
    }

    rightButtons = [
        <TouchableOpacity
            style={[styles['list-actionBtn'], {backgroundColor:'#E4E4E4', borderRadius:10}]}
            activeOpacity={0.6}
        >
            <IconEdit width={24} height={24} fill="#B0B0B0" />
        </TouchableOpacity>,
        <TouchableOpacity
            style={[styles['list-actionBtn'], {backgroundColor:'#E47D7D', borderRadius:10}]}
            activeOpacity={0.6}
        >
            <IconTrash width={24} height={24} fill="#FFF" />
        </TouchableOpacity>
    ]

    render() {
        const { usage, tasks } = this.props
        // console.log(tasks)

        return (
            <View style={{paddingBottom:40}}>
                {
                    tasks.map(item => {
                        return (
                            <Swipeable style={(usage === "checklist") && {width:wp('100%')}} rightButtons={this.rightButtons}  
                                rightActionActivationDistance={200}
                                onRef = {ref => this.swipe = ref}
                                onRightButtonsOpenRelease = { (event, gestureState, swipe) => {
                                    if (this.currentlyOpenSwipeable && this.currentlyOpenSwipeable !== swipe) {
                                        this.currentlyOpenSwipeable.recenter()
                                    }
                                    this.currentlyOpenSwipeable = swipe
                                }}
                            >
                                {
                                    (usage === "checklist") ?
                                    <ItemCheckBox itemTxt={item.title} date={dateFormat(item.conclusionDate, "d mmm yyyy")} hour={dateFormat(item.conclusionDate, "H:MM")} />
                                    :
                                    (usage === "studyCycle") ?
                                    <ActivityItem titulo="Ciclo 1" mainStat="12h às 20h" secondStat="Seg. a Sex." colorful={true} bgColor={colors[0]} />
                                    : false
                                }
                            </Swipeable>
                        )
                    })
                }
            </View>
        )
    }
}