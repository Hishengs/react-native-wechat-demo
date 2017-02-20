import React, { Component } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native';

class NavigationBar extends Component {
	render () {
		let defaultTitleStyle = {
			color: '#000',
			fontSize: 18,
			fontWeight: 'bold',
		}
		let defaultContainerStyle = {
			flexDirection: 'row',
			justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: 'white',
	    paddingTop: 30,
	    paddingBottom: 10,
	    borderBottomColor: '#eee',
	    borderBottomWidth: this.props.noBorder===null||this.props.noBorder===true?0:0.3,
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
		}
		const styles = StyleSheet.create({
			container: Object.assign(defaultContainerStyle,this.props.style||{}),
			leftComponent: {
				flex: 2,
				flexDirection: 'row',
				justifyContent: 'flex-start',
		    alignItems: 'center',
		    paddingLeft: 10,
			},
			centerComponent: {
				flex: 8,
				justifyContent: 'center',
		    alignItems: 'center',
			},
			rightComponent: {
				flex: 2,
				flexDirection: 'row',
				justifyContent: 'flex-end',
		    alignItems: 'center',
		    paddingRight: 10,
			},
			title: this.props.titleStyle?Object.assign(defaultTitleStyle,this.props.titleStyle):defaultTitleStyle
		});
		// 左边的组件
		const leftComponent = (
			<View style={styles.leftComponent} >
				{this.props.leftComponent || null}
			</View>
		);
		// 中间的组件
		const defaultCenterComponent = <Text style={styles.title} >{this.props.title}</Text>;
		const centerComponent = (
			<View style={styles.centerComponent} >
				{this.props.centerComponent || defaultCenterComponent}
			</View>
		);
		// 右边的组件
		const rightComponent = (
			<View style={styles.rightComponent} >
				{this.props.rightComponent || null}
			</View>
		);
		const statusBarStyle = this.props.statusBarStyle?this.props.statusBarStyle:{
			barStyle: 'default'
		};
		return (
			<View style={styles.container} >
				<StatusBar barStyle={statusBarStyle.barStyle} />
				{leftComponent}
				{centerComponent}
				{rightComponent}
			</View>
		);
	}
}

export {
	NavigationBar
}