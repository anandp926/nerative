/**
 * Created by rozer on 6/26/2018.
 */
import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements'
import { topics } from '../utils/Api'
import {upperCase} from '../utils/helper'
import { Font } from 'expo'

const sHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('window').width;

class MenuScreen extends Component{

    state={
        font:false
    };
    
    async componentDidMount(){
        await Font.loadAsync({
            'lato-bold': require('../Fonts/lato/Lato-Bold.ttf'),
            'lato-semibold': require('../Fonts/lato/Lato-SemiBoldItalic.ttf')
        });
        this.setState({ font: true });
    }
    
    render(){
        
        return(
            <View>
                <View style={{padding:10}}>
                    <View style={{paddingBottom:10, paddingTop:10}}>
                        <Text style={this.state.font ? {fontFamily:'lato-semibold'} : {fontWeight:'bold'}}>SUGGESTED TOPICS</Text>
                    </View>
                    <Divider/>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.menu}>
                        {
                            this.state.font &&(
                                topics.map((data, index) => {
                                    return(
                                        <TouchableOpacity 
                                            key={index} 
                                            style={styles.menuCard}
                                            onPress={() => this.props.navigation.navigate('MenuNews',{category:data['keyword']})}
                                        >
                                            <Image style={styles.photos} source={data['url']}/>
                                            <View style={{marginTop:20}}>
                                                <Text style={{fontFamily:'lato-bold'}}>{upperCase(data['name'])}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            )
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu:{
        flexDirection:'row',
        flexWrap: 'wrap',
        width: sWidth
    },
    menuCard:{
        height:150,
        width:(sWidth-60)/3,
        margin:10,
        borderWidth:1,
        borderColor:'#4BA5F9',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    photos:{
        width:90,
        height:90
    }
});

export default MenuScreen
