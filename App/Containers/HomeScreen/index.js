import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Button } from "react-native";

import { makeSelectCounter } from "../App/selectors";
import { incrementCounter } from "../App/actions";

import StyledText from "./styled--Text";
import StyledView from "./styled--View";

class HomeScreen extends Component {
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
        <StyledText>Press on this button to increment the counter</StyledText>
      </StyledView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(incrementCounter())
});

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(HomeScreen);
