/**
 * Created by rozer on 6/21/2018.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Image,
    Text,
    Animated,
    PanResponder,
    ActivityIndicator
} from 'react-native'
import { fetchNews } from '../utils/Api'
import { Font } from 'expo'
import News from './News'
import NewsPage from './NewsPage'

const sHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('window').width;

class NewsCard extends Component {

    constructor(){
        super();
        this.position= new Animated.ValueXY();
        this.swippedNewsPosition = new Animated.ValueXY({x:0, y:-sHeight});
    }

    state={
        news:null,
        fontLoaded: false,
        currentIndex: 0,
        loader:true
    };

    componentWillMount(){
        if(this.props.filterSearchNewsId){
            this.setState({currentIndex:this.props.filterSearchNewsId})
        }
        
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt,gestureState)=>true,
            onPanResponderMove:(evt,gestureState)=>{
                if(gestureState.dy>0 && this.state.currentIndex> 0){
                    this.swippedNewsPosition.setValue({x:0,y:-sHeight-gestureState.dy})
                }else{
                    this.position.setValue({y:gestureState.dy})
                }
            },
            onPanResponderRelease:(evt,gestureState)=>{
                if(this.state.currentIndex>0 && gestureState.dy>20 && gestureState.vy>0.1){
                    Animated.timing(this.swippedNewsPosition,{
                        toValue:({x:0,y:0}),
                        duration:0
                    }).start(() => {
                        this.setState({currentIndex:this.state.currentIndex-1});
                        this.swippedNewsPosition.setValue({ x:0, y:-sHeight })
                    })
                }
                else if( -gestureState.dy>20 && -gestureState.vy>0.1 ){
                    Animated.timing(this.position,{
                        toValue:({x:0,y:-sHeight}),
                        duration:0
                    }).start(() => {
                        this.setState({currentIndex:this.state.currentIndex+1});
                        this.position.setValue({ x:0, y:0 })
                    })
                }else{
                    Animated.parallel([
                        Animated.spring(this.position,{
                            toValue:({x:0,y:0})
                        }),
                        Animated.spring(this.swippedNewsPosition,{
                            toValue:({x:0,y:-sHeight})
                        })
                    ]).start()
                }
            }
        })
    }

    async componentDidMount(){
        await fetchNews().then((data) => {
            this.setState({news:data, loader:false})
        });
        await Font.loadAsync({
            'lato-regular': require('../Fonts/lato/Lato-Regular.ttf'),
            'lato-m': require('../Fonts/lato/Lato-Medium.ttf')
        });

        this.setState({ fontLoaded: true });
    }

    render(){
        const {news, fontLoaded, currentIndex, loader} = this.state;
        const {menuNews, filterNewsCategory,filterSearchNews,navigation} = this.props
        let filterNews
        if(menuNews===true){
            if(filterNewsCategory){
                filterNews = filterNewsCategory
            }
        }
        else if(filterSearchNews){
            filterNews = filterSearchNews
        }else if(news){
            filterNews = news['articles'].filter((data) => data['title'] !== '' && data['description'] !== '' && data['urlToImage'] !== '');
        }

        return(
            <View style={styles.c}>
                {
                    filterNews !== undefined && filterNews!==null && fontLoaded === true && (
                        filterNews.map((data,index)=>{
                            if(index === currentIndex -1){
                                return(
                                    <Animated.View
                                        {...this.panResponder.panHandlers}
                                        style={[styles.card,
                                    this.swippedNewsPosition.getLayout(),
                                    {height:sHeight-40, width:sWidth ,position:'absolute'}]}
                                        key={data['title']}
                                    >
                                        <News title="lato-regular" desc="lato-m" data={data} image={styles.image} navigation={navigation}/>
                                    </Animated.View>
                                )
                            }
                            else if(index < currentIndex){
                                return null
                            }
                            if(index === currentIndex){
                                return(
                                    <Animated.View
                                        {...this.panResponder.panHandlers}
                                        style={[styles.card,
                                    this.position.getLayout(),
                                    {height:sHeight, width:sWidth ,position:'absolute'}]}
                                        key={data['title']}
                                    >
                                        <News title="lato-regular" desc="lato-m" data={data} image={styles.image} navigation={navigation}/>
                                    </Animated.View>
                                )
                            }else{
                                return(
                                    <Animated.View
                                        style={[styles.card,
                                    {height:sHeight, width:sWidth ,position:'absolute'}]}
                                        key={data['title']}
                                    >
                                        <News title="lato-regular" desc="lato-m" data={data} image={styles.image} navigation={navigation}/>
                                    </Animated.View>
                                )
                            }
                        }).reverse()
                    )
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    c:{
        flex:1,
        alignItems:'center',
    },
    card:{
        flex:1,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        borderBottomWidth:1,
        borderBottomColor:'silver',
    },
    image:{
        height: 250,
        resizeMode:'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default NewsCard

