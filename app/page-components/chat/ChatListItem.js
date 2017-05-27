import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { Icon } from '../../ui-components'

class ChatListItem extends Component {
	// constructor (props) {
	// 	super(props)
	// 	this.state = {
	// 		silent: false
	// 	}
	// }
	// componentWillMount () {
	// 	console.info('ChatListItem.componentWillMount',this.props)
	// 	if(this.props.silent)
	// 		this.setState({
	// 			silent: this.props.silent
	// 		})
	// }
	render () {
		const styles = StyleSheet.create({
		  container: {
		  	flexDirection: 'row',
		    justifyContent: 'flex-start',
		    alignItems: 'center',
		    flex: 1,
		    borderBottomColor: '#eee',
		    borderBottomWidth: 1,
		    height: 66,
		    paddingLeft: 10,
		    paddingRight: 10,
		    backgroundColor: 'white',
		  },
		  avatar: {
		  	width: 50,
		  	height: 50,
		  	marginRight: 10,
		  	borderRadius: 5,
		  },
		  info: {
		  	flex: 1,
		  	height: 50,
		  	flexDirection: 'column',
		  	position: 'relative',
		  },
		  info_title: {
		  	fontSize: 16,
		  	color: '#000',
		  	marginBottom: 5,
		  	marginTop: 3,
		  },
		  info_description: {
		  	fontSize: 14,
		  	color: '#888',
		  },
		  info_time: {
		  	fontSize: 12,
		  	color: '#888',
		  	position: 'absolute',
		  	top: 8,
		  	right: 10,
		  },
		  silent: {
		  	position: 'absolute',
		  	bottom: 18,
		  	right: 10,
		  },
		});
		return (
			<TouchableHighlight onPress={()=>{}} >
				<View style={styles.container} >
					<Image style={styles.avatar} source={this.props.chatItem.avatar} />
					<View style={styles.info} >
						<Text style={styles.info_title} >{this.props.chatItem.title}</Text>
						<Text style={styles.info_description} >{this.props.chatItem.description}</Text>
					</View>
					<View style={styles.silent}>
					{
						this.props.chatItem.silent?(<Icon name="bell-slash" size={12} color="#888" />):(null)
					}
					</View>
					<Text style={styles.info_time} >{this.props.chatItem.time}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

		

export { ChatListItem }