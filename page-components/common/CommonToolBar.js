import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { ToolBar, Icon } from '../../ui-components'
import { Chat, Contact, Discover, Me } from '../'

class CommonToolBar extends Component {
	constructor (props) {
    super(props)
    this.state = {
      currentTab: 'home'
    }
  }
  componentWillMount () {
    this.setState({
      currentTab: this.props.currentTab
    })
  }
  // componentWillReceiveProps (nextProps) {
  //   this.setState({
  //     currentTab: nextProps.currentTab
  //   })
  // }
	switchTab (path) {
    // if(tab==this.state.currentTab)return
    // let route = { name:'home', component:Chat }
    // switch(tab){
    //   case 'wechat':
    //   default:
    //     break
    //   case 'contact':
    //     route = { name:'contact', component:Contact }
    //     break
    //   case 'discover':
    //     route = { name:'discover', component:Discover }
    //     break
    //   case 'me':
    //     route = { name:'me', component:Me }
    //     break
    // }
    // let route = this.props.router.getRouteByPath(path)
    // if(!route)return
    // try {
    //   this.props.navigator.jumpTo(route)
    // }catch(err){
    //   this.props.navigator.replace(route)
    // }
    this.props.router.goto(path)
  }
	render () {
		return (
			<ToolBar style={{backgroundColor:'#ffffff22'}}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Chat')}} underlayColor="#00000000" >
        	<View style={styles.tab} >
        		<Icon name='wechat' color={this.props.currentTab=='home'?TabLogoConfig.activeColor:TabLogoConfig.color} size={TabLogoConfig.size} />
	          <Text style={this.props.currentTab=='home'?styles.activeTabText:styles.tabText} >微信</Text>
        	</View>	
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Contact')}} underlayColor="#00000000" underlayColor="#00000000" >
        	<View style={styles.tab} >
        		<Icon from="simpleline" name='people' color={this.props.currentTab=='contact'?TabLogoConfig.activeColor:TabLogoConfig.color} size={TabLogoConfig.size} />
	          <Text style={this.props.currentTab=='contact'?styles.activeTabText:styles.tabText} >通讯录</Text>
        	</View>	
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Discover')}} underlayColor="#00000000" >
        	<View style={styles.tab} >
        		<Icon name='globe' color={this.props.currentTab=='discover'?TabLogoConfig.activeColor:TabLogoConfig.color} size={24} />
	          <Text style={this.props.currentTab=='discover'?styles.activeTabText:styles.tabText} >发现</Text>
        	</View>	
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Me')}} underlayColor="#00000000" >
        	<View style={styles.tab} >
        		<Icon from="simpleline" name='user' color={this.props.currentTab=='me'?TabLogoConfig.activeColor:TabLogoConfig.color} size={TabLogoConfig.size} />
	          <Text style={this.props.currentTab=='me'?styles.activeTabText:styles.tabText} >我</Text>
        	</View>	
        </TouchableHighlight>
      </ToolBar>
		);
	}
}

let activeColor = '#4fbb0e'
let defaultColor = '#777777'

const TabLogoConfig = {
	color: defaultColor,
	activeColor: activeColor,
	size: 20,
}
const styles = StyleSheet.create({
	tab: {
		justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
	},
	activeTabText: {
		color: activeColor,
		fontSize: 12,
		marginTop: 5,
	},
	tabText: {
		color: defaultColor,
		fontSize: 12,
		marginTop: 5,
	}
});
export { CommonToolBar }