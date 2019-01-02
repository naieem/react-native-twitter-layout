import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import {Auth, Firebase} from '../db/db.config';
import sharedService from '../services/shared.services';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
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
    Auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        console.log('Login successfully');
        this.props.loginButtonClicked(true);
        sharedService.setLoggedInUserStatus(true);
      })
      .catch(function (error) {
        // Handle Errors here.
        sharedService.setLoggedInUserStatus(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
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
            }}>Login</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={this.state.email}
              onChangeText={(text) => {
              this.setState({email: text});
              console.log(this.state.email);
            }}/>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={(text) => {
              this.setState({password: text});
              console.log(this.state.password);
            }}/>
            <TouchableOpacity
              style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
              onPress={this.loginUser}>
              <Text style={styles.submitStyle}>Login</Text>
            </TouchableOpacity>
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
  input: {
    borderRadius: 10,
    borderColor: '#0AF5C3',
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  submitStyle: {
    width: 200,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#0AF5C3',
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold'
  }
});