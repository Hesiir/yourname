/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Relay from 'react-relay';
import { 
  NavigatorIOS,
  StyleSheet
} from 'react-native';
import ChatRoom from "./chatRoom";
import MesgList from "./mesgList";
import META from "../../config/meta.json";
import Err from "../../helper/error";

class ArchivePage extends Component {
  _handleNavigationRequest = () => {
    this.refs.nav.push({
      title: 'chat with ',
      component: ChatRoom
    });
  }

  render() {
    return (<NavigatorIOS
      ref='nav'
      style={styles.container}
      initialRoute={{
        title: 'Message',
        component: MesgList,
        leftButtonTitle: 'Edit',
        rightButtonTitle: 'Contacts',
        onRightButtonPress: () => this._handleNavigationRequest()
      }}
    />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Relay.createContainer(ArchivePage, {
  fragments: {
    // villagePlan: () => Relay.QL`
    //   fragment on villagePlan {
    //     villageName
    //   }
    // `,
  }
})
