/**
 * Created by rozer on 7/6/2018.
 */
import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import NewsCard from './NewsCard'
import {Ionicons } from '@expo/vector-icons'


class SearchNewsCard extends Component{


    render(){
        
        const { navigation } = this.props
        
        return(
            <View>
                <View style={{height:40, backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'silver'}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Ionicons
                            name="md-arrow-back"
                            style={{paddingLeft:10}}
                            size={22} color="#000"
                        />
                    </TouchableOpacity>
                </View>
                <NewsCard
                    filterSearchNews={navigation.state.params['data']}
                    filterSearchNewsId={navigation.state.params['id']}
                    navigation={navigation}
                />
            </View>
        )
    }
}


export default SearchNewsCard
