import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Personal extends Component {
  static navigationOptions = {
    title: '我的'
  }
  render() {
    return (
      <View>
        <Text>
          我的
        </Text>
      </View>
    )
  }
}
