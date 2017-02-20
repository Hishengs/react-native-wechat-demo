import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

class SideBar extends Component {
	constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  componentDidMount () {
  	this.setState({
      show: this.props.show
    })
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.show
    })
  }
	render () {
		let defaultContainerStyle = {
			flexDirection: 'row',
			justifyContent: 'center',
	    alignItems: 'center',
	    borderRightColor: '#888',
	    borderRightWidth: 1,
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    left: 0,
	    width: this.state.show?280:0,
	    backgroundColor: 'white',
		}
		const styles = StyleSheet.create({
			container: Object.assign(defaultContainerStyle,this.props.style||{})
		});
		return (
			<View style={styles.container} >
				<StatusBar hidden={this.state.show} />
				{ this.props.children }
			</View>
		);
	}
}

export {
	SideBar
}