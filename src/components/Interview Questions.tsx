import { log } from "console";
import React from "react";

function InterviewQuestions() {
  // Count the frequency of each element in an array
  console.log("Count the frequency of each element in an array");

  let EachElementCountObj: { [key: number]: number } = {};

  function frequency() {
    const arr = [1, 2, 3, 1, 2, 1, 3, 6];
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (EachElementCountObj[element]) {
        EachElementCountObj[element]++;
      } else {
        EachElementCountObj[element] = 1;
      }
    }
  }
  frequency();
  console.log(EachElementCountObj);

  // Find the smallest and largest number in an array
  console.log("Find the smallest and largest number in an array");
  function LargestSmallestNum() {
    const numsArr = [6, 8, 2, 9, 7, 3, 1];
    let outputLargset = numsArr[0];
    let outputSmallset = numsArr[0];
    for (const i of numsArr) {
      if (numsArr[i] > outputLargset) {
        outputLargset = numsArr[i];
      } else if (numsArr[i] < outputSmallset) {
        outputSmallset = numsArr[i];
      }
    }
    console.log(outputLargset, "L", outputSmallset, "S");
  }
  LargestSmallestNum();

  // To handle the input while texting as "HjKiMmNn"
  console.log(" To handle the input while texting as HjKiMmNn");
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = document.getElementById("text") as HTMLInputElement;
    let inputval = input.value;
    let newvalue = "";

    for (let i = 0; i < inputval.length; i++) {
      if (i % 2 === 0) {
        newvalue += inputval[i].toUpperCase();
      } else {
        newvalue += inputval[i].toLowerCase();
      }
    }
    input.value = newvalue;
    let paratext = document.getElementById(
      "text_display"
    ) as HTMLParagraphElement;
    paratext.innerHTML = inputval;
  };

  // func to print the combinations of array and palindrome
  console.log("func to print the combinations of array and palindrome");
  const combinations = ["a", "b", "c"];
  let combinedarr: string[] = [];

  const combinationOfArrElements = () => {
    const string = "abcba";

    // string palindrome / not
    const strngrev = string.split("").reverse().join("");

    if (string === strngrev) {
      console.log("palindrome");
    }

    // combination of array
    for (let i = 0; i < combinations.length; i++) {
      for (let j = 0; j < combinations.length; j++) {
        if (combinations[i] !== combinations[j]) {
          combinedarr.push(combinations[i] + combinations[j]);
        }
      }
    }
    console.log(combinedarr, "combinedarr");

    return null;
  };
  combinationOfArrElements();

  // func to print the similar elements of two arrays
  console.log("func to print the similar elements of two arrays");

  function similarElements() {
    const arr1 = [2, 4, 5];
    const arr2 = [3, 4, 5];

    for (const i in arr1) {
      for (const j in arr2) {
        if (arr1[i] === arr2[j]) {
          console.log(arr1[i]);
        }
      }
    }
  }

  similarElements();

  // func to print the palindrome within a string
  console.log("func to print the palindrome within a string");

  function PandromeWithinaString() {
    const string = "defabbacd";
    // const string = "hellosannasmith"
    for (let i = 0; i < string.length; i++) {
      let concatStrng = "";
      for (let j = i; j < string.length; j++) {
        concatStrng += string[j];
        let reverseString = concatStrng.split("").slice().reverse().join("");
        if (concatStrng === reverseString) {
          if (concatStrng.length > 2 && reverseString.length > 2) {
            console.log(concatStrng, "palindrome");
          }
        }
      }
    }
  }

  PandromeWithinaString();

  // Function to print the second largest number in an array
  console.log("Function to print the second largest number in an array");

  function processData(myArray: number[]) {
    let largestNum = myArray[0];
    for (let i = 1; i < myArray.length; i++) {
      if (myArray[i] > largestNum) {
        largestNum = myArray[i];
      }
    }

    let secondLargestNum = () => {
      myArray.map((item) => {
        if (largestNum - item === 1) {
          console.log(item, "second largest number in an array");
          return item;
        }
      });
    };
    secondLargestNum();
  }

  processData([2, 3, 6, 6, 5]);

  // Function to Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal.
  console.log(
    "Function to Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. "
  );

  function PlusMinusFraction(arr: number[]) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positive++;
      } else if (arr[i] < 0) {
        negative++;
      } else if (arr[i] === 0) {
        zero++;
      }
    }
    console.log(
      `The no of + nums and its ratio: ${positive}/${arr.length}`,
      (positive / arr.length).toFixed(6)
    );
    console.log(
      `The no of - nums and its ratio: ${negative}/${arr.length}`,
      (negative / arr.length).toFixed(6)
    );
    console.log(
      `The no of 0s and its ratio: ${zero}/${arr.length}`,
      (zero / arr.length).toFixed(6)
    );
  }

  PlusMinusFraction([-4, 3, -9, 0, 4, 1]);

  // Function to print the min and max of the array elements after adding the array elements
  console.log(
    "Function to print the min and max of the array elements after adding the array elements"
  );

  // function MinAndMax(arr: number[]) {
  //   let sum = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let add = 0;
  //     for (let j = 0; j < arr.length; j++) {
  //       console.log(arr.indexOf(arr[j]), arr.indexOf(arr[i]), 'index');
  //       if (arr.indexOf(arr[j]) !== arr.indexOf(arr[i])) {
  //         add = add + arr[j];
  //       }
  //     }
  //     sum.push(add);
  //   }

  //   console.log(sum);

  //   let max = sum[0];
  //   let min = sum[0];
  //   for (let i = 1; i < sum.length; i++) {
  //     if (sum[i] > max) {
  //       max = sum[i];
  //     } else if (sum[i] < min) {
  //       min = sum[i];
  //     }
  //   }
  //   console.log(min, max);
  // }

  // MinAndMax([5, 5, 5, 5, 5]);

  function MinAndMax(arr: number[]) {
    // console.log(arr);

    // Calculate the total sum of all elements in the array
    let totalSum = arr.reduce((acc, num) => acc + num, 0);
    // console.log(totalSum); // 15

    // Calculate the sum array where each element is the total sum minus the current element
    let sum = arr.map((num) => totalSum - num);

    // console.log(sum); // This will output [20, 20, 20, 20, 20] for the input [5, 5, 5, 5, 5]

    // Initialize min and max with the first element of the sum array
    let max = sum[0];
    let min = sum[0];

    // Loop through the sum array to find the actual min and max values
    for (let i = 1; i < sum.length; i++) {
      if (sum[i] > max) {
        max = sum[i];
      }
      if (sum[i] < min) {
        min = sum[i];
      }
    }
    console.log(min, max, "outpou of MinAndMAx"); // Output the min and max values
  }

  MinAndMax([1, 2, 3, 4, 5]);

  // Function to convert 12 hours to 24 hours format
  console.log("Function to convert 12 hours to 24 hours format");

  function timeConversion(time: string) {
    // Extract the period (AM/PM)
    const period = time.slice(-2);
    // console.log(period, 'period', time.slice(-2));

    // Extract the time components
    const [hours, minutes, seconds] = time.slice(0, -2).split(":");

    // console.log(hours, minutes, seconds, 'dxfcg', time.slice(0, -2).split(":"), 'xxdcfgbh', time.split(":"));

    let militaryHours;

    if (period === "AM") {
      // If the time is 12 AM, set hours to 00
      militaryHours = hours === "12" ? "00" : hours;
    } else {
      // If the time is 12 PM, keep it as 12, otherwise add 12 to the hours
      militaryHours = hours === "12" ? hours : String(parseInt(hours, 10) + 12);
    }

    // console.log(militaryHours, 'mh');

    // Return the military time in the format HH:MM:SS
    console.log(
      `${militaryHours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds}`
    );
  }

  timeConversion("07:5:45AM");

  // Function to median of the array
  console.log("Function to median of the array");

  function median(arr: number[]) {
    const sorted = arr.sort((a, b) => a - b);
    console.log(sorted, "median"); // [2, 3, 5, 7, 10];

    const length = sorted.length;
    let index = Math.floor(length / 2);

    if (length % 2 === 0) {
      console.log((sorted[index - 1] + sorted[index]) / 2); // to print median for even arr
    } else {
      console.log(sorted[index]); // 5 to print median for odd arr
    }
  }

  median([7, 2, 10, 5, 3]);

  // Function to print lonelyinteger
  console.log("Function to print lonelyinteger");

  function lonelyinteger(a: number[]) {
    for (let i = 0; i < a.length; i++) {
      let count = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
          count++;
        }
      }
      if (count === 1) {
        console.log(a[i]);
      }
    }

    // const countMap = new Map();
    // console.log(countMap);

    // // Count the occurrences of each element
    // for (const num of a) {
    //   countMap.set(num, (countMap.get(num) || 0) + 1);
    // }
    // console.log(countMap);
    // // Find and return the element that occurs exactly once
    // for (const [key, value] of countMap) {
    //   if (value === 1) {
    //     return key;
    //   }
    // }
  }

  lonelyinteger([1, 2, 3, 3, 3, 2, 1, 9]);

  // function to print absolute difference of a matrix the out is 1+5+9 - 3+5+7
  console.log("function to print absolute difference of a matrix");

  function diagonalMatrix() {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    // console.log(input[0][0], input[1][1], input[2][2], "input");
    // console.log(input[0][2], input[1][1], input[2][0], "input");

    let rtol = 0;
    let ltor = 0;
    let diagonaldifference = 0;

    for (let i = 0; i < input.length; i++) {
      rtol += input[i][i];
      ltor += input[i][input.length - 1 - i];
      // console.log(input[i][i], "r - l");
      // console.log(input[i][(input.length-1)-i], "l - t");
    }
    console.log(rtol, ltor, "sum of two diagonsls");
    // if (rtol > ltor || rtol === ltor) {
    //   diagonaldifference = rtol - ltor;
    // } else {
    //   diagonaldifference = ltor - rtol;
    // }

    // console.log(Math.abs(10 - 5)); // Output: 5
    // console.log(Math.abs(5 - 10)); // Output: 5
    // console.log(Math.abs(-10 - 5)); // Output: 15
    // console.log(Math.abs(5 - -10)); // Output: 15

    // console.log(10 - 5); // Output: 5
    // console.log(5 - 10); // Output: -5
    // console.log(-10 - 5); // Output: -15
    // console.log(5 - -10); // Output: 15

    diagonaldifference = Math.abs(rtol - ltor);

    //The absolute difference between the two sums is calculated using Math.abs.
    // This approach is more concise and eliminates the unnecessary conditional statements.

    console.log(diagonaldifference, "diagonaldifference");
  }

  diagonalMatrix();

  // Function to flip the matrix
  console.log("Function to flip the matrix");

  // Even mtrix

  function flippingMatrix(matrix: number[][]) {
    const n = matrix.length / 2;
    let maxSum = 0;
    console.log(matrix);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const topLeft = matrix[i][j];
        const topRight = matrix[i][2 * n - 1 - j];
        const bottomLeft = matrix[2 * n - 1 - i][j];
        const bottomRight = matrix[2 * n - 1 - i][2 * n - 1 - j];
        maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        console.log(
          topLeft,
          "topLeft",
          topRight,
          "topRight",
          bottomLeft,
          "bottomLeft",
          bottomRight,
          "bottomRight"
        );
      }
    }
    return maxSum;
  }

  // Odd mtrix

  // function flippingMatrix(matrix: number[][]) {
  //   const n = matrix.length;
  //   const half_n = Math.floor(n / 2);
  //   let maxSum = 0;
  //   console.log(matrix);

  //   for (let i = 0; i <= half_n; i++) {
  //     for (let j = 0; j <= half_n; j++) {
  //       // Find the four possible values for each position in the top-left quadrant
  //       const topLeft = matrix[i][j];
  //       const topRight = matrix[i][n - 1 - j];
  //       const bottomLeft = matrix[n - 1 - i][j];
  //       const bottomRight = matrix[n - 1 - i][n - 1 - j];

  //       if (i === half_n && j === half_n && n % 2 === 1) {
  //         // If it's the center of an odd-dimensioned matrix, only consider that element once
  //         maxSum += topLeft;
  //       } else if (i === half_n && n % 2 === 1) {
  //         // If it's the center row of an odd-dimensioned matrix, consider three elements
  //         maxSum += Math.max(topLeft, topRight, bottomRight);
  //       } else if (j === half_n && n % 2 === 1) {
  //         // If it's the center column of an odd-dimensioned matrix, consider three elements
  //         maxSum += Math.max(topLeft, bottomLeft, bottomRight);
  //       } else {
  //         // Consider all four elements as in the even-dimensioned case
  //         maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
  //         // console.log(topLeft, "topLeft");
  //         // console.log(topRight, "topRight");
  //         // console.log(bottomLeft, "bottomLeft");
  //         // console.log(bottomRight, "bottomRight");
  //       }
  //     }
  //   }

  //   return maxSum;
  // }

  // Sample input
  const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ];

  // Call the function and print the result
  console.log(flippingMatrix(matrix)); // Output: 414

  // counting sort based on index numbers in the given array

  console.log("counting sort based on index numbers in the given array");

  function CoutingSort() {
    const inputArr = [9, 9, 5, 7, 0, 4, 5, 8, 9, 10];
    
    console.log(inputArr.length);
    
    let numarr:number[] = new Array(11).fill(0);    

    for (const num of inputArr) {
      // console.log(num); 
      numarr[num]++;
    }
    console.log(numarr, 'numarr');
    
  }
  CoutingSort();


// Generic js program to print the passed nested object keys and values.
  function genericObjectProgram(myObject: {[key: string]:  string | {[key:string]: string}}) {
    for (let key in myObject) {
     if (myObject.hasOwnProperty(key) && typeof myObject[key] !== 'object') {
       console.log(key,  ":" , myObject[key]);
     }
     
     if(typeof myObject[key] === 'object'){
         for (let key2 in myObject[key]) {
             console.log(key,".",key2, ":", myObject[key][key2]);
         }
     }
   }
}

genericObjectProgram({
    name: 'Bindu',
    place: {
        city: 'hyderabd',
        address: 'chandhanagar',
        pincode: '500050',
    },
    details:{
        phnNo: '9100775633',
    },
    gender: 'female',
})

  return (
    <div>
      <input id="text" name="text" type="text" onChange={handleText} />
      <p id="text_display">output: </p>
    </div>
  );
}

export default InterviewQuestions;
