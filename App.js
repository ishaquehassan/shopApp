/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StatusBar, View} from 'react-native';
import {StackNavigator} from "react-navigation";
import Splash from "./src/pages/Splash";
import Home from "./src/pages/Home";

const MainNavigator = StackNavigator({
    Splash: {screen: Splash},
    Home:{screen:Home}
});

export default class App extends Component<> {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
            backgroundColor={"rgba(255,0,0,0.5)"} />
        <MainNavigator/>
      </View>
    );
  }
}
