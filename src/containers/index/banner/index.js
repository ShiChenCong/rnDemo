import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  bannerImage: {
    width: '100%',
    height: 280,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 40,
    marginRight: 20,
  }
})