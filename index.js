import "./App/Config/ReactotronConfig";
import Expo from "expo";
import DebugConfig from "./App/Config/DebugConfig";

const Entrypoint =
  __DEV__ && DebugConfig.launchStorybook
    ? require("./App/Containers/App/index").default
    : require("./App/Containers/App/index").default;

Expo.registerRootComponent(Entrypoint);
