/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Relay from 'react-relay';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import META from "../../config/meta.json";
import Err from "../../helper/error";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      selectedArchive: META.TOPICS.archive._config.moduleList[0],
      dataSource: this.dataSource.cloneWithRows(this._getDataSource())
    };
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
  
  render() {
    return (<ListView>
      <Text>This is message page.</Text>  
    </ListView>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Relay.createContainer(ChatRoom, {
  fragments: {
    // villagePlan: () => Relay.QL`
    //   fragment on villagePlan {
    //     villageName
    //   }
    // `,
  }
})
