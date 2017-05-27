import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import React, { Component } from 'react';

class Icon extends Component {
	render () {
		let from = this.props.from?this.props.from.toLowerCase():'fontawesome';
		let Icon_ = null;
		switch(from){
			case 'entypo':
			case 'entypoicon':
				Icon_ = <EntypoIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'foundation':
				Icon_ = <FoundationIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'evilicons':
			case 'evil':
				Icon_ = <EvilIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'ionicons':
			case 'ion':
				Icon_ = <IonIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'materialicons':
			case 'material':
				Icon_ = <MaterialIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'materialcommunityicons':
			case 'materialcommunity':
				Icon_ = <MaterialCommunityIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'octicons':
			case 'oct':
				Icon_ = <OctIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'zocialicons':
			case 'zocial':
				Icon_ = <ZocialIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'simplelineicons':
			case 'simpleline':
				Icon_ = <SimpleLineIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />
				break
			case 'fontawesome':
			default:
				Icon_ = <FontAwesomeIcon style={this.props.style} name={this.props.name} size={this.props.size||12} color={this.props.color||'#000'} />;
				break
		}
		return Icon_;
	}
}

export {
	Icon,
}