import "react-native";
import React from "react";

import renderer from "react-test-renderer";

import { HomeScreen, mapDispatchToProps } from "../index";
import { incrementCounter } from "../../App/actions";

describe("<HomeScreen />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <HomeScreen
          counter={0}
          onIncrementCounter={() => console.log("test function")}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    describe("onIncrementCounter", () => {
      it("should be injected", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onIncrementCounter).toBeDefined();
      });

      it("should dispatch incrementCounter when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onIncrementCounter();
        expect(dispatch).toHaveBeenCalledWith(incrementCounter());
      });
    });
  });
});
