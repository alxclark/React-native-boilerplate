import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import StyledText from "../styled--Text";

describe("<StyledText />", () => {
  it("should match the snapshot", () => {
    const renderedComponent = renderer.create(<StyledText />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
