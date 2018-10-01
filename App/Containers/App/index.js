import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import createStore from "../../Redux/index";
import DebugConfig from "../../Config/DebugConfig";
import { Theme } from "../../Styles/theme";
import { AppNavigator } from "../../Navigation/AppNavigator";

const store = createStore();

class App extends Component {
  render() {
    console.tron.log(store.getState());
    return (
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
