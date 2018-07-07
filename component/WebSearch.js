/**
 * Created by rozer on 6/28/2018.
 */
import React, { Component } from 'react'
import { WebView} from 'react-native'
import {Ionicons } from '@expo/vector-icons'
import {lowerCase} from '../utils/helper'

class WebSearch extends Component {

    static navigationOptions = ({ navigation }) =>{
        const { title } = navigation.state.params;
        return {
            title: lowerCase(title)
        }
    };
    
    render(){
        return(
            <WebView source={{uri:this.props.navigation.state.params.url}}/>
        )
    }
}


export default WebSearch
