import React from "react";

function ArrayMethods() {
  //1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
  let fruits = ["apple", "banana"];
  fruits.push("orange", "PineApple");
  console.log(fruits, "push");

  //2. pop(): Removes the last element from an array and returns that element.
  let fruitsPOP = ["apple", "banana", "orange"];
  let lastFruit = fruitsPOP.pop();
  console.log(lastFruit, "result of array method array.pop");
  console.log(fruitsPOP, "result of the main array after pop method applies");

  //3. shift(): Removes the first element from an array and returns that element.
  let fruitsShift = ["apple", "banana", "orange"];
  let firstFruit = fruitsShift.shift();
  console.log(firstFruit, "result of array method array.shift");
  console.log(
    fruitsShift,
    "result of the main array after shift method applies"
  );

  //4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
  let fruitsUnshift = ["banana", "orange"];
  fruits.unshift("apple");
  console.log(fruitsUnshift, "unshift");

  //5. concat(): Returns a new array by combining two or more arrays.
  let fruitsConcat = ["apple", "banana"];
  let moreFruits = ["orange", "grape"];
  let allFruits = fruitsConcat.concat(moreFruits);
  console.log(allFruits, "array concat");

  //6. slice(): Returns a shallow copy of a portion of an array into a new array.
  let fruitsSlice = ["apple", "banana", "orange", "grape"];
  let citrus = fruitsSlice.slice(2);
  console.log(citrus, "array slice");

  //7. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
  let fruitsSplice = ["apple", "banana", "orange", "grape"];
  console.log(fruitsSplice, "befor splice");
  fruitsSplice.splice(2, 1, "kiwi", "pineapple"); // in this firt num 2 is index where the elements should add and the second  number is how many elements should be removed from the mentioned index number in first number.
  // in this 2 mention the index where the new elements should add and 1 is quanity that how many elements after that should be remved.
  // ex: in the second index of array "kiwi", "pineapple" are added and ater that 1st element after the "kiwi", "pineapple"; "orange" is removed as its quantity is 1.
  console.log(fruitsSplice, "array splice");

//8. forEach(): Executes a provided function once for each array element.
let fruitsForEach = [1, 2, 3];
fruitsForEach.forEach(function(fruit) {
    console.log(fruit+1, "array forEach");
});

//9. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbersMap = [1, 2, 3];
let doubled = numbersMap.map(function(num) {
    return num * 2;
});
console.log(doubled, "array map");

//10. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let numbersFilter = [1, 2, 3, 4, 5];
let evens = numbersFilter.filter((num) => {
    return num % 2 === 0;
});
console.log(evens, "array filter");

//reduce(): Combines array elements into a single value by repeatedly applying a function, accumulating the result.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum, "reduce");


// Array methods to sort and reverse the array of nums and strings
  
const nums = [6, 8, 2, 1, 7, 3, 0, 7];

// Sort the array in ascending order using a comparison function
// const numsSorted = nums.slice().sort((a,b)=>(a-b)); // gives accending order of array elements
const numsSorted = nums.slice().sort((a,b)=>(b-a)); // // gives decending order of array elements

// Reverse the sorted array to get descending order
const numsDescending = numsSorted.slice().reverse();

console.log(numsSorted, 'numsSorted', numsDescending, 'numsDescending');

const string = ["g", "k", "b", "a", "d"];

// Sort the array in ascending order using a comparison function
const stringSorted = string.slice().sort();

// Reverse the sorted array to get descending order
const stringDescending = stringSorted.slice().reverse();

console.log(stringSorted, 'stringSorted', stringDescending, 'stringDescending');

  return <div>Array Methods</div>;
}

export default ArrayMethods;
