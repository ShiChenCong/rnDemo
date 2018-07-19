import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Index from '../containers/index';
import BuyCar from '../containers/buy-car';
import Ask from '../containers/ask';
import Personal from '../containers/personal';
import Search from '../component/search'

const IndexPage = createStackNavigator({
  Index,
  Search
}, {
    mode: 'modal',
    headerMode: 'none',
  })

IndexPage.navigationOptions = {
  title: '首页',
};

export default createBottomTabNavigator({
  index: IndexPage,
  buycar: BuyCar,
  ask: Ask,
  personal: Personal
}, {
    navigationOptions: ({ navigation }) => {
      // console.log(navigation);
      return ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'index') {
            iconName = 'home';
          } else if (routeName === 'buycar') {
            iconName = 'handshake-o';
          } else if (routeName === 'ask') {
            iconName = 'book';
          } else {
            iconName = 'user'
          }
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      })
    },
    tabBarOptions: {
      activeTintColor: '#5a4ec0',
      inactiveTintColor: 'gray',
      // tabStyle: { // tab中的icon处的样式
      //   height: 50
      // },
      // style: { // 整个tab的样式
      //   height: 20
      // }
    },
  })