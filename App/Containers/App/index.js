import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import createStore from "../../Redux/index";
import DebugConfig from "../../Config/DebugConfig";

import HomeScreen from "../HomeScreen/index";
import { Theme } from "../../Styles/theme";

const store = createStore();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
