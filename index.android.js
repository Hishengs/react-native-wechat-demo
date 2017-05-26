/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from "react-navigation";
import { AppRegistry, View, Text, Button } from 'react-native';
import { Chat, Contact, Discover, Me } from './page-components';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

const rnDemo = StackNavigator({
  Chat: { screen: Chat },
  Contact: { screen: Contact },
  Discover: { screen: Discover },
  Me: { screen: Me },
},{
  initialRouteName: 'Chat',
  mode: 'modal',
  headerMode: 'none',
  /*transitionConfig: () => ({
    screenInterpolator:CardStackStyleInterpolator.forHorizontal,
  })*/
});

AppRegistry.registerComponent('rnDemo', () => rnDemo);
