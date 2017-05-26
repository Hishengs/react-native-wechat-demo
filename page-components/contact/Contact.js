import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import { NavigationBar, Icon, SideBar } from '../../ui-components'
import { CommonToolBar, CommonMenuItem, PageTemplate } from '../'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideBar: false,
      commonMenuItems: [
        {title:'新的朋友',backgroundColor:'#fa9d3b',iconName:'user-follow'},
        {title:'群聊',backgroundColor:'#1aad19',iconName:'people'},
        {title:'标签',backgroundColor:'#2782d7',iconName:'tag'},
        {title:'公众号',backgroundColor:'#2782d7',iconName:'user'},
      ],
    }
  }
  toggleSideBar () {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }
  render() {
    let contentView = <ScrollView contentContainerStyle={styles.content} >
                        <View style={styles.backgroundTip} >
                          <View style={{marginBottom: 40 }} >
                            <Icon name="wechat" size={30} color="#e3e3e8" />
                          </View>
                        </View>
                        <View style={styles.search} >
                          <View style={styles.searchInput} >
                            <Text style={{textAlign:'center',color:'#888'}} >
                              <Icon name="search" color="#888" /> 搜索
                            </Text>
                            <View style={styles.siri} ><Icon name="microphone" color="#888" /></View>
                          </View>
                        </View>

                        <View >
                          {
                            this.state.commonMenuItems.map((menuItem)=>(
                              <CommonMenuItem 
                                leftComponent={
                                  <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <View style={{backgroundColor:menuItem.backgroundColor,padding:8,}} >
                                      <Icon from="simpleline" name={menuItem.iconName} size={16} color="white" />
                                    </View>
                                    <Text style={{fontSize: 16,color: '#000',marginLeft:8}}>{menuItem.title}</Text>
                                  </View>
                                }
                                style={{borderBottomWidth: 0,paddingLeft: 10}} 
                                hideArrow 
                                key={Math.random()}
                              />
                            ))
                          }
                        </View>

                      </ScrollView>;
    let navigationBar = <NavigationBar 
                          title='通讯录' 
                          titleStyle={{color:'white'}} 
                          style={{backgroundColor:'#353637'}} 
                          statusBarStyle={{barStyle:'light-content'}}
                          rightComponent={(
                            <TouchableHighlight onPress={this.toggleSideBar.bind(this)} >
                              <Text><Icon from="simpleline" name="user-follow" size={20} color="white" /></Text>
                            </TouchableHighlight>
                          )} 
                        />;
    let toolBar = <CommonToolBar navigation={this.props.navigation} currentTab='contact' />;
    let sideBar = <SideBar show={this.state.showSideBar} ><Text>侧边栏</Text></SideBar>;
    return (
      <PageTemplate 
        contentView={contentView} 
        navigationBar={navigationBar} 
        toolBar={toolBar} 
        sideBar={sideBar} 
      />
    );
  }
}

const styles = StyleSheet.create({
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
  search: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 30,
    borderColor: '#eee',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    position: 'relative',
  },
  siri: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  chatList: {
    flex: 1,
  },
  welcome: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    width: 50,
    height: 50,
    padding: 10
  },
  enterBtn: {
    marginTop: 20,
  }
});

export { Contact }