import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import createStore from "../../Redux/index";
import DebugConfig from "../../Config/DebugConfig";

import StyledText from "./styled--Text";
import StyledView from "./styled--View";

const store = createStore();

class App extends Component {
  render() {
    console.tron.log(store.getState());
    return (
      <Provider store={store}>
        <StyledView>
          <StyledText>Open up App.js to start working on your app!</StyledText>
          <StyledText>Test allo</StyledText>
          <StyledText>Changes you make will automatically reload.</StyledText>
          <StyledText>Shake your phone to open the developer menu.</StyledText>
        </StyledView>
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
