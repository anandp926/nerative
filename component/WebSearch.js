/**
 * Created by rozer on 6/26/2018.
 */
import React, { Component } from 'react'
import { WebView } from 'react-native'
import {lowerCase} from '../utils/helper'

class WebSearch extends Component {

    static navigationOptions = ({ navigation }) =>{
        const { title } = navigation.state.params;
        return {
            title: 'www.'+lowerCase(title)
        }
    };

    render(){
        return(
        <WebView
            source={{uri: this.props.navigation.state.params.url}}
        />
        )
    }
}

export default WebSearch
