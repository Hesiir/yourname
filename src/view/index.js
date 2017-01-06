/**
 * Orlo Wang (github@owcc) <ow.cc@outlook.com>
 * @ IOS app enter
 */

import React, { Component } from 'react';
import Relay from 'react-relay';
import Layout from './layout';
import { LayoutQuery } from '../network/queryRoutes';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`http://127.0.0.1:5000/graphql`, {
    credentials: 'include',
    headers: {
      // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYW5hYW4iLCJleHAiOjE0ODAxNTkxNDIsInVubSI6Im9ybG8iLCJpYXQiOjE0ODAxNTg1NDJ9.O1ztgaP7Ku-tC-4KlXQjcd-aWbiKOiZGmiyWwPxytKQ",
      // 'X-Auth-Token': "71c4f04c-e610-4d19-8977-4fd840b20166",
      'Content-Type': 'application/graphql; charset=utf-16'
    }
  })
);

export default class App extends Component {
  render() {
    return <Relay.Renderer
      environment={Relay.Store}
      Container={Layout}
      queryConfig={new LayoutQuery()}
    />
  }
} 
