import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, ImageBackground, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Button } from 'teaset';

export default class IndexBanner extends Component {

  handleSearch = () => {
    this.props.navigation.navigate('Search')
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://statics.haomaiche.com/v5/images/hz/home_banner_bg.jpg' }}
          style={styles.bannerImage}
        > 
          <TouchableOpacity onPress={this.handleSearch}>
            <Icon name="search" size={20} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>价比三家 买车不花冤枉钱</Text>
          <Button style={styles.button} size='md' title='选车去比价' onPress={() => alert('Hello world')} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 280,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 25,
    marginRight: 20,
  },
  button: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    marginBottom: 120,
    marginTop: 18,
    color: '#fff',
    fontSize: 25,
    fontWeight: '700'
  }
})