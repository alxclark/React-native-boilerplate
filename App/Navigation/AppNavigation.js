import { createStackNavigator } from "react-navigation";

import HomeScreen from "../Containers/HomeScreen/index";

export const AppNavigation = createStackNavigator({
  Home: HomeScreen
});
