/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { 
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  PixelRatio
 } from 'react-native';
 import META from "../config/meta.json"

const PR = PixelRatio.get();
const THEME = META.THEME;
export default class IconButton extends Component {
  static PropTypes = {
    thumb: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    datatime: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render() {
    return (<TouchableHighlight onPress={this.props.onPress} 
      underlayColor={"#cccccc"}>
      <View style={styles.container}>
        <Image style={styles.thumb} source={{uri: this.props.thumb}}/>
        <View style={styles.fullwidth}>
          <View style={styles.info}>
            <Text style={styles.sender}>{this.props.sender}</Text>
            <Text style={styles.datatime}>{this.props.datatime}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.message} numberOfLines={2}>
              {this.props.message}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  thumb: {
    width: 48,
    height: 48,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 0,
    marginBottom: 8,
    borderRadius: 24
  },
  fullwidth: {
    flex: 1
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sender: {
    flex: 1,
    paddingTop: 4,
    fontWeight: "400",
  },
  message: {
    color: THEME.fontColor
  },
  datatime: {
    flex: 1,
    marginTop: 4,
    color: THEME.fontSubColor,
    textAlign: "right"
  }
});
