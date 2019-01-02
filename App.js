import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AppBootstrapper from "./components/app.bootstrap.component";
console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <AppBootstrapper></AppBootstrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});