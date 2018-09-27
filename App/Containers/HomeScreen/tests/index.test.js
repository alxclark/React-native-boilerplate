/**
 * Test the HomePage
 */

import React from "react";

import { mapDispatchToProps } from "../index";

import { incrementCounter } from "../../App/actions";

describe("<HomeScreen />", () => {
  // it('should render the repos list', () => {
  //   const renderedComponent = shallow(
  //     <HomePage loading error={false} repos={[]} />,
  //   );
  //   expect(
  //     renderedComponent.contains(
  //       <ReposList loading error={false} repos={[]} />,
  //     ),
  //   ).toEqual(true);
  // });

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
