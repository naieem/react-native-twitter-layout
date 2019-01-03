import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.footerNavbar}>
        <View>
          <Icon name='ios-home' type='ionicon' color='#fff'></Icon>
          <Text style={styles.navButtonText}>Home</Text>
        </View>
        <View>
          <Icon name='ios-list' type='ionicon' color='#fff'></Icon>
          <Text style={styles.navButtonText}>List</Text>
        </View>
        <View>
          <Icon name='ios-images' type='ionicon' color='#fff'></Icon>
          <Text style={styles.navButtonText}>Gallery</Text>
        </View>
        <View>
          <Icon name='ios-musical-notes' type='ionicon' color='#fff'></Icon>
          <Text style={styles.navButtonText}>Tunes</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footerNavbar: {
    height: 60,
    backgroundColor: '#15EAD4',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  navButtonText:{
    fontWeight:'bold',
    color:'#fff'
  }
});
