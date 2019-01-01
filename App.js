import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.png')} style={{ height: 200, }}></Image>
        </View>
        <ScrollView style={styles.loginFormContainer}>

          <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Login</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
            />
            <TouchableOpacity>
              <Button title='Login' raised buttonStyle={styles.submitStyle} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormContainer: {
    flex: 1,
    paddingHorizontal: 30,
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
    backgroundColor: '#0AF5C3',
    borderRadius: 10,
    borderColor: 'transparent',
    borderWidth: 0
  }
});