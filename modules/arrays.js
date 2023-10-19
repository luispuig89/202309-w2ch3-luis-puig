export class ArrayFunctions {
  static myLength = (array) => {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    for (const element of array) {
      count += 1;
    }

    return count;
  };

  static myPush = (array, newValue) => {
    let length = this.myLength(array);
    array[length] = newValue;
    length = this.myLength(array);
    return length;
  };

  static myPop = (array) => {
    if (array.length === 0) return [];
    array.length -= 1;
    return array;
  };

  static myShift = (array) => {
    if (array.length === 0) return [];
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }

    array.length -= 1;
    return array;
  };

  static myUnshift = (array, value) => {
    for (let i = array.length - 1; i >= 0; i--) {
      array[i + 1] = array[i];
    }

    array[0] = value;
    return array;
  };
}
