import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  // TODO: React Navigation Middleware

  /* ------------- Saga Middleware ------------- */
  // TODO: Reactotron in saga

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Create Store ------------- */
  // TODO : Reactotron

  const store = createStore(rootReducer, compose(...enhancers));

  // TODO: Redux persist

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
