// import React from "react";
// import { useForm } from "react-hook-form";
// import "./rhf.scss";
// import { form } from "./InputInterface";

// function ReactHookForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   console.log(register);

//   const onSubmit = (data: Object) => {
//     console.log(data);
//   };

//   return (
//     <div className="rhf">
//       <form
//         // onSubmit={handleSubmit((data) => console.log(data))}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         {/* <input {...register("firstName", { required: true })} placeholder="First Name"/>
//         {errors.firstName && <p>First name is required.</p>}
//         <input {...register("lastName", { required: true })} placeholder="Last Name"/>
//         {errors.lastName && <p>Last name is required.</p>}
//         <input {...register("age", { pattern: /\d+/, required:true })} placeholder="Age is required"/>
//         {errors.age && <p>Please enter number for age.</p>}
//         <input type="submit" /> */}

//         {form.map((item) => {
//           return (
//             <>
//               <input
//                 {...register(`${item.name}`, {
//                   required: item.required as boolean,
//                   pattern: item.pattern as RegExp,
//                 })}
//                 placeholder={item.placeholder as string}
//               />
//               {errors[item.name as string] && (
//                 <p>{item.label as string} is required.</p>
//               )}
//             </>
//           );
//         })}
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default ReactHookForm;

import React from "react";
import { useForm, FieldValues, FieldError } from "react-hook-form";
import hidepassword from "../../assets/images/hidepassword.png";
import "./rhf.scss";

interface Option {
  id: number;
  value: string;
  label: string;
  name?: string;
}

interface FormField {
  label: string;
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  minLength?: number | string;
  maxLength?: number | string;
  required: boolean;
  isAlphaNumeric?: boolean;
  pattern?: RegExp;
  options?: Option[];
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
    pattern: /^[A-Za-z]+$/i,
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
    minLength: 3,
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
    minLength: "2024-01-01",
    maxLength: "2024-07-01",
    required: true,
    // isAlphaNumeric: false,
  },
];

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="rhf">
      <form onSubmit={handleSubmit(onSubmit)}>
        {form.map((item, index) => (
          <div key={index}>
            {item.type === "text" ||
            item.type === "email" ||
            item.type === "number" ||
            item.type === "password" ||
            item.type === "textarea" ||
            item.type === "date" ? (
              <input
                {...register(item.name, {
                  required: item.required && `${item.label} is required`,
                  minLength: item.minLength as number && {
                    value: item.minLength as number,
                    message: `${item.label} must be at least ${item.minLength} characters`,
                  },
                  maxLength: item.maxLength as number && {
                    value: item.maxLength as number,
                    message: `${item.label} must be at most ${item.maxLength} characters`,
                  },
                  pattern: item.pattern && {
                    value: item.pattern,
                    message: `${item.label} must contain only letters`,
                  },
                })}
                type={item.type}
                placeholder={item.placeholder}
              />
            ) : item.type === "radio" ? (
              item.options?.map((option) => (
                <label key={option.id}>
                  <input
                    {...register(item.name, {
                      required: item.required && `${item.label} is required`,
                    })}
                    type="radio"
                    value={option.value}
                  />
                  {option.label}
                </label>
              ))
            ) : item.type === "select" ? (
              <select
                {...register(item.name, {
                  required: item.required && `${item.label} is required`,
                })}
              >
                <option value="">Select {item.label}</option>
                {item.options?.map((option) => (
                  <option key={option.id} value={option.value}>
                    <img src={hidepassword} alt="img" />  {option.label}
                  </option>
                ))}
              </select>
            ) : item.type === "checkbox" ? (
              item.options?.map((option) => (
                <label key={option.id}>
                  <input
                    {...register(item.name, {
                      required: item.required && `${item.label} is required`,
                    })}
                    type="checkbox"
                    value={option.value}
                  />
                  {option.label}
                </label>
              ))
            ) : null}
            {errors[item.name] && (
              <p>{(errors[item.name] as FieldError)?.message}</p>
            )}
          </div>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookForm;
