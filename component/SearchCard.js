/**
 * Created by rozer on 6/26/2018.
 */
import React, {Component} from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Header, Divider } from 'react-native-elements'

const sHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('window').width;

class SearchCard extends Component {
    render(){
        const {filterSearchNews, navigation} = this.props
        return(
            <ScrollView style={styles.body}>
                { filterSearchNews !==undefined && filterSearchNews!==null &&(
                    filterSearchNews.map((data,index) => {
                        return(
                            <View style={styles.card} key={index}>
                                <TouchableOpacity
                                    style={{paddingBottom:10}}
                                    onPress={() => navigation.navigate('WebSearch', {title:data['source']['name'], url:data['url']})}
                                >
                                    <View>
                                        <Text style={{color:"#4E44BE", textAlign: 'justify'}}>{data['title']}</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'#4A9261'}}>{data['source']['name']}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Divider/>
                                <View style={styles.descImage}>
                                    <View style={styles.desc}>
                                        <Text style={{textAlign: 'justify'}}>{data['description'].slice(0,177)}...</Text>
                                    </View>
                                    <Image style={styles.photo} source={{uri:data['urlToImage']}}/>
                                </View>
                            </View>
                        )
                    })
                ) }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        height: sHeight-60,
        padding:10,
        backgroundColor:'#fff'
    },
    card:{
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor:'#C8C8C8',
        borderRadius: 0,
        padding: 10,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0,0.4)',
        shadowOffset: {
            width: 4,
            height: 8
        },
        marginBottom:10
    },
    photo: {
        width:100,
        height:100,
    },
    desc:{
        width:sWidth-140,
        paddingRight:10
    },
    descImage:{
        flexDirection:'row',
        paddingTop:10
    }
});

export default SearchCard
