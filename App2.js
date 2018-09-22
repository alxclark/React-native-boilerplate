import "./App/Config/ReactotronConfig";
import Expo from "expo";
import DebugConfig from "./App/Config/DebugConfig";
import AppEntryPoint from "./App/Containers/App/index";

// const Entrypoint =
//   __DEV__ && DebugConfig.launchStorybook
//     ? require("./storybook").default
//     : require("./App/Containers/App").default;
const Entrypoint = require("./App/Containers/App").default;

Expo.registerRootComponent(Entrypoint);
