import "./App/Config/ReactotronConfig";
import Expo from "expo";

const Entrypoint = require("./App/Containers/App/index").default;

Expo.registerRootComponent(Entrypoint);
