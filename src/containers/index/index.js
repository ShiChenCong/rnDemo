import React, { Component } from 'react'
import { Image, View, StatusBar } from 'react-native';
import IndexBanner from './banner';

export default class Index extends Component {
  static navigationOptions = {
    title: '首页',
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndexBanner navigation={this.props.navigation} />
      </View>
    )
  }
}
