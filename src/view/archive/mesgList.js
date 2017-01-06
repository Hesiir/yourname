/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  SegmentedControlIOS,
  PixelRatio,
  NavigatorIOS,
  StatusBar
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconButton from "../../component/IconButton";
import MessageList from "../../component/MessageList";
import ChatRoom from "./chatRoom";
import META from "../../config/meta.json";
import Err from "../../helper/error";

const PR = PixelRatio.get();
class MesgList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      selectedArchive: META.TOPICS.archive._config.moduleList[0],
      dataSource: this.dataSource.cloneWithRows(this._getDataSource())
    };
  }

  static PropTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _getDataSource = () => {
    return [{
      thumb: "https://gd2.alicdn.com/imgextra/i4/838372779/TB244Hqa7WM.eBjSZFhXXbdWpXa_!!838372779.jpg_400x400.jpg",
      sender: "Some sender",
      message: "This is a sliding tab bar I did for a recent client很久前在某动漫群里跟一群人水过这个事，最后引出了上述这份资料",
      datatime: "16年12月"
    },{
      thumb: "https://gd2.alicdn.com/imgextra/i4/838372779/TB244Hqa7WM.eBjSZFhXXbdWpXa_!!838372779.jpg_400x400.jpg",
      sender: "Some sender",
      message: "This is a sliding tab bar I did for a recent client很久前在某动漫群里跟一群人水过这个事，最后引出了上述这份资料",
      datatime: "16年12月"
    },{
      thumb: "https://gd2.alicdn.com/imgextra/i4/838372779/TB244Hqa7WM.eBjSZFhXXbdWpXa_!!838372779.jpg_400x400.jpg",
      sender: "Some sender",
      message: "This is a sliding tab bar I did for a recent client很久前在某动漫群里跟一群人水过这个事，最后引出了上述这份资料",
      datatime: "16年12月"
    },{
      thumb: "https://gd2.alicdn.com/imgextra/i4/838372779/TB244Hqa7WM.eBjSZFhXXbdWpXa_!!838372779.jpg_400x400.jpg",
      sender: "Some sender",
      message: "This is a sliding tab bar I did for a recent client很久前在某动漫群里跟一群人水过这个事，最后引出了上述这份资料",
      datatime: "16年12月"
    },{
      thumb: "https://gd2.alicdn.com/imgextra/i4/838372779/TB244Hqa7WM.eBjSZFhXXbdWpXa_!!838372779.jpg_400x400.jpg",
      sender: "Some sender",
      message: "This is a sliding tab bar I did for a recent client很久前在某动漫群里跟一群人水过这个事，最后引出了上述这份资料",
      datatime: "16年12月"
    }]
  }
  _getArchiveModuleList = () => META.TOPICS.archive._config.moduleList;
  _getTheme = () => META.THEME;
  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted) => {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 / PR : 1 / PR,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'chat with ',
      component: ChatRoom
    });
  }

  render() {
    return (<ListView dataSource={this.state.dataSource} 
      renderSeparator={this._renderSeparator}
      renderRow={(data, sectionID, rowID, highlightRow) => (
        <MessageList onPress={() => {
          this._onForward()
          // highlightRow(sectionID, rowID);
        }}
          thumb={data.thumb}
          sender={data.sender}
          message={data.message}
          datatime={data.datatime}
        />
      )}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    height: 30,
  },
  controlContainer: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  segmented: {
    flex: 1
  },
  buttonCreate: {
    marginLeft: 10,
    marginRight: 20,
    justifyContent: "center"
  },
  buttonMore: {
    marginLeft: 20,
    marginRight: 10,
    justifyContent: "center"
  }
});

export default Relay.createContainer(MesgList, {
  fragments: {
    // villagePlan: () => Relay.QL`
    //   fragment on villagePlan {
    //     villageName
    //   }
    // `,
  }
})
