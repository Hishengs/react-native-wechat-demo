/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Chat } from './page-components'
import router from './router.js'

export default class rnDemo extends Component {
  render() {
    return (
      <Navigator
      initialRoute={router.routes[0]}
      configureScene={(route, routeStack) => Navigator.SceneConfigs.Direct}
      renderScene={(route, navigator) => {
        let Component = route.component;
        let newRouter = router.bindNavigator(navigator);
        return <Component route={route} router={newRouter} navigator={navigator} />
      }} />
    );
  }
}

AppRegistry.registerComponent('rnDemo', () => rnDemo);
