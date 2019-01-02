import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from './header.component';
export default class YoutubeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent></HeaderComponent>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text> YoutubeDetails </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});