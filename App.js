import React from 'react';
import { StyleSheet, View, Dimensions, StatusBar,Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createMaterialTopTabNavigator} from 'react-navigation'
import NewsCard from './component/NewsCard'
import NewsPage from './component/NewsPage'
import Home from './component/Home'
import WebSearch from './component/WebSearch'
import MenuNews from './component/MenuNews'
import Testing from './component/Testing'
import { Constants } from 'expo'

function AppStatusBar({backgroundColor, ...props}) {
    return(
        <View style={{backgroundColor, height:Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
        HOME: {
            screen: Home,
        },
        NewsCard:{
            screen: NewsCard
        }
    },
    {
        navigationOptions: {
            tabBarVisible:false,
            swipeEnabled:true,
            header: null
        }
    }
);

const MainNavigation = createStackNavigator({
        Home: {
            screen: Tabs,
            navigationOptions:{
                header:null
            }
        },
        WebSearch: {
            screen: WebSearch,
        },
        MenuNews: {
            screen: MenuNews
        }
    },
)

export default class App extends React.Component {

    render() {
        return (
            <View style={{flex:1}}>
                <AppStatusBar backgroundColor="black" barStyle="light-content"/>
                <MainNavigation/>
            </View>
        );
    }
}

