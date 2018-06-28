/**
 * Created by rozer on 6/21/2018.
 */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, WebView} from 'react-native'
import { Header} from 'react-native-elements'
import {Ionicons } from '@expo/vector-icons'

class Testing extends Component {

    render(){
        return(
            <View>
                <Text>Anand Singh</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        flex:1,
    },
    image:{
        width: 350,
        height: 250
    }
});

export default Testing
