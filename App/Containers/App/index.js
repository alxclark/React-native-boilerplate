import React, { Component } from "react";
import { Provider } from "react-redux";

import createStore from "../../Redux/index";
import DebugConfig from "../../Config/DebugConfig";

import HomeScreen from "../HomeScreen/index";

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
