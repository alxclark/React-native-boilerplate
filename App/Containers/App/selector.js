import { createSelector } from "reselect";

const selectGlobal = state => state.get("global");

const makeSelectIndex = () =>
  createSelector(selectGlobal, globalState => globalState.get("index"));

export { makeSelectIndex };
