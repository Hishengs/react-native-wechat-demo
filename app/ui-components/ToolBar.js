import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class ToolBar extends Component {
	render () {
		let defaultContainerStyle = {
			flexDirection: 'row',
			justifyContent: 'space-around',
	    alignItems: 'center',
	    paddingTop: 4,
	    paddingBottom: 4,
	    borderTopColor: '#aaa',
	    borderTopWidth: 1,
	    position: 'absolute',
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: 'white',
		}
		const styles = StyleSheet.create({
			container: Object.assign(defaultContainerStyle,this.props.style||{})
		});
		return (
			<View style={styles.container} >
				{ this.props.children }
			</View>
		);
	}
}

export {
	ToolBar
}