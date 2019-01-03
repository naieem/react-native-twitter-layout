import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import YoutubeDetails from '../components/youtube.details.component';
import HomeComponent from '../components/home.component';
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeComponent
    },
    YouTubeDetails: {
        screen: YoutubeDetails
    }
}, {headerMode: 'none'});
export default createAppContainer(AppNavigator);