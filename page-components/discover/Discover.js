import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationBar, Icon, SideBar } from '../../ui-components'
import { 
  CommonToolBar, 
  CommonMenuItem, 
  FriendCircle, 
  Scan, 
  Shake, 
  Bottle, 
  Shopping,
  Game,
  LittleProgram,
  PageTemplate,
} from '../'

class Discover extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideBar: false,
      title: '发现',
    }
  }
  toggleSideBar () {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }
  goto (page) {
    let route = null
    switch(page){
      case 'FriendCircle':
        route = { name: 'FriendCircle', component: FriendCircle }
        break
      case 'Scan':
        route = { name: 'Scan', component: Scan }
        break
      case 'Shake':
        route = { name: 'Shake', component: Shake }
        break
      case 'Bottle':
        route = { name: 'Bottle', component: Bottle }
        break
      case 'Shopping':
        route = { name: 'Shopping', component: Shopping }
        break
      case 'Game':
        route = { name: 'Game', component: Game }
        break
      case 'LittleProgram':
        route = { name: 'LittleProgram', component: LittleProgram }
        break
      default:
        break
    }
    if(route)
      try {
        this.props.navigator.jumpTo(route)
      }catch(err){
        this.props.navigator.push(route)
      }
  }
  render() {
    let contentView = <ScrollView contentContainerStyle={styles.content} >
                        <View style={styles.backgroundTip} >
                          <View style={{marginBottom: 40 }} >
                            <Icon name="wechat" size={30} color="#e3e3e8" />
                          </View>
                        </View>

                        <View style={{marginTop:8}} >
                          <CommonMenuItem 
                            leftComponent={
                              <View style={{flexDirection:'row',alignItems:'center',}}>
                                <Image style={{width:22,height:22}} source={require('../../static/img/wechat_icons/circle.png')} />
                                <Text style={{fontSize: 16,color: '#000',marginLeft:8}}>朋友圈</Text>
                              </View>
                            } 
                            onPress={()=>{this.props.router.goto('/discover/friend-circle')}}
                          />
                        </View>
                        
                        <View style={{marginTop:15}} >
                          <CommonMenuItem 
                            title="扫一扫" 
                            icon={{name:'camera'}} 
                            onPress={()=>{this.props.router.goto('/discover/scan')}} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="摇一摇" 
                            icon={{name:'chrome'}} 
                            onPress={()=>{this.props.router.goto('/discover/shake')}} 
                          />
                        </View>
                        
                        <View style={{marginTop:15}} >
                          <CommonMenuItem 
                            title="漂流瓶" 
                            icon={{name:'chrome'}} 
                            onPress={()=>{this.props.router.goto('/discover/bottle')}}
                          />
                        </View>

                        <View style={{marginTop:15}} >
                          <CommonMenuItem 
                            title="购物" 
                            icon={{name:'shopping-bag',color:'#f86161'}} 
                            onPress={()=>{this.props.router.goto('/discover/shopping')}} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="游戏" 
                            icon={{name:'gamepad'}} 
                            onPress={()=>{this.props.router.goto('/discover/game')}} 
                            iconName="gamepad" 
                          />
                        </View>
                          
                        <View style={{marginTop:15}} >
                          <CommonMenuItem 
                            title="小程序" 
                            icon={{name:'share-alt',color:'#7586db'}} 
                            onPress={()=>{this.props.router.goto('/discover/little-program')}} 
                          />
                        </View>
                      </ScrollView>;
    let navigationBar = <NavigationBar 
                          title={this.state.title} 
                          titleStyle={{color:'white'}} 
                          style={{backgroundColor:'#353637'}} 
                          statusBarStyle={{barStyle:'light-content'}}
                        />;
    let toolBar = <CommonToolBar navigation={this.props.navigation} currentTab='discover' />;
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

export { Discover }