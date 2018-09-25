import { INCREMENT_COUNTER } from "../constants";

import { incrementCounter } from "../actions";

describe("App Actions", () => {
  describe("incrementCounter", () => {
    it("should return the correct type", () => {
      const expectedResult = {
        type: INCREMENT_COUNTER
      };

      expect(incrementCounter()).toEqual(expectedResult);
    });
  });
});
