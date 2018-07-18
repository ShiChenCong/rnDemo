import React, { Component } from 'react';
import { Text, Dimensions, Platform, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { SearchInput, Button } from 'teaset';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: []
    }
  }

  componentDidMount() {
    fetch('https://api.haomaiche.com/price/movements/focus/330100?mark=1&time=1531824872107&source=101').then(res => res.json()).then((res) => {
      res.data.vo.forEach((car, index) => { car.key = String(index) })
      this.setState({
        recommend: res.data.vo.slice(0, 9)
      })
    })
  }

  getCarTypes = () => this.state.recommend.map((car, key) => {
    return (
      <Button onPress={() => { alert(2) }} title={car.typeName} style={styles.item} key={key}/>
    );
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchInput
            style={{ width: '75%' }}
            placeholder='请输入车型名称 例如: 奥迪A4L'
            onSubmitEditing={(e) => { console.log(e.target); }}
          />
          <TouchableOpacity style={{ width: '15%' }} onPress={() => this.props.navigation.goBack()}>
            <Text>取消</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>为您推荐:</Text>
        <View style={styles.recommend}>
            {this.getCarTypes()}
        </View>
      </View>
    )
  }
}

const isIphonex = Dimensions.get("window").height === 812 && Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    marginTop: isIphonex ? 50 : 30,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  search: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  recommend: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '26%',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#9a9a9a',
    fontSize: 12,
    marginBottom: 30,
  }
})