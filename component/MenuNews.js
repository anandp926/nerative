/**
 * Created by rozer on 6/27/2018.
 */
import React, {Component} from 'react'
import {View,TouchableOpacity,StyleSheet,ActivityIndicator} from 'react-native'
import {categoryNews} from '../utils/Api'
import NewsCard from './NewsCard'
import {Ionicons } from '@expo/vector-icons'

class MenuNews extends Component{
    
    state={
        newsCategory:null,
        catLoader:true
    };
    
    async componentDidMount(){
        await categoryNews(this.props.navigation.state.params['category']).then((data) => {
            this.setState({
                newsCategory:data,
                catLoader:false
            })
        })
    }
    
    render(){
        
        const {newsCategory,catLoader} = this.state
        let filterNewsCategory
        if(newsCategory !==undefined && newsCategory !== null){
            filterNewsCategory = newsCategory['articles']
                .filter((data) => data['title'] !== '' && data['description'] !== '' && data['urlToImage'] !== '');
        }
        if(catLoader){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size={50} />
                </View>
            )
        }else{
            return(
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                            <Ionicons
                                name="md-arrow-back"
                                style={{paddingLeft:10}}
                                size={22} color="#000"
                            />
                        </TouchableOpacity>
                    </View>
                    <NewsCard
                        filterNewsCategory={filterNewsCategory}
                        menuNews={this.props.navigation.state.params['menuNews']}
                        navigation={this.props.navigation}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        justifyContent:'center',
        height:40,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'silver'
    }
});

export default MenuNews
