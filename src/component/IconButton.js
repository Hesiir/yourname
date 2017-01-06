/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class IconButton extends Component {
  state = {
    onPressIcon: this.props.name
  };

  static PropTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    onPressIcon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
  }

  render() {
    return (<TouchableHighlight style={this.props.style} 
      onPress={this.props.onPress} 
      activeOpacity={1}
      underlayColor={"transparent"}
      onHideUnderlay={() => {
        this.setState({
          onPressIcon: this.props.name
        })
      }}
      onShowUnderlay={() => {
        this.setState({
          onPressIcon: this.props.onPressIcon
        })
      }}>
      <Icon name={this.state.onPressIcon} 
        size={this.props.size}
        color={this.props.color}/>
    </TouchableHighlight>);
  }
};
