import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import {
	Button
} from 'react-native';
import { Chat, Contact, Discover, Me } from './page-components'
import { Icon } from './ui-components'

const ChatStack = StackNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerTitle: '微信',
      tabBarVisible: true,
      tabBarIcon: function({tintColor,focused}){
        if(focused)
          return <Icon name='wechat' color='#4fbb0e' size={20} />;
        else
          return <Icon name='wechat' color='#777777' size={20} />;
      },
      tabBarLabel: '微信'
    }
  },
});

const ContactStack = StackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: {
      headerTitle: '通讯录',
      tabBarVisible: true,
      tabBarIcon: function({tintColor,focused}){
        if(focused)
          return <Icon from="simpleline" name='people' color='#4fbb0e' size={20} />;
        else
          return <Icon from="simpleline" name='people' color='#777777' size={20} />;
      },
      tabBarLabel: '通讯录'
    }
  },
});

const DiscoverStack = StackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      headerTitle: '发现',
      tabBarVisible: true,
      tabBarIcon: function({tintColor,focused}){
        if(focused)
          return <Icon name='globe' color='#4fbb0e' size={20} />;
        else
          return <Icon name='globe' color='#777777' size={20} />;
      },
      tabBarLabel: '发现'
    }
  },
});

const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      headerTitle: '我',
      tabBarVisible: true,
      tabBarIcon: function({tintColor,focused}){
        if(focused)
          return <Icon from="simpleline" name='user' color='#4fbb0e' size={20} />;
        else
          return <Icon from="simpleline" name='user' color='#777777' size={20} />;
      },
      tabBarLabel: '我'
    }
  },
});

const App = TabNavigator({
  ChatStack: {
    screen: ChatStack,
  },
  ContactStack: { screen: ContactStack },
  DiscoverStack: { screen: DiscoverStack },
  MeStack: { screen: MeStack },
},{
  tabBarPosition: 'bottom',
  backBehavior:'none',
  // swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#4fbb0e',
    inactiveTintColor: '#777777',
    activeBackgroundColor:'white',
    inactiveBackgroundColor:'white',
    style: {
      backgroundColor: 'white',
      borderTopColor: '#aaa',
      borderTopWidth: 0.5,
      height: 49,
    },
    indicatorStyle: {
      height: 0,
    },
    labelStyle: {
      fontSize: 11,
      margin: 0
    },
    iconStyle:{
      height:30,
      width:30,
      margin:0,
    },
    tabStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    }
  }
});

export default App;