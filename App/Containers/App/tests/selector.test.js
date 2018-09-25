import { fromJS } from "immutable";

import { selectGlobal, makeSelectCounter } from "../selectors";

describe("selectGlobal", () => {
  it("should select the global state", () => {
    const globalState = fromJS({
      counter: 100
    });
    const mockedState = fromJS({
      global: globalState
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe("makeSelectCounter", () => {
  const counterSelector = makeSelectCounter();
  it("should select the counter", () => {
    const counter = 100;
    const mockedState = fromJS({
      global: {
        counter
      }
    });
    expect(counterSelector(mockedState)).toEqual(counter);
  });
});
