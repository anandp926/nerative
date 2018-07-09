import React from 'react';
import { StyleSheet, View, Dimensions, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import NewsCard from './component/NewsCard'
import NewsPage from './component/NewsPage'
import Home from './component/Home'
import WebSearch from './component/WebSearch'
import MenuNews from './component/MenuNews'
import SearchNewsCard from './component/SearchNewsCard'
import Testing from './component/Testing'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

function AppStatusBar({ backgroundColor, ...props }) {
    return ( 
        <View style = {{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor = { backgroundColor } {...props }/>
        </View >
    )
}

const Tabs = createBottomTabNavigator({

    NewsCard: {
        screen: NewsCard,
        navigationOptions: {
            tabBarIcon: () => ( 
                <Ionicons name = "ios-card-outline"
                    size = { 24 }
                    color = '#4BA5F9' 
                />
            )
        }
    },
    HOME: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => ( 
                <Ionicons name = "ios-home"
                    size = { 24 }
                    color = '#4BA5F9' 
                />
            )
        }
    },
}, {
    navigationOptions: {
        tabBarVisible: true,
        swipeEnabled: true,
        header: null
    }
});

const MainNavigation = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    WebSearch: {
        screen: WebSearch,
    },
    MenuNews: {
        screen: MenuNews,
        navigationOptions: {
            header: null
        }
    },
    SearchNewsCard: {
        screen: SearchNewsCard,
        navigationOptions: {
            header: null
        }
    }
}, )

export default class App extends React.Component {

    render() {
        return ( 
            <View style = {{ flex: 1 } }>
                <AppStatusBar backgroundColor = "black" barStyle = "light-content" />
                <MainNavigation />
            </View>
        );
    }
}
