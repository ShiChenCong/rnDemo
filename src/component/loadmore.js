import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LoadMore extends React.Component {
  render() {
    const { more } = this.props;
    return (<Text style={styles.loadmore}>{more ? '加载更多...' : '暂无更多...'}</Text>)
  }
}

const styles = StyleSheet.create({
  loadmore: {
    textAlign: 'center',
    margin: 20,
  }
});