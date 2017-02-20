import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
} from 'react-native';
import { NavigationBar, Icon, SideBar } from '../../ui-components'
import { CommonToolBar, ChatListItem, PageTemplate } from '../'
import chatItems from '../../static/data/chatItems.js'

class Chat extends Component {
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      showSideBar: false,
      chatItems: ds.cloneWithRows(chatItems)
    }
  }
  toggleSideBar () {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }
  render() {
    let listView = 
                  <ListView 
                    style={styles.chatList}
                    dataSource={this.state.chatItems} 
                    renderRow={(rowData) => <ChatListItem chatItem={rowData} />}
                    renderHeader={()=>(
                      <View style={styles.listHeader}>
                        <View style={styles.topBackground} >
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
                      </View>
                    )}
                  />;
    let navigationBar = 
                  <NavigationBar 
                    title='微信' 
                    titleStyle={{color:'white'}} 
                    style={{backgroundColor:'#353637'}} 
                    statusBarStyle={{barStyle:'light-content'}}
                    rightComponent={(
                      <TouchableHighlight onPress={this.toggleSideBar.bind(this)} >
                        <Text><Icon from="entypo" name="plus" size={25} color="white" /></Text>
                      </TouchableHighlight>
                    )} 
                  />;
    let toolBar = <CommonToolBar router={this.props.router} navigator={this.props.navigator} currentTab='home' />;
    let sideBar = <SideBar show={this.state.showSideBar} ><Text>侧边栏</Text></SideBar>;
    return (
      <PageTemplate 
        contentView={listView} 
        navigationBar={navigationBar} 
        toolBar={toolBar} 
        sideBar={sideBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {},
  topBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
  },
  search: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
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
    marginBottom: 50,
  },
});

export { Chat }