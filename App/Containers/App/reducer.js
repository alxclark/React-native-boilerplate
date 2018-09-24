import { fromJS } from "immutable";

import { INCREMENT_COUNTER } from "./constants";

const initialState = fromJS({
  counter: 0
});

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update("counter", counter => counter + 1);
    default:
      return state;
  }
}
