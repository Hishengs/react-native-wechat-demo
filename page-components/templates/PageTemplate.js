import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { NavigationBar, } from '../../ui-components'

class PageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '模板',
    }
  }
  componentWillMount () {
    this.setState({
      title: this.props.title||this.state.title,
    })
  }
  render() {
    // 由三部分组成：导航栏 + 列表视图 + 工具栏
    let navigationBar = this.props.navigationBar || 
                        (
                          <NavigationBar 
                            title={this.state.title} 
                            titleStyle={{color:'white'}} 
                            style={{backgroundColor:'#353637'}} 
                            statusBarStyle={{barStyle:'light-content'}} 
                          />
                        );
    let contentView = this.props.contentView || null;
    let toolBar = this.props.toolBar || null;
    let sideBar = this.props.sideBar || null;
    return (
      <View style={{flex:1,position:'relative',backgroundColor:this.props.backgroundColor||'#efeff4'}} >
        {contentView}
        {navigationBar}
        {toolBar}
        {sideBar}
      </View>
    );
  }
}

export { PageTemplate }