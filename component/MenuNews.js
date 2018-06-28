/**
 * Created by rozer on 6/27/2018.
 */
import React, {Component} from 'react'
import {View} from 'react-native'
import {categoryNews} from '../utils/Api'
import NewsCard from './NewsCard'

class MenuNews extends Component{
    
    state={
        newsCategory:null
    };
    
    async componentDidMount(){
        await categoryNews(this.props.navigation.state.params['category']).then((data) => {
            this.setState({
                newsCategory:data
            })
        })
    }
    
    render(){
        
        const {newsCategory} = this.state
        let filterNewsCategory
        if(newsCategory !==undefined && newsCategory !== null){
            filterNewsCategory = newsCategory['articles']
                .filter((data) => data['title'] !== '' && data['description'] !== '' && data['urlToImage'] !== '');
        }
        
        return(
            <NewsCard filterNewsCategory={filterNewsCategory}/>
        )
    }
}

export default MenuNews
