
import React from 'react';

export interface subArr {
  [key: string]: number | string | boolean;
}
export interface FormField {
  // label: string;
  // name: string;
  // id: string;
  // type: string;
  // placeholder: string;
  // minLength: number;
  // maxLength: number;
  // required: boolean;
  // isAlphaNumeric: boolean,
//   [key: string]: number | string | subArr[] | boolean;
[key: string]: string | number | Array<string | number> | subArr[] | boolean;
}


export interface InputType {
  type: string;
  name: string;
  id: string;
  value: string | number | string[];
  placeholder: string;
  maxLength?: number | string;
  minLength?: number | string;
  readOnly?: boolean;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  options?: subArr[];
}

export const form: FormField[] = [
  {
    label: "Name",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Enter Name",
    minLength: 3,
    maxLength: 10,
    required: true,
    isAlphaNumeric: false,
  },
  {
    label: "Email",
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Enter Email",
    minLength: 0,
    maxLength: 100,
    required: true,
    isAlphaNumeric: false,
  },
  {
    label: "Enter Amount",
    name: "amount",
    id: "amount",
    type: "number",
    placeholder: "Enter Amount",
    minLength: 100,
    maxLength: 1000,
    required: true,
    isAlphaNumeric: false,
  },
  {
    label: "Enter Rollno",
    name: "rollno",
    id: "rollno",
    type: "text",
    placeholder: "Enter Rollno",
    minLength: 3,
    maxLength: 20,
    required: true,
    isAlphaNumeric: true,
  },
  {
    label: "Password",
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password",
    minLength: 5,
    maxLength: 10,
    required: true,
    isAlphaNumeric: false,
  },
  {
    label: "Gender",
    name: "gender",
    id: "gender",
    type: "radio",
    // placeholder: "Gender",
    options: [
      { id: 0, value: "female", label: "Female", name: "female" },
      { id: 0, value: "male", label: "Male", name: "male" },
    ],
    required: true,
    // isAlphaNumeric: false,
  },
  {
    label: "Country",
    name: "country",
    id: "country",
    type: "select",
    placeholder: "Select Country",
    options: [
      { id: 0, value: "india", label: "India" },
      { id: 1, value: "canada", label: "Canada" },
    ],
    required: true,
    // isAlphaNumeric: false,
  },
  {
    label: "Select Course",
    name: "couse",
    id: "course",
    type: "checkbox",
    // placeholder: "Select Country",
    options: [
      { id: 0, value: "html", label: "HTML" },
      { id: 1, value: "css", label: "CSS" },
      { id: 2, value: "js", label: "JS" },
    ],
    required: true,
    // isAlphaNumeric: false,
  },
  {
    label: "Comments",
    name: "comments",
    id: "comments",
    type: "textarea",
    placeholder: "Write Comments",
    minLength: 0,
    maxLength: 100,
    required: true,
    // isAlphaNumeric: false,
  },
  {
    label: "Date",
    name: "date",
    id: "date",
    type: "date",
    // placeholder: "mm/dd/yyyy",
    minLength:"2024-01-01", maxLength:"2024-07-01",
    required: true,
    // isAlphaNumeric: false,
  },
];


// npm install jquery select2
// npm install @types/jquery


// export interface Select2Option {
//     id: string;
//     text: string;
//     image: string;
//   }
  
// export interface Select2Props {
//     options: Select2Option[];
//     onChange: (selectedValue: string) => void;
//   }
  

// export const Select2 = () => {
    
//   }


// const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
//     item: FormField,
//     value: string | number | boolean
//   ) => {
//     const validationMessage = onBlurvalidation(item, value);
//     if (!validationMessage) {
//       setValidationMsgs((prev) => ({
//         ...prev,
//         [item.name as string]: "",
//       }));
//     }
  
//     setData((prev) => {
//       const newValue = event.target.value;
  
//       if (item.type === "checkbox") {
//         const currentValues = Array.isArray(prev[event.target.name])
//           ? (prev[event.target.name] as Array<string | number>)
//           : [];
        
//         const updatedValues = (event.target as HTMLInputElement).checked
//           ? [...currentValues, newValue]
//           : currentValues.filter((val: string | number) => val !== newValue);
  
//         return {
//           ...prev,
//           [event.target.name]: updatedValues,
//         };
//       } else {
//         return {
//           ...prev,
//           [event.target.name]: newValue,
//         };
//       }
//     });
//   };
  