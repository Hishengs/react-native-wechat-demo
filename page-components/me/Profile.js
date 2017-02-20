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
import { PageTemplate, CommonMenuItem } from '../'
import { NavigationBar, Icon } from '../../ui-components'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '个人信息'
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
                            title="头像" 
                            rightComponent={<Image style={{width:70,height:70,}} source={require('../../static/img/avatar3.jpg')} />} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="名字" 
                            rightComponent={<Text style={{color:'#777'}}>Hisheng</Text>} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="微信号" 
                            rightComponent={<Text style={{color:'#777'}}>HishengMeow</Text>} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="我的二维码" 
                            rightComponent={<Icon name="qrcode" size={20} color="#777" />} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem title="我的地址" />
                        </View>

                        <View style={{marginTop:20}} >
                          <CommonMenuItem 
                            title="性别" 
                            rightComponent={<Text style={{color:'#777'}}>男</Text>} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="地区" 
                            rightComponent={<Text style={{color:'#777'}}>格陵兰</Text>} 
                            style={{borderBottomWidth: 0}} 
                          />
                          <CommonMenuItem 
                            title="个性签名" 
                            rightComponent={<Text style={{color:'#777'}}>偏安一隅，固执一念</Text>} 
                          />
                        </View>

                      </ScrollView>;
    let navigationBar =  <NavigationBar 
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
                                <Text style={{color:'white',fontSize:15}}> 我</Text>
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

export { Profile }