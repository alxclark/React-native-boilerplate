import { combineReducers } from "redux-immutable";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import configureStore from "./createStore";
import rootSaga from "../Sagas/";
import { RootNavigator } from "../Navigation/AppNavigator";

/* ------------- Assemble The Reducers ------------- */

const navReducer = createNavigationReducer(RootNavigator);

export const reducers = combineReducers({
  global: require("../Containers/App/reducer").default,
  nav: navReducer
});

export default () => {
  let finalReducers = reducers;

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Containers/App/saga").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
