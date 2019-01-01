import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class LogoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <View>
                {!this.props.IsShowSearchBox &&
                    <Image
                        source={require('../assets/instagram.png')}
                        style={{
                            height: 30,
                            width: 100
                        }}></Image>
                }
            </View>
        );
    }
}
