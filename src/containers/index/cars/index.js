import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default class CarList extends Component {
  constructor() {
    super();
    this.state = {
      carList: [],
    }
  }

  componentDidMount() {
    fetch('https://api.haomaiche.com/ware/car/v5/recommend/330100?mark=1&time=1531888110252&source=102').then(res => res.json()).then(res => {
      this.setState({
        carList: res.data
      })
    })
  }

  renderItem = ({ item }) => (<View style={styles.car}>
    <Image
      style={styles.carIcon}
      source={{ uri: item.tpicPath }}
    />
  </View>)

  render() {
    return (
      <View>
        <FlatList
          data={this.state.carList}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  car: {
    height: 100,
  },
  carIcon: {
    width: 105,
    height: 65,
  }
});