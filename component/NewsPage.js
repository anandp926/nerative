/**
 * Created by rozer on 6/22/2018.
 */
import React, { Component } from 'react';
import { WebView, View} from 'react-native';
import {Ionicons } from '@expo/vector-icons'

class NewsPage extends Component {
    
    render() {
        return (
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20,}}
            />
        );
    }
}

export default NewsPage
