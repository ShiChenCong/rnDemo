import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Ask extends Component {
  static navigationOptions = {
    title: '车主问'
  }

  render() {
    return (
      <View>
        <Text>
          车主问
        </Text>
      </View>
    )
  }
}
