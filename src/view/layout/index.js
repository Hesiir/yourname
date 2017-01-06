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
  TabBarIOS
} from 'react-native';
import CodePush from "react-native-code-push";
import Icon from "react-native-vector-icons/Ionicons";
import ArchivePage from "../archive";
import NewsPage from "../news";
import TransactionPage from "../transaction";
import SocialPage from "../social";
import PersonalPage from "../personal";
import META from "../../config/meta.json";
import Err from "../../helper/error";

class Layout extends Component {
  state = {
    selectedTab: "archive"
  };

  _drawTabBar = () => {
    let _topics = META.TOPICS;
    if (!_topics) Err("topics is messing");
    let archive      = _topics.archive,
        news   = _topics.news,
        transaction    = _topics.transaction,
        social = _topics.social,
        personal   = _topics.personal;
    return <TabBarIOS translucent={true}>
      <Icon.TabBarItem
        title={archive.text}
        iconName={archive.icon}
        selectedIconName={archive.selectedIcon}
        selected={this.state.selectedTab === 'archive'}
        onPress={() => {
          this.setState({
            selectedTab: 'archive'
          });
        }}
      ><ArchivePage/></Icon.TabBarItem>
      <Icon.TabBarItem
        title={news.text}
        iconName={news.icon}
        selectedIconName={news.selectedIcon}
        selected={this.state.selectedTab === 'news'}
        onPress={() => {
          this.setState({
            selectedTab: 'news'
          });
        }}
      ><NewsPage/></Icon.TabBarItem>
      <Icon.TabBarItem
        title={transaction.text}
        iconName={transaction.icon}
        selectedIconName={transaction.selectedIcon}
        selected={this.state.selectedTab === 'transaction'}
        onPress={() => {
          this.setState({
            selectedTab: 'transaction'
          });
        }}
      ><TransactionPage/></Icon.TabBarItem>
      <Icon.TabBarItem
        title={social.text}
        iconName={social.icon}
        selectedIconName={social.selectedIcon}
        selected={this.state.selectedTab === 'social'}
        onPress={() => {
          this.setState({
            selectedTab: 'social'
          });
        }}
      ><SocialPage/></Icon.TabBarItem>
      <Icon.TabBarItem
        title={personal.text}
        iconName={personal.icon}
        selectedIconName={personal.selectedIcon}
        selected={this.state.selectedTab === 'personal'}
        onPress={() => {
          this.setState({
            selectedTab: 'personal'
          });
        }}
      ><PersonalPage/></Icon.TabBarItem>
    </TabBarIOS>
  }

  render() {
    return this._drawTabBar();
  }
}

export default Relay.createContainer(Layout, {
  fragments: {
    villagePlan: () => Relay.QL`
      fragment on villagePlan {
        villageName
      }
    `,
  }
})
