import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import LogoComponent from './logo.component';
import {Icon} from 'react-native-elements';
import sharedService from '../services/shared.services';
import Observable from '../services/observable.services';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchBox: false,
            title: 'Home'
        };
        Observable.registerObserver('OnmoreCLick', (value) => {
            // console.log(value);
            this.setState({title: value.title});
        });
        this.moreButtonClick = this
            .moreButtonClick
            .bind(this);
    }
    moreButtonClick = () => {
        Observable.emit('OnmoreCLick', {title: 'hukka'});
    }
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    {/* logo container */}
                    <LogoComponent IsShowSearchBox={this.state.showSearchBox}></LogoComponent>
                    {/* search box container */}
                    {this.state.showSearchBox && <View
                        style={{
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
                            onChangeText={(text) => console.log('hello world')}/>
                    </View>
}
                    <View
                        style={{
                        justifyContent: 'center'
                    }}>
                        <Text>{this.state.title}</Text>
                    </View>
                    {/* right side buttons container */}
                    <View style={styles.headerRight}>
                        <View
                            style={{
                            marginRight: 20
                        }}>
                            {!this.state.showSearchBox && <TouchableOpacity
                                onPress={() => this.setState({
                                showSearchBox: !this.state.showSearchBox
                            })}>
                                <Icon name='ios-search' type='ionicon' color='#517fa4'/>
                            </TouchableOpacity>
}
                            {this.state.showSearchBox && <TouchableOpacity
                                onPress={() => this.setState({
                                showSearchBox: !this.state.showSearchBox
                            })}>
                                <Icon name='ios-close-circle' type='ionicon' color='#517fa4'/>
                            </TouchableOpacity>
}
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.moreButtonClick}>
                                <Icon name='ios-more' type='ionicon' color='#517fa4'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 70,
        backgroundColor: '#ececec'
    },
    header: {
        flex: 1,
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
