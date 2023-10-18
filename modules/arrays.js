export const myLength = (array) => {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const element of array) {
    count += 1;
  }

  return count;
};

export const myPush = (array, newValue) => {
  const length = myLength(array);
  array[length] = newValue;
  return array;
};

export const myPop = (array) => {
  if (array.length === 0) return [];
  array.length -= 1;
  return array;
};

export const myShift = (array) => {
  if (array.length === 0) return [];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length -= 1;
  return array;
};

export const myUnshift = (array, value) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }

  array[0] = value;
  return array;
};
