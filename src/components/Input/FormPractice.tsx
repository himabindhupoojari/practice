import React, { useState } from "react";
import Input from "./Input";
import { onBlurvalidation } from "./Validation";
import { FormField, form, subArr } from "./InputInterface";

function FormPractice() {

  const [arrValues, setArrValues] = useState<string[]>([]);

  const apidata = {
    name: "Bindu",
    email: "bindu@gmail.com",
    couse:arrValues,
  };

  // State to hold onBlurvalidation messages for each field
  const [validationMsgs, setValidationMsgs] = useState<{
    [key: string]: string;
  }>({});

  // State to hold post obj
  const [data, Setdata] = useState<{
    [key: string]: string | number | string[];
  }>(apidata);
  
  console.log(data);
  

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    item: FormField,
    value: string | number | boolean
  ) => {
    const validationMessage = onBlurvalidation(item, value);
    if (!validationMessage) {
      setValidationMsgs((prev) => ({
        ...prev,
        [item.name as string]: "",
      }));
    }
    if (item.type === "checkbox" && event.target instanceof HTMLInputElement) {
      console.log(event.target.checked);

      if (event.target.checked) {
        setArrValues((prev) => [...prev, event.target.value]);
      }
      else{
        setArrValues((prev) => prev.filter((val) => val !== event.target.value));
      }
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
        [item.name as string]: validationMessage,
      }));
    } else {
      setValidationMsgs((prev) => ({
        ...prev,
        [item.name as string]: "",
      }));
    }
  };

  const handleSubmit = () => {
    let count = 0;
    const hasErrors = Object.values(validationMsgs).some((msg) => msg !== "");
    form.map((item) => {
      if (item.required && !data.hasOwnProperty(item.name as string)) {
        count++;
        setValidationMsgs((prev) => ({
          ...prev,
          [item.name as string]: `${item.label} is required.`,
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
    <div className="form">
      {form.map((item) => (
        <div key={item.id as string}>
          <label>{item.label as string}</label>
          <Input
            type={item.type as string}
            name={item.name as string}
            id={item.id as string}
            // value={data.hasOwnProperty(item.name) ? data[item.name] : ""}
            value={data[item.name as string] || ""}
            placeholder={item.placeholder as string}
            minLength={item.minLength as number}
            maxLength={item.maxLength as number}
            required={item.required as boolean}
            handleChange={(
              event: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >
            ) => handleChange(event, item, event.target.value)}
            handleBlur={(
              event: React.FocusEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >
            ) => handleBlur(item, event.target.value)}
            options={item.options as subArr[]}
          />
          <p style={{ color: "red" }}>{validationMsgs[item.name as string]}</p>
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {/* <input type="submit"/> */}
    </div>
  );
}

export default FormPractice;
