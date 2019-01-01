import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoComponent from './logo.component';
import { Icon } from 'react-native-elements';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchBox: false
        };
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    {/* {!this.state.showSearchBox && <Image
                        source={require('../assets/instagram.png')}
                        style={{
                            height: 30,
                            width: 100
                        }}></Image>
                    } */}
                    <LogoComponent IsShowSearchBox={this.state.showSearchBox}></LogoComponent>
                    {this.state.showSearchBox &&
                        <View style={{
                            flex: 1,
                            paddingHorizontal: 10
                        }}>
                            <TextInput
                                style={{
                                    height: 30,
                                    borderWidth: 1,
                                    borderColor: '#380AF5',
                                    paddingHorizontal: 10,
                                    borderRadius: 10
                                }}
                                clearButtonMode="while-editing"
                                placeholder="Type here search"
                                onChangeText={(text) => console.log('hello world')} />
                        </View>
                    }

                    <View style={styles.headerRight}>
                        <View style={{
                            marginRight: 20
                        }}>
                            {!this.state.showSearchBox &&
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        showSearchBox: !this.state.showSearchBox
                                    })}>
                                    <Icon name='ios-search' type='ionicon' color='#517fa4' />
                                </TouchableOpacity>
                            }
                            {this.state.showSearchBox &&
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        showSearchBox: !this.state.showSearchBox
                                    })}>
                                    <Icon name='ios-close-circle' type='ionicon' color='#517fa4' />
                                </TouchableOpacity>
                            }
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name='ios-more' type='ionicon' color='#517fa4' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        backgroundColor: '#ececec',
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        paddingLeft: 25
    }
});
export default HeaderComponent;
