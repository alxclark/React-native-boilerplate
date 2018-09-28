import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Button } from "react-native";

import { makeSelectCounter } from "../App/selectors";
import { incrementCounter } from "../App/actions";

import StyledText from "./styled--Text";
import StyledView from "./styled--View";

export class HomeScreen extends Component {
  render() {
    const { counter, onIncrementCounter } = this.props;
    return (
      <StyledView>
        <StyledText>React native boilerplate</StyledText>
        <Button
          onPress={onIncrementCounter}
          title={counter.toString()}
          color="white"
        />
        <StyledText>{"Press on button to increment the counter"}</StyledText>
      </StyledView>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrementCounter: () => dispatch(incrementCounter())
  };
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(HomeScreen);
