import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationBar, Icon } from '../../ui-components'
import friendCircleMsgItems from '../../static/data/friendCircleMsgItems.js'

class MyPosts extends Component {
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: '相册',
      username: 'Hisheng',
      msgItems: ds.cloneWithRows(friendCircleMsgItems)
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <ListView 
          style={styles.msgList}
          dataSource={this.state.msgItems} 
          renderRow={(rowData) => <FriendMsgItem msg={rowData} />}
          renderHeader={()=>(
            <View style={styles.listHeader}>
              <View style={styles.topBackground}>
                <View style={{marginTop:-50}}><Icon name="wechat" size={30} color="#e3e3e8" /></View>
              </View>
              <View style={styles.coverArea} >
                <Image style={styles.cover} source={require('../../static/img/avatar1.jpg')} />
                <Image style={styles.avatar} source={require('../../static/img/avatar3.jpg')} />
                <Text style={styles.username} >{this.state.username}</Text>
              </View>
            </View>
          )}
        />
        <NavigationBar 
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
          rightComponent={(
            <TouchableHighlight onPress={()=>{}} >
              <Text><Icon name="camera" size={18} color="white" /></Text>
            </TouchableHighlight>
          )} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#efeff4',
  },
  msgList: {
    backgroundColor: '#efeff4',
  },
  listHeader: {},
  topBackground: {
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverArea: {
    height: 250,
    position: 'relative',
    backgroundColor: 'white',
  },
  cover: {
    height: 210,
  },
  avatar: {
    position: 'absolute',
    top: 160,
    right: 20,
    height: 70,
    width: 70,
    borderColor: 'white',
    borderWidth: 2,
  },
  username: {
    position: 'absolute',
    top: 190,
    right: 100,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

export { MyPosts }

class FriendMsgItem extends Component {
  render () {
    return (
      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1,flexDirection:'row',padding:10,paddingLeft:5,paddingRight:5,alignItems:'flex-start',backgroundColor: 'white',}} >
        <Image style={{width:45,height:45,marginRight:7,}} source={this.props.msg.user.avatar} />
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}} >
          <Text style={{color:'#66789e',fontSize:15,}} >{this.props.msg.user.name}</Text>
          {this.props.msg.text?<Text style={{color:'#000',fontSize:15,padding:0,paddingTop:8,paddingBottom:8,}} >{this.props.msg.text}</Text>:null}
          {
            this.props.msg.imgs.length?
            (
              <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',alignItems:'center',marginBottom:5,}} >
                {
                  this.props.msg.imgs.map((img) => <Image style={{width:70,height:70,margin:3}} source={img} key={Math.random()} />)
                }
              </View>
            ):
            null
          }
          {this.props.msg.location.title?<Text style={{color:'#66789e',fontSize:12,}} >{this.props.msg.location.title}</Text>:null}
          <Text style={{color:'#888',fontSize:12,}} >{this.props.msg.postTime}</Text>
        </View>
      </View>
    );
  }
}