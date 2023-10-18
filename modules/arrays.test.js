const { myLength, myPush, myPop, myShift, myUnshift } = require("./arrays");

describe("Given myLength", () => {
  describe("When the argument is a empty array", () => {
    test("then result should be 0", () => {
      const testData = [];
      const expected = 0;
      const result = myLength(testData);
      expect(result).toBe(expected);
    });
  });

  describe("When the argument is [3, 9, 20]", () => {
    test("then result should be 3", () => {
      const testData = [3, 9, 20];
      const expected = 3;
      const result = myLength(testData);
      expect(result).toBe(expected);
    });
  });

  describe("When the argument is [1, null, undefined]", () => {
    test("then result should be 3", () => {
      const testData = [1, null, undefined];
      const expected = 3;
      const result = myLength(testData);
      expect(result).toBe(expected);
    });
  });
});

describe("Given myPush", () => {
  describe("When the argument is a empty array and value 1", () => {
    test("then result should be [1]", () => {
      const testDataArray = [];
      const testDataValue = 1;
      const expected = [1];
      const result = myPush(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [2, 6, 14] and value 20", () => {
    test("then result should be [2, 6, 14, 20]", () => {
      const testDataArray = [2, 6, 14];
      const testDataValue = 20;
      const expected = [2, 6, 14, 20];
      const result = myPush(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [2, null, undefined] and value 20", () => {
    test("then result should be [2, null, undefined, 20]", () => {
      const testDataArray = [2, null, undefined];
      const testDataValue = 20;
      const expected = [2, null, undefined, 20];
      const result = myPush(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });
});

describe("Given myPop", () => {
  describe("When the argument is a empty array", () => {
    test("then result should be empty array", () => {
      const testData = [];
      const expected = [];
      const result = myPop(testData);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [3, 9, 20]", () => {
    test("then result should be [3, 9]", () => {
      const testData = [3, 9, 20];
      const expected = [3, 9];
      const result = myPop(testData);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [1, null, undefined]", () => {
    test("then result should be [1, null]", () => {
      const testData = [1, null, undefined];
      const expected = [1, null];
      const result = myPop(testData);
      expect(result).toEqual(expected);
    });
  });
});

describe("Given myShift", () => {
  describe("When the argument is a empty array", () => {
    test("then result should be empty array", () => {
      const testData = [];
      const expected = [];
      const result = myShift(testData);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [3, 9, 20]", () => {
    test("then result should be [9, 20]", () => {
      const testData = [3, 9, 20];
      const expected = [9, 20];
      const result = myShift(testData);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [1, null, undefined]", () => {
    test("then result should be [1, null]", () => {
      const testData = [1, null, undefined];
      const expected = [null, undefined];
      const result = myShift(testData);
      expect(result).toEqual(expected);
    });
  });
});

describe("Given myUnshift", () => {
  describe("When the argument is a empty array and value 1", () => {
    test("then result should be [1]", () => {
      const testDataArray = [];
      const testDataValue = 1;
      const expected = [1];
      const result = myUnshift(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [2, 6, 14] and value 20", () => {
    test("then result should be [20, 2, 6, 14]", () => {
      const testDataArray = [2, 6, 14];
      const testDataValue = 20;
      const expected = [20, 2, 6, 14];
      const result = myUnshift(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });

  describe("When the argument is [2, null, undefined] and value 20", () => {
    test("then result should be [20, 2, null, undefined]", () => {
      const testDataArray = [2, null, undefined];
      const testDataValue = 20;
      const expected = [20, 2, null, undefined];
      const result = myUnshift(testDataArray, testDataValue);
      expect(result).toEqual(expected);
    });
  });
});
