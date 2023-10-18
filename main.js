import { myLength, myPop, myPush, myShift } from "./modules/arrays.js";

const array1 = [];
const array2 = [2, 5, 8, 6];
const a = myPush(array1, 4);
console.log(a);
console.log(myShift(array2));
myLength(array1);
myPop(array2);
