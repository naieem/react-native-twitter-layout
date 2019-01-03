import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Auth, Firebase } from '../../db/db.config';
import sharedService from '../../services/shared.services';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      loading: false,
      email: '',
      password: '',
      userInfo: {}
    };
    this.loginUser = this
      .loginUser
      .bind(this);
  }

  componentDidMount() {
  }

  loginUser = () => {
    console.log('login called');
    this.setState({
      loading: true
    });
    Auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        console.log('Login successfully');
        this.props.loginButtonClicked(true);
        sharedService.setLoggedInUserStatus(true);
        this.setState({
          loading: false
        });
      })
      .catch((error) => {
        // Handle Errors here.
        sharedService.setLoggedInUserStatus(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({
          loading: false
        });
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
  input = () => {
    return {
      borderRadius:this.props.config && this.props.config.InputBorderRadius && this.props.config.InputBorderRadius || 0,
      borderColor: this.props.config && this.props.config.InputBorderColor && this.props.config.InputBorderColor || '#0AF5C3',
      borderWidth: 1,
      height: this.props.config && this.props.config.InputHeight && this.props.config.InputHeight || 40,
      marginBottom: 20,
      paddingHorizontal: 10,
    }
  }
  loadingButton = () => {
    return {
      backgroundColor: this.props.config && this.props.config.LoaderConfig && this.props.config.LoaderConfig.LoaderBackgroundColor || '#0A11F5',
      width: 200,
      paddingVertical: 10
    }
  }
  loginButtonStyle = () => {
    return {
      width: 200,
      textAlign: 'center',
      paddingVertical: this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.PaddingVertical || 10,
      backgroundColor: this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.BackgroundColor || '#0AEEF5',
      borderRadius: this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.BorderRadius ||  10,
      color: this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.TextColor || '#fff',
      fontWeight: 'bold',
      marginTop: this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.MarginTop || 0,
    }
  }
  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.logoContainer}>
          <Image
            source={this.props.config.Logo}
            style={{
              height: 200
            }}></Image>
        </View>
        <ScrollView style={styles.loginFormContainer}>

          <View
            style={{
              marginBottom: 20,
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 26
              }}>{this.props.config && this.props.config.LoginText || 'Login'}</Text>
          </View>
          <View>
            <TextInput
              style={this.input()}
              placeholder={this.props.config && this.props.config.EmailConfig && this.props.config.EmailConfig.EmailPlaceHolder || 'Email'}
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({ email: text });
                console.log(this.state.email);
              }} />
            <TextInput
              style={this.input()}
              placeholder={this.props.config && this.props.config.PasswordConfig && this.props.config.PasswordConfig.PasswordPlaceHolder || 'Password'}
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({ password: text });
                console.log(this.state.password);
              }} />
            {/* loading screen on login button click */}
            {this.state.loading &&
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <View style={this.loadingButton()}>
                  <ActivityIndicator size="large" color={this.props.config && this.props.config.LoaderConfig && this.props.config.LoaderConfig.LoaderColor || '#0A11F5'}  />
                </View>
              </View>
            }
            {/* login button click if loader is not showing */}
            {!this.state.loading &&
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={this.loginUser}>
                <Text style={this.loginButtonStyle()}>{this.props.config && this.props.config.LoginButtonConfig && this.props.config.LoginButtonConfig.Text || 'Login'}</Text>
              </TouchableOpacity>
            }
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginFormContainer: {
    flex: 1,
    paddingHorizontal: 30
  },
  // input: {
  //   borderRadius: 10,
  //   borderColor: '#0AF5C3',
  //   borderWidth: 1,
  //   height: 40,
  //   marginBottom: 20,
  //   paddingHorizontal: 10
  // },
  // submitStyle: {
  //   width: 200,
  //   textAlign: 'center',
  //   paddingVertical: 10,
  //   backgroundColor: 'red',
  //   borderRadius: 10,
  //   color: '#fff',
  //   fontWeight: 'bold'
  // }
});