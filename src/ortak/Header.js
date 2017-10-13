import React from 'react';
import { Text , View } from 'react-native';

const Header = (props) =>{

  const { textStyle ,viewStyle } = styles;

    return(
      <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
      </View>
    );
}

const styles ={
  textStyle: {
    fontSize:20
  },
  viewStyle: {
    height: 60,
    backgroundColor: '#00000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset : { width:0 , height:2 },
    shadowOpacity: 0.2
  }
}

export default Header;
