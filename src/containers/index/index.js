import React, { Component } from 'react'
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import IndexBanner from './banner';
import CarList from './cars';
import { Button } from 'teaset';

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

  constructor() {
    super();
    this.state = {
      brands: []
    }
  }

  componentDidMount() {
    fetch('https://api.haomaiche.com/ware/car/v5/hotbrand/330100?limit=6&time=1531888110253&source=102').then(res => res.json()).then(((res) => {
      this.setState({
        brands: res.data
      })
    }))
  }

  getBrands = () => {
    const { brands } = this.state;
    const brandList = brands.map(brand => <Image
      key={brand.topBrandId}
      style={styles.BrandIcon}
      source={{ uri: brand.brandLogo }}
    />)
    return brandList;
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <IndexBanner navigation={this.props.navigation} />
        <View style={styles.brandConinater}>
          {this.getBrands()}
          <Button
            size='md'
            title='更多'
          />
        </View>
        <CarList />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  brandConinater: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  BrandIcon: {
    height: 40,
    width: 40,
  }
});