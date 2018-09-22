import { takeLatest, all } from "redux-saga/effects";

/* ------------- Sagas ------------- */

import { appSaga } from "../Containers/App/saga";

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest("APP", appSaga)
  ]);
}
