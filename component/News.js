/**
 * Created by rozer on 6/22/2018.
 */
import React, { Component } from 'react'
import { Animated, View, Text, Image, Dimensions,TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'

const sHeight = Dimensions.get('window').height;

class News extends Component {
    render(){
        const {data, image, desc, title, navigation } = this.props
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require("../image/preload.png")}
                >
                    <Image source={{uri:data['urlToImage']}} style={image}/>
                </ImageBackground>
                <View style={{paddingLeft:10, paddingRight:10, paddingBottom:10,backgroundColor: '#fcf7f7',}}>
                    <Text style={{ fontFamily: title, 
                                        fontSize: 19, 
                                        marginBottom:10,  marginTop:10,
                                        textAlign: 'justify' 
                                        }}
                    >
                        {data['title']}
                    </Text>
                    <Text style={{fontFamily: desc, fontSize:15, lineHeight:22, textAlign: 'justify'}}>
                        {data['description']}
                    </Text>
                </View>
                <TouchableOpacity 
                    style={{alignItems:'flex-end',padding:20}}
                    onPress={() => navigation.navigate('WebSearch', {title:data['source']['name'], url:data['url']})}
                >
                    <Text style={{color:'#776FCD', fontStyle:'italic'}}>...read more</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        height: 250,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    }
})

export default News
