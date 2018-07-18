import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class BuyCar extends Component {
  static navigationOptions = {
    title: '买好车'
  }
  render() {
    return (
      <View>
        <Text>
          买好车
        </Text>
      </View>
    )
  }
}
