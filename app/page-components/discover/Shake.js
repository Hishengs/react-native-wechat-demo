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

class Shake extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '摇一摇'
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
        </ScrollView>
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
              <Text><Icon name="cog" size={20} color="white" /></Text>
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
    // justifyContent: 'center',
    // alignItems: 'center',
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

export { Shake }