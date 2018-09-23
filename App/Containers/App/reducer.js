import { fromJS } from "immutable";

import { ADD_TODO } from "./constants";

// The initial state of the App
const initialState = fromJS({
  index: 2
});

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.tron.log("YES");
      return state;
    default:
      return state;
  }
}
