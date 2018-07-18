import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Index extends Component {
  static navigationOptions = {
    title: '首页'
  }
  render() {
    return (
      <View>
        <Text>
          首页
        </Text>
      </View>
    )
  }
}
