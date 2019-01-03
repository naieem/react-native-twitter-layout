/**
 * main file which take care of all the login and after login related view change
 * and other headache.This can be injected without being taking any kind of tension
 */
import React, { Component } from 'react';
import { View, StyleSheet, AppState, ActivityIndicator } from 'react-native';
import LoginComponent from './login.component';
import AppNavigator from '../navigation/navigation';
import { Auth } from '../db/db.config';
console.disableYellowBox = true;
export default class AppBootstrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: 'pending'
        };
        this._handleAppStateChange = this
            ._handleAppStateChange
            .bind(this);
        this.handleLoginClick = this
            .handleLoginClick
            .bind(this);
    }
    componentDidMount() {
        console.log('app.js component did mount called');
        // checking app showing status running on 'forground or background'
        AppState.addEventListener('change', this._handleAppStateChange);
        // checking if user already loggedin or not
        Auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('user logged in');
                console.log(user);
                this.setState({ userLoggedIn: true });
            } else {
                console.log('user not logged in');
                this.setState({ userLoggedIn: false });
            }
        });
    }
    // signout if app has gone to background from frontend
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active') {
            console.log('App has come to the foreground!');
            console.log(Auth.currentUser);
        } else {
            console.log('App has gone to the background!');
            Auth
                .signOut()
                .then((res) => {
                    console.log(res);
                    console.log('signout done');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    // handling click on login component
    handleLoginClick = (state) => {
        console.log('event recieved ' + state);
        this.setState({ userLoggedIn: state });
    }
    // return screen after a decision is made that user is loggedin or not
    firstTimeScreen = () => {
        return (
            <View style={styles.container}>
                {/* if user not logged in */}
                {!this.state.userLoggedIn &&
                    <LoginComponent loginButtonClicked={this.handleLoginClick}></LoginComponent>
                }
                {/* if user logged in */}
                {
                    this.state.userLoggedIn &&
                    <AppNavigator></AppNavigator>
                }
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {/* after setting any status to userloggedin property and hide loader */}
                {this.state.userLoggedIn != 'pending' &&
                    this.firstTimeScreen()
                }
                {/* before setting any status to userloggedin property and show loader */}
                {this.state.userLoggedIn == 'pending' && <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});