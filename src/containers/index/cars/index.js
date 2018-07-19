import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Toast, Theme } from 'teaset';
import LoadMore from '../../../component/loadmore';

export default class CarList extends Component {
  constructor() {
    super();
    this.state = {
      carList: [],
      more: true,
    }
    console.disableYellowBox = true
  }

  ToastExample = {};

  componentDidMount() {
    this.search();
  }


  renderItem = ({ item }) => (<View style={styles.car}>
    <Image
      style={styles.carIcon}
      source={{ uri: item.tpicPath }}
    />
    <View style={{ width: '50%', paddingLeft: '3%' }}>
      <Text style={{ marginBottom: 5 }}>{item.typeName}</Text>
      <Text style={[styles.text, { marginBottom: 10 }]}>指导价: {`${item.typeMaxPrice / 10000}万 - ${item.typeMinPrice / 10000}万`}</Text>
      <Text style={styles.text}><Text style={styles.compare}>比</Text> {`${item.askCount}人正在比价`}</Text>
    </View>
    <Text style={{ color: '#3e3587' }}>{`降${(item.maxWarningPrice / 10000).toFixed(2)}万`}</Text>
  </View>)

  search = () => {
    this.showCustom();
    fetch('https://api.haomaiche.com/ware/car/v5/recommend/330100?mark=1&time=1531888110252&source=102').then(res => res.json()).then(res => {
      this.setState(({ carList }) => {
        if (carList.length > 40){
          return {
            more: false
          }
        };
        return {
          carList: carList.concat(res.data)
        }
      }, () => {
        this.hideCustom();
      })
    })
  }

  _keyExtractor = (item, index) => item.typeId;

  showCustom() {
    const { ToastExample } = this;
    if (ToastExample.customKey) return;
    ToastExample.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }

  hideCustom() {
    const { ToastExample } = this;
    if (!ToastExample.customKey) return;
    Toast.hide(ToastExample.customKey);
    ToastExample.customKey = null;
  }

  render() {
    return (
      <FlatList
        style={{ flex: 1, height: Dimensions.get('window').height - 330 }}
        data={this.state.carList}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        ListFooterComponent={<LoadMore more={this.state.more}/>}
        getItemLayout={(data, index) => ({ length: 100, offset: 100 * index, index })}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          this.search();
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  car: {
    height: 100,
    lineHeight: 100,
    width: '100%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  },
  carIcon: {
    width: 105,
    height: 65,
  },
  compare: {
    backgroundColor: '#5a4ec0',
    height: 15,
    width: 15,
    color: '#fff',
  },
  text: {
    color: '#9a9a9a',
    fontSize: 12
  }
});