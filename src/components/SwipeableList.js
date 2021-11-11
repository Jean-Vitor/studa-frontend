import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from '../../styles.module.css'

import Swipeable from 'react-native-swipeable';
import IconEdit from '../../assets/icons/edit.svg'
import IconTrash from '../../assets/icons/trash.svg'
import ItemCheckBox from './ItemCheckBox';

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

        return (
            <View style={{paddingBottom:40}}>
                <Swipeable style={{width:wp('100%')}} rightButtons={this.rightButtons}  
                    onRef = {ref => this.swipe = ref}
                    onRightButtonsOpenRelease = { (event, gestureState, swipe) => {
                        if (this.currentlyOpenSwipeable && this.currentlyOpenSwipeable !== swipe) {
                            this.currentlyOpenSwipeable.recenter()
                        }
                        this.currentlyOpenSwipeable = swipe
                    }}
                >
                    <ItemCheckBox itemTxt="Item 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" date="30 Set. 2021" hour="23:59" />
                </Swipeable>

                <Swipeable style={{width:wp('100%')}} rightButtons={this.rightButtons}  
                    onRef = {ref => this.swipe = ref}
                    onRightButtonsOpenRelease = { (event, gestureState, swipe) => {
                        if (this.currentlyOpenSwipeable && this.currentlyOpenSwipeable !== swipe) {
                            this.currentlyOpenSwipeable.recenter(); 
                        }
                        this.currentlyOpenSwipeable = swipe
                    }}
                >
                    <ItemCheckBox itemTxt="Item 2" date="30 Set. 2021" hour="23:59" />
                </Swipeable>

                <Swipeable style={{width:wp('100%')}} rightButtons={this.rightButtons}  
                    onRef = {ref => this.swipe = ref}
                    onRightButtonsOpenRelease = { (event, gestureState, swipe) => {
                        if (this.currentlyOpenSwipeable && this.currentlyOpenSwipeable !== swipe) {
                            this.currentlyOpenSwipeable.recenter(); 
                        }
                        this.currentlyOpenSwipeable = swipe
                    }}
                >
                    <ItemCheckBox itemTxt="Item 3" date="30 Set. 2021" hour="23:59" />
                </Swipeable>

                <Swipeable style={{width:wp('100%')}} rightButtons={this.rightButtons}  
                    onRef = {ref => this.swipe = ref}
                    onRightButtonsOpenRelease = { (event, gestureState, swipe) => {
                        if (this.currentlyOpenSwipeable && this.currentlyOpenSwipeable !== swipe) {
                            this.currentlyOpenSwipeable.recenter(); 
                        }
                        this.currentlyOpenSwipeable = swipe
                    }}
                >
                    <ItemCheckBox itemTxt="Item 4" date="30 Set. 2021" hour="23:59" />
                </Swipeable>
            </View>
        )
    }
}