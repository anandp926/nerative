/**
 * Created by rozer on 6/21/2018.
 */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native'
import { Header} from 'react-native-elements'
import {Ionicons } from '@expo/vector-icons'

class Testing extends Component {

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size={75} color="#0000ff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

export default Testing
