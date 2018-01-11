var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: '" + testName + "'");
    } else {
      console.log(testName);
    }
  }
};
