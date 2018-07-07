

/**
 * Created by rozer on 6/26/2018.
 */
import React, { Component } from 'react'
import { WebView, View, StyleSheet,TouchableOpacity, Text } from 'react-native'
import {Ionicons } from '@expo/vector-icons'
import {lowerCase} from '../utils/helper'
import UrlView from './UrlView'

class WebSearch extends Component {

    

    render(){
        const {navigation } = this.props
        return(
            <View>
                <View style={styles.header}>
                    <View style={{flex:1, paddingLeft:10}}>
                        <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate('Home')}>
                            <Ionicons
                                name="md-arrow-back"
                                style={{marginTop:10}}
                                size={22} color="#000"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', flex:2}}>
                        <Text>www.{lowerCase(navigation.state.params.title)}</Text>
                    </View>
                </View>
                <UrlView navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#C8C8C8'
    },
});

export default WebSearch
