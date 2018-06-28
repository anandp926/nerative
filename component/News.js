/**
 * Created by rozer on 6/22/2018.
 */
import React, { Component } from 'react'
import { Animated, View, Text, Image, Dimensions } from 'react-native'

const sHeight = Dimensions.get('window').height;

class News extends Component {
    render(){
        const { data, image, desc, title } = this.props
        return(
            <View style={{flex:1}}>
                <Image
                    style={image}
                    source={{uri:data['urlToImage']}}
                />
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
            </View>
        )
    }
}

export default News
