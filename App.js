import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  AppState
} from 'react-native';
import {Auth} from './db/db.config';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userInfo: {}
    };
    this.loginUser = this.loginUser.bind(this);
    this._handleAppStateChange = this._handleAppStateChange.bind(this);
  }
  componentDidMount(){
    AppState.addEventListener('change', this._handleAppStateChange);
    Auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      }
    });
  }
  _handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }else{
      console.log('App has gone to the background!');
      Auth.signOut().then((res)=>{
        console.log(res);
        console.log('signout done');
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  loginUser = ()=> {
    console.log('login called');
    console.log(this.state);
    Auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        console.log('Login successfully');
      })
      .catch(function (error) {
        // Handle Errors here.
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
            source={require('./assets/logo.png')}
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