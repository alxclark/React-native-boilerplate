import { fromJS } from "immutable";

import AppReducer from "../reducer";
import { incrementCounter } from "../actions";

describe("AppReducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      counter: 0
    });
  });

  it("should returns the initial state", () => {
    const expectedResult = state;
    expect(AppReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should increment the counter", () => {
    const fixture = 1;
    const expectedResult = state.set("counter", fixture);

    expect(AppReducer(state, incrementCounter())).toEqual(expectedResult);
  });
});
