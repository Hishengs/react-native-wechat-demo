import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ScrollView,
  Modal
} from 'react-native';
import { NavigationBar, Icon, SideBar } from '../../ui-components'
import { CommonToolBar, ChatListItem, PageTemplate } from '../'
import chatItems from '../../static/data/chatItems.js'

class ModalExample extends Component {

  state = {
    modalVisible: true,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

class Chat extends Component {
  static navigationOptions = {
    title: '微信',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#353637',
    },
  }
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
                  <ScrollView>
                  <ModalExample/>
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
                  />
                  </ScrollView>
                  ;
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
    let toolBar = <CommonToolBar navigation={this.props.navigation} currentTab='home' />;
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
    marginTop: -65,
    /*marginBottom: 50,*/
  },
});

export { Chat }