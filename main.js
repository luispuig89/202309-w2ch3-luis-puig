import { ArrayFunctions } from "./modules/arrays.js";

const array1 = [];
const array2 = [2, 5, 8, 6];
const a = ArrayFunctions.myPush(array1, 4);
console.log(a);
console.log(ArrayFunctions.myShift(array2));
ArrayFunctions.myLength(array1);
ArrayFunctions.myPop(array2);
