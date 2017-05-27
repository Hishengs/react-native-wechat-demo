import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from '../../ui-components'

class CommonMenuItem extends Component {
	render () {
    let defaultContainerStyle = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: 'white',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
    }
    const styles = StyleSheet.create({
      container: this.props.style?Object.assign(defaultContainerStyle,this.props.style):defaultContainerStyle,
      leftComponent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 15,
      },
      rightComponent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      title: {
        fontSize: 16,
        color: '#000',
        marginLeft: this.props.icon?10:0,
      },
    });
    let leftComponent = this.props.leftComponent?
                        (
                          <View style={styles.leftComponent} >
                            {this.props.leftComponent}
                          </View>
                        ):
                        (
                          <View style={styles.leftComponent} >
                            {this.props.icon?<Icon from={this.props.icon.from||'fontawesome'} name={this.props.icon.name||'chrome'} color={this.props.icon.color||'#10aeff'} size={this.props.icon.size||20} />:null}
                            {this.props.title?<Text style={styles.title}>{this.props.title}</Text>:null}
                          </View>
                        );
    let rightComponent =  <View style={styles.rightComponent} >
                            {this.props.rightComponent||null}
                            {this.props.hideArrow?null:<View style={{marginLeft:8}} ><Icon name="angle-right" size={20} color="#888" /></View>} 
                          </View>;
		return (
      <TouchableHighlight onPress={this.props.onPress||(()=>{})} >
  			<View style={styles.container} >
          {leftComponent}
          {rightComponent}
        </View>
      </TouchableHighlight>
		);
	}
}   

export { CommonMenuItem }