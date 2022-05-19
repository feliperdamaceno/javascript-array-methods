"use strict";

/* =-=-=-=-=-=-=-=-=-=-=-=-=-= BUILD AREA =-=-=-=-=-=-=-=-=-=-=-=-=-= */

const forEach = (array, callBackFn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callBackFn(element, index, array);
  }
};

const map = (array, callBackFn) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callBackFn(element, index, array));
  }
  return newArray;
};

const filter = (array, callBackFn) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element, index, array)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const reduce = (array, callBackFn, startValue) => {
  let accumulator = startValue;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callBackFn(accumulator, element, index, array);
    }
  }
  return accumulator;
};

const some = (array, callBackFn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element, index, array)) return true;
  }
  return false;
};

const every = (array, callBackFn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element, index, array) === false) return false;
  }
  return true;
};

const flat = (array, depth = 1) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element) && depth > 0) {
      // The spread operator copy the result of the flat() function.
      newArray.push(...flat(element, depth - 1));
    } else newArray.push(element);
  }
  return newArray;
};

const find = (array, callBackFn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element, index, array)) return element;
  }
  return undefined;
};

const includes = (array, item) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === item) return true;
  }
  return false;
};

/* =-=-=-=-=-=-=-=-=-=-=-=-=-= LOG AREA =-=-=-=-=-=-=-=-=-=-=-=-=-= */

const myArray = [1, 2, 3, 4, 2, 2];

const otherArray = [1, 2, 3, [4, 5, [6, 7]]];

console.log(
  "JavaScript (map):",
  map(myArray, (item) => item * 2)
);
console.log(
  "Own Version (map):",
  myArray.map((item) => item * 2),
  "\n"
);

console.log(
  "JavaScript (filter):",
  myArray.filter((item) => item === 2)
);
console.log(
  "Own Version (filter):",
  filter(myArray, (item) => item === 2),
  "\n"
);

console.log(
  "JavaScript (reduce):",
  myArray.reduce((currentTotal, item) => currentTotal + item, 0)
);

console.log(
  "Own Version (reduce):",
  reduce(myArray, (currentTotal, item) => currentTotal + item, 0),
  "\n"
);

console.log(
  "JavaScript (some):",
  myArray.some((item) => item === 4)
);

console.log(
  "Own Version (some):",
  some(myArray, (item) => item === 4),
  "\n"
);

console.log(
  "JavaScript (every):",
  myArray.every((item) => item === 3)
);

console.log(
  "Own Version (every):",
  every(myArray, (item) => item === 3),
  "\n"
);

console.log("JavaScript (flat):", otherArray.flat(Number.POSITIVE_INFINITY));

console.log(
  "Own Version (flat):",
  flat(otherArray, Number.POSITIVE_INFINITY),
  "\n"
);

console.log(
  "JavaScript (find):",
  myArray.find((item) => item === 1)
);

console.log(
  "Own Version (find):",
  find(myArray, (item) => item === 1),
  "\n"
);

console.log("JavaScript (includes):", myArray.includes(2));

console.log("Own Version (includes):", includes(myArray, 2));
