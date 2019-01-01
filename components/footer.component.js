import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.footerNavbar}></View>
    );
  }
}
const styles = StyleSheet.create({
    footerNavbar: {
        height: 50,
        backgroundColor: 'red',
        paddingHorizontal: 10
      }
});
