import React from 'react';
import {
  Text,
} from 'react-native';

function H1(props){
	return <Text style={{fontSize:20,fontWeight:'bold'}} >{props.children}</Text>;
}

function H2(props){
	return <Text style={{fontSize:18,fontWeight:'bold'}} >{props.children}</Text>;
}

function H3(props){
	return <Text style={{fontSize:16,fontWeight:'bold'}} >{props.children}</Text>;
}

function H4(props){
	return <Text style={{fontSize:14,fontWeight:'bold'}} >{props.children}</Text>;
}

function H5(props){
	return <Text style={{fontSize:12,fontWeight:'bold'}} >{props.children}</Text>;
}

function H6(props){
	return <Text style={{fontSize:11,fontWeight:'bold'}} >{props.children}</Text>;
}

export {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6
}