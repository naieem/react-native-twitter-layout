import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import {Icon} from 'react-native-elements';
import data from './assets/data.json';
const SECOND = 1;
const MINUTE = 60;
const HOUR = 3600;
const DAY = 86400;
const MONTH = 2629746;
const YEAR = 31556952;
const DECADE = 315569520;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBox: false
    }
    this.timeAgo = this
      .timeAgo
      .bind(this);
    this.videoListItem = this
      .videoListItem
      .bind(this);
  }
  videoListItem = (video) => {
    return (
      <TouchableOpacity style={{
        padding: 20
      }}>
        <View>
          <Image
            source={{
            uri: video.snippet.thumbnails.medium.url
          }}
            style={{
            height: 200
          }}></Image>
          <Text
            style={{
            fontWeight: 'bold',
            fontSize: 26
          }}>
            {video.snippet.title}
          </Text>
          <Text>{this.timeAgo(new Date(video.snippet.publishedAt))}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  timeAgo = (date) => {
    var now = new Date();
    var diff = Math.round((now - date) / 1000);

    var unit = '';
    var num = 0;
    var plural = false;

    switch (true) {
      case diff <= 0:
        return 'just now';
        break;

      case diff < MINUTE:
        num = Math.round(diff / SECOND);
        unit = 'sec';
        plural = num > 1;
        break;

      case diff < HOUR:
        num = Math.round(diff / MINUTE);
        unit = 'min';
        plural = num > 1;
        break;

      case diff < DAY:
        num = Math.round(diff / HOUR);
        unit = 'hour';
        plural = num > 1;
        break;

      case diff < MONTH:
        num = Math.round(diff / DAY);
        unit = 'day';
        plural = num > 1;
        break;

      case diff < YEAR:
        num = Math.round(diff / MONTH);
        unit = 'month';
        plural = num > 1;
        break;

      case diff < DECADE:
        num = Math.round(diff / YEAR);
        unit = 'year';
        plural = num > 1;
        break;

      default:
        num = Math.round(diff / YEAR);
        unit = 'year';
        plural = num > 1;
    }

    var str = '';
    if (num) {
      str += `${num} `;
    }

    str += `${unit}`;

    if (plural) {
      str += 's';
    }

    str += ' ago';

    return str;
  }
  render() {
    return (
      <View style={styles.container}>
        {/* header Navbar */}
        <View style={styles.header}>
          {!this.state.showSearchBox && <Image
            source={require('./assets/instagram.png')}
            style={{
            height: 30,
            width: 100
          }}></Image>
}
          {this.state.showSearchBox && <View
            style={{
            flex: 1,
            paddingHorizontal: 10
          }}>
            <TextInput
              style={{
              height: 30,
              borderWidth: 1,
              borderColor: '#e5e5e5',
              paddingHorizontal: 10
            }}
              placeholder="Type here to translate!"
              onChangeText={(text) => console.log('hello world')}/>
          </View>
}

          <View style={styles.headerRight}>
            <View style={{
              marginRight: 20
            }}>
              <TouchableOpacity
                onPress={() => this.setState({
                showSearchBox: !this.state.showSearchBox
              })}>
                <Icon name='ios-search' type='ionicon' color='#517fa4'/>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name='ios-more' type='ionicon' color='#517fa4'/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* main Container */}
        <View style={styles.mainContainer}>
          <FlatList
            data={data.items}
            renderItem={({item, separators}) => this.videoListItem(item)}
            keyExtractor={(item, index) => item.snippet.title}/>
        </View>
        {/* Footer Navbar */}
        <View style={styles.footerNavbar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
  },
  mainContainer: {
    flex: 1
  },
  footerNavbar: {
    height: 50,
    backgroundColor: 'red',
    paddingHorizontal: 10
  }
});
