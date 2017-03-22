import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import MainScene from './src/app';


export default class websocket_client_test extends Component {
  render() {
    return (<MainScene/>);
  }
}

AppRegistry.registerComponent('websocket_client_test', () => websocket_client_test);