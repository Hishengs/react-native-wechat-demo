import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ScrollView,
} from 'react-native';
import { NavigationBar, Icon } from '../../ui-components'
import { PageTemplate, CommonMenuItem } from '../'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '设置'
    }
  }
  render() {
    let contentView = <ScrollView contentContainerStyle={styles.content} >
                        <View style={styles.backgroundTip} >
                          <View style={{marginBottom: 40 }} >
                            <Icon name="wechat" size={30} color="#e3e3e8" />
                          </View>
                        </View>

                        <View style={{marginTop:15}} >
                          <CommonMenuItem 
                            title="账户与安全" 
                            rightComponent={
                              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#4fbb0e',borderRadius:18,height:18,width:18,marginRight:5,}} >
                                  <Icon name="lock" color="white" />
                                </View>
                                <Text style={{color:'#777'}}>已保护</Text>
                              </View>
                            } 
                          />
                        </View>

                        <View style={{marginTop:20}} >
                          <CommonMenuItem 
                            title="新消息通知" 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="隐私" 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="通用" 
                          />  
                        </View>

                        <View style={{marginTop:20}} >
                          <CommonMenuItem 
                            title="帮助与反馈" 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="关于微信" 
                          />
                        </View>

                        <View style={{marginTop:20}} >
                          <CommonMenuItem 
                            rightComponent={
                              <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                                <Text style={{fontSize:16}}>退出登录</Text>
                              </View>
                            } 
                            hideArrow 
                          />
                        </View>

                      </ScrollView>;
    let navigationBar = <NavigationBar 
                          title={this.state.title} 
                          titleStyle={{color:'white'}} 
                          style={{backgroundColor:'#353637'}} 
                          statusBarStyle={{barStyle:'light-content'}}
                          leftComponent={(
                            <TouchableHighlight onPress={()=>{this.props.navigator.jumpBack()}} >
                              <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{marginBottom:3}}>
                                  <Icon name="angle-left" size={24} color="white" />
                                </View>
                                <Text style={{color:'white',fontSize:15}}> 发现</Text>
                              </View>
                            </TouchableHighlight>
                          )} 
                        />;
    return (
      <PageTemplate 
        contentView={contentView} 
        navigationBar={navigationBar} 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#efeff4',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  backgroundTip: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
  },
  backgroundTipText: {
    fontSize: 16,
    color: '#666',
    height: 50,
  },
});

export { Settings }