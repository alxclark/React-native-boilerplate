import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import HomeScreen from "../Containers/HomeScreen/index";

const NavigatorMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, NavigatorMiddleware };
