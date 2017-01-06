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
import Swiper from "react-native-swiper";
import META from "../../config/meta.json";
import Err from "../../helper/error";

class NewsPage extends Component {
  _drawTopADSwiper = () => {
    return (<Swiper style={styles.swiperContainer} 
      height={211}
      autoplay={true}>
      <View style={styles.imageView}>
        <Text style={{}}>Hello Swiper</Text>
      </View>
      <View style={styles.imageView}>
        <Text style={{}}>Beautiful</Text>
      </View>
      <View style={styles.imageView}>
        <Text style={{}}>And simple</Text>
      </View>
    </Swiper>)
  }
  render() {
    return (<View>
      {this._drawTopADSwiper()} 
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

export default Relay.createContainer(NewsPage, {
  fragments: {
    // villagePlan: () => Relay.QL`
    //   fragment on villagePlan {
    //     villageName
    //   }
    // `,
  }
})
