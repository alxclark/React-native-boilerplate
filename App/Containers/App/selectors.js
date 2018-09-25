import { createSelector } from "reselect";

const selectGlobal = state => {
  return state.get("global");
};

const makeSelectCounter = () =>
  createSelector(selectGlobal, globalState => globalState.get("counter"));

export { selectGlobal, makeSelectCounter };
