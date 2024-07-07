import React, { useState } from "react";
import Input from "./Input";
import { onBlurvalidation } from "./Validation";

export interface FormField {
  label: string;
  name: string;
  id: string;
  type: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  required: boolean;
  isAlphaNumeric: boolean,
}

function FormPractice() {
  const form: FormField[] = [
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
      label: "Roll No",
      name: "roll_no",
      id: "rollno",
      type: "number",
      placeholder: "Enter Roll No",
      minLength: 5,
      maxLength: 20,
      required: true,
      isAlphaNumeric: false,
    },
  ];

  const apidata = {
    name: "hii",
    email: "h@g.c",
  };

  // State to hold onBlurvalidation messages for each field
  const [validationMsgs, setValidationMsgs] = useState<{
    [key: string]: string;
  }>({});

  // State to hold post obj
  const [data, Setdata] = useState<{
    [key: string]: string | number;
  }>(apidata);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: FormField,
    value: string | number | boolean
  ) => {
    console.log(typeof value, "value");

    const validationMessage = onBlurvalidation(item, value);
    if (!validationMessage) {
      setValidationMsgs((prev) => ({
        ...prev,
        [item.name]: "",
      }));
    }
    Setdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBlur = (item: FormField, value: string | number | boolean) => {
    const validationMessage = onBlurvalidation(item, value);
    if (validationMessage) {
      setValidationMsgs((prev) => ({
        ...prev,
        [item.name]: validationMessage,
      }));
    } else {
      setValidationMsgs((prev) => ({
        ...prev,
        [item.name]: "",
      }));
    }
  };

  const handleSubmit = () => {
    let count = 0;
    const hasErrors = Object.values(validationMsgs).some((msg) => msg !== "");
    form.map((item) => {
      if (item.required && !data.hasOwnProperty(item.name)) {
        count++;
        setValidationMsgs((prev) => ({
          ...prev,
          [item.name]: `${item.label} is required.`,
        }));
      }
    });

    if (count === 0) {
      if (hasErrors) {
        const error = Object.values(validationMsgs).find((msg) => msg !== "");
        alert(error);
      } else {
        console.log("Form submitted with data:", data);
        // Clear form fields or perform other actions upon successful submission
        // window.location.reload();
      }
    } else {
      alert("please fill all the fields");
    }
  };

  return (
    <div>
      {form.map((item) => (
        <div key={item.id}>            
          <Input
            type={item.type}
            name={item.name}
            id={item.id}
            // value={data.hasOwnProperty(item.name) ? data[item.name] : ""}
            value={data[item.name] || ""}
            placeholder={item.placeholder}
            minLength={item.minLength}
            maxLength={item.maxLength}
            required={item.required}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event, item, event.target.value)
            }
            handleBlur={(event: React.FocusEvent<HTMLInputElement>) =>
              handleBlur(item, event.target.value)
            }
          />
          <p style={{ color: "red" }}>{validationMsgs[item.name]}</p>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPractice;
