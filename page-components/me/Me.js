import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { NavigationBar, Icon, SideBar } from '../../ui-components'
import { 
  CommonToolBar, 
  CommonMenuItem, 
  Profile, 
  MyPosts, 
  Collections,
  Wallet,
  Cards,
  StickerGallery,
  Settings,
} from '../'

class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideBar: false,
      avatar: require('../../static/img/avatar3.jpg'),
      title: '我',
    }
  }
  toggleSideBar () {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }
  goto (route) {
    try {
      this.props.navigator.jumpTo(route)
    }catch(err){
      this.props.navigator.push(route)
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <ScrollView contentContainerStyle={styles.content} >
          <View style={styles.backgroundTip} >
            {/*<Text style={styles.backgroundTipText} >暂无聊天信息</Text>*/}
            <View style={{marginBottom: 40 }} >
              <Icon name="wechat" size={30} color="#e3e3e8" />
            </View>
          </View>

          <View style={{marginTop:8}} >
            <CommonMenuItem 
              title="Hisheng" 
              leftComponent={
                <Image 
                  source={this.state.avatar} 
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                />
              } 
              rightComponent={
                <View style={{flexDirection:'row',alignItems:'center'}} >
                  <View style={{flex:1}} >
                    <Text style={{fontSize:16,marginBottom:8}} >Hisheng</Text>
                    <Text style={{fontSize:14}} >微信号：HishengMeow</Text>
                  </View>
                  <View >
                    <Icon name="qrcode" size={20} color="#888" />
                  </View>
                </View>
              } 
              onPress={()=>{this.props.router.goto('/me/profile')}}
            />
          </View>

          <View style={{marginTop:15}} >
            <CommonMenuItem 
              title="相册" 
              icon={{name:'photo'}} 
              style={{borderBottomWidth: 0}} 
              onPress={()=>{this.props.router.goto('/me/my-posts')}} 
            />
            <CommonMenuItem 
              title="收藏" 
              icon={{name:'cube'}} 
              style={{borderBottomWidth: 0}} 
              onPress={()=>{this.props.router.goto('/me/collections')}} 
            />
            <CommonMenuItem 
              title="钱包" 
              icon={{name:'credit-card'}} 
              style={{borderBottomWidth: 0}} 
              onPress={()=>{this.props.router.goto('/me/wallet')}} 
            />
            <CommonMenuItem 
              title="卡包" 
              icon={{name:'folder-open'}} 
              onPress={()=>{this.props.router.goto('/me/cards')}} 
            />
          </View>
          
          <View style={{marginTop:15}} >
            <CommonMenuItem 
              title="表情" 
              icon={{name:'smile-o',color:'#ffc711'}} 
              onPress={()=>{this.props.router.goto('/me/sticker-gallery')}} 
            />
          </View>

          <View style={{marginTop:15}} >
            <CommonMenuItem 
              title="设置" 
              icon={{name:'cog'}} 
              onPress={()=>{this.props.router.goto('/me/settings')}} 
            />
          </View>

        </ScrollView>
        <NavigationBar 
          title={this.state.title} 
          titleStyle={{color:'white'}} 
          style={{backgroundColor:'#353637'}} 
          statusBarStyle={{barStyle:'light-content'}}
        />
        <CommonToolBar router={this.props.router} navigator={this.props.navigator} currentTab='me' />
        <SideBar show={this.state.showSideBar} >
          <Text>侧边栏</Text>
        </SideBar>
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

export { Me }