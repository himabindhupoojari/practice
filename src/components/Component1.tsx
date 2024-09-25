import React, { createContext, useState } from "react";
import Component3 from "./Component3";
// import axios from "axios";
// import UseCallBack from "./Create Context/useCallbackExample";
import { useTheme } from "./Create Context/CreateContextFile";
import Select from "./Select/Select";
import ThemeSwitcher from "./ThemeBuilder/ThemeSwitcher";

type UserContextType = string | undefined;

export const UserContext = createContext<UserContextType>(undefined);

function Component1() {
  const [user, setUser] = useState<string>("Jesse");
  const { toggleTheme, theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    console.log(e.target.name, e.target.value);
  };

  function longestPalindrome(s: string) {
    if (!s || s.length < 1) return "";

    let longest: string = "";

    for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindrome
      let oddPalindrome = expandAroundCenter(s, i, i);
      // Check for even-length palindrome
      let evenPalindrome = expandAroundCenter(s, i, i + 1);

      // Update longest palindrome found
      let currentLongest =
        oddPalindrome.length > evenPalindrome.length
          ? oddPalindrome
          : evenPalindrome;

      if (currentLongest.length > longest.length) {
        longest = currentLongest;
      }
    }

    return longest;
  }

  function expandAroundCenter(s: string, left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  // Test
  // const input = "hellosannasmith";
  // const input = "abcbadefghijihg";
  // const result = longestPalindrome(input);
  // console.log(result); // Output: "sannas"

  // printing of array elements in ascending / decending order using reduce

  const nums = [6, 8, 2, 1, 7, 3, 0, 7];
  // const nums = ["a", "d", "c", "b"];

  // let arr2: number[] = [];
  // let arr2: string[] = [];

  // const func = () => {
  //   let arr = [...nums];

  //   for (let i = 0; i < nums.length; i++) {
  //     const largestNum = arr.reduce((acc, curr) => {
  //       return acc > curr ? acc : curr;
  //     });

  //     // Get the index of the largest number
  //     const largestNumIndex = arr.indexOf(largestNum);

  //     // Remove the largest number from arr and store it in removedNum
  //     const removedNum = arr.splice(largestNumIndex, 1)[0];
  //     console.log(arr, "arr");

  //     // Push the removed number into arr2
  //     arr2.push(removedNum);
  //   }
  //   return null;
  // };

  // printing of array elements in ascending / decending order using for loop

  const func = () => {
    let arr = [...nums];

    for (let i = 0; i < nums.length; i++) {
      let largestNum = arr[0]; // Initialize largestNum with the first element of arr

      // Find the largest number in the arr
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] > largestNum) {
          largestNum = arr[j];
        }
      }
      // console.log(largestNum);

      // Get the index of the largest number
      // const largestNumIndex = arr.indexOf(largestNum);

      // Remove the largest number from arr and store it in removedNum
      // console.log(arr.splice(largestNumIndex, 1)[0]); // it gives the spltced output as [] example : [8]

      // const removedNum = arr.splice(largestNumIndex, 1)[0];
      // console.log(arr, "arr");

      // Push the removed number into arr2
      // arr2.push(removedNum);
    }
    return null;
  };

  func();
  // console.log(arr2, "output");

  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Change Name"
        value={user}
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <UserContext.Provider value={user}>
        {/* <h1>{`Hello ${user}!`}</h1> */}
        <Component3 />
      </UserContext.Provider>
      {/* <button onClick={addData}>Add Data</button> */}
      {/* <UseCallBack/> */}
      <ThemeSwitcher />
    </div>
  );
}

export default Component1;


// import { FormField } from "./FormPractice";

// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export const onBlurvalidation = (
//   item: FormField,
//   value: string | number | boolean
// ) => {
//   switch (true) {
//     case item.required && !value:
//       return `${item.label} is required.`;

//     case item.type === "string" &&
//       typeof value === "string" &&
//       value.length < item.minLength:
//       return `${item.label} should be at least ${item.minLength} characters long.`;

//     case item.type === "string" &&
//       typeof value === "string" &&
//       value.length > item.maxLength:
//       return `${item.label} should be no more than ${item.maxLength} characters long.`;

//     case typeof value === "string" &&
//       item.type === "email" &&
//       !regex.test(value):
//       return "Enter valid email address";

//     case item.type === "number" &&
//       (Number(value) < item.minLength || Number(value) > item.maxLength):
//       return `${item.label} should be entered ${item.minLength} and ${item.maxLength}`;      

//     // Add other validations as needed

//     default:
//       return null;
//   }
// };