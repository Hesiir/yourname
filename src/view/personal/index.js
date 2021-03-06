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
  View
} from 'react-native';
import META from "../../config/meta.json";
import Err from "../../helper/error";

class PersonalPage extends Component {

  render() {
    return (<View>
      <Text>This is setting page.</Text>  
    </View>);
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

export default Relay.createContainer(PersonalPage, {
  fragments: {
    // villagePlan: () => Relay.QL`
    //   fragment on villagePlan {
    //     villageName
    //   }
    // `,
  }
})
