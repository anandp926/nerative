/**
 * Created by rozer on 6/24/2018.
 */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Keyboard, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Ionicons,Entypo } from '@expo/vector-icons'
import moment from 'moment'
import {searchNews} from '../utils/Api'
import SearchCard from './SearchCard'
import MenuScreen from './MenuScreen'

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;

class Home extends Component {

    state={
        searchValue:'',
        searchNews:null,
        menuScreen:false,
        searchButtonEnable:true,
        loading:false
    };
    
    newsSearch = () => {
        this.setState({loading:true})
        const { searchValue } = this.state;
        const date = moment().format("YYYY-MM-DD");
        if(searchValue === undefined && !date){
            this.setState({searchValue:''})
        }else{
            searchNews(searchValue,date).then((data) => {
                this.setState({searchNews:data, loading:false})
            });
            Keyboard.dismiss()
        }
    };

    changeScreen = () => {
        this.setState({
            menuScreen:false,
            searchValue:'',
            searchButtonEnable:true,
            searchNews:null
        });
        Keyboard.dismiss()
    };
    
    render() {
        
        const { searchNews, menuScreen, searchButtonEnable, loading } = this.state;
        let filterSearchNews, totalResult;
        if(searchNews !==undefined && searchNews !== null){
            filterSearchNews = searchNews['articles']
                .filter((data) => data['title'] !== '' && data['description'] !== '' && data['source']['name'] !== '' && data['urlToImage'] !== '');
            totalResult=searchNews['totalResults']
        }
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flexDirection:'row'}}>
                        {menuScreen
                            ?
                            <TouchableOpacity style={styles.backButton} onPress={this.changeScreen}>
                                <Entypo
                                    name="cross"
                                    style={{marginTop:10}}
                                    size={22} color="#000"
                                />
                            </TouchableOpacity>
                            :
                            <View></View>
                        }
                        <View style={menuScreen ? styles.newSearch : styles.search}>
                            <TextInput style={menuScreen ? styles.newInputText : styles.inputText}
                                       underlineColorAndroid="transparent"
                                       placeholder="Search Here...."
                                       placeholderTextColor="#000"
                                       value={this.state.searchValue}
                                       onChangeText={(searchValue) => this.setState({searchValue:searchValue,menuScreen:true, searchButtonEnable:false})}
                            />
                            <TouchableOpacity style={styles.searchButton} disabled={searchButtonEnable} onPress={this.newsSearch}>
                                <Ionicons
                                    name="ios-search-outline"
                                    style={{marginTop:10}}
                                    size={20} color='#4BA5F9'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {menuScreen
                    ?
                        <SearchCard filterSearchNews={filterSearchNews} totalResult={totalResult} navigation={this.props.navigation} loading={loading}/>
                    :
                        <MenuScreen navigation={this.props.navigation}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#C8C8C8'
    },
    inputText: {
        width:sWidth-82,
        height: 40
    },
    newInputText:{
        width:sWidth-102,
        height: 40
    },
    search: {
        flexDirection:'row',
        padding: 5,
        borderWidth:1,
        borderColor:'#4BA5F9',
        borderRadius:5,
        width:sWidth-40
    },
    newSearch:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#4BA5F9',
        padding: 5,
        borderRadius:5,
        width:sWidth-60
    },
    searchButton: {
        backgroundColor:'white',
        width:32,
        borderRadius:5,
        alignItems:'center'
    },
    backButton:{
        marginRight:15,
        marginTop:7
    },
});

export default Home
