import React, { useState } from "react";
import { InputType, subArr } from "./InputInterface";
import showpassword from "../../assets/images/showpassword.png";
import hidepassword from "../../assets/images/hidepassword.png";
import 'select2/dist/css/select2.css';
import 'select2';

function Input(props: InputType) {
  const [hidePassword, setHidePassword] = useState(true);
  const showpasswordText = () => {
    setHidePassword((val) => !val);
  };
  return (
    <div>
      {(props.type === "text" ||
        props.type === "password" ||
        props.type === "number" ||
        props.type === "email" || props.type === "date") && (
        <>
          <input
            type={
              props.type === "password"
                ? !hidePassword
                  ? "text"
                  : "password"
                : props.type
            }
            name={props.name}
            id={props.id}
            // value={props.type === "number" ? Number(props.value) : props.value}
            value={props.type === "number" && !props.value ? "" : props.value}
            placeholder={props.placeholder}
            maxLength={props.type !== "number" ? props.maxLength as number : undefined}
            max={props.type === "number" ? props.maxLength as number : props.type === "date" ? props.maxLength as string : undefined}
            minLength={props.type !== "number" ? props.minLength as number : undefined}
            min={props.type === "number" ? props.minLength as number : props.type === "date" ? props.minLength as string : undefined}
            readOnly={props.readOnly}
            required={props.required}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoComplete="off"
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                props.handleBlur(
                  event as unknown as React.FocusEvent<HTMLInputElement>
                );
              }
            }}
          />
          {props.type === "password" && (
            <img
              src={!hidePassword ? showpassword : hidepassword}
              alt="img"
              style={{ marginLeft: "-20px" }}
              onClick={showpasswordText}
            />
          )}
        </>
      )}
      {props.type === "radio" && (
        <div>
          {Array.isArray(props.options)&&props.options?.map((item) => {
            return (
              <>
                <label htmlFor={item.name as string}>{item.label}</label>
                <input
                  type={props.type}
                  value={item.value as string}
                  name={props.id as string}
                  id={item.name as string}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </>
            );
          })}
        </div>
      )}
      {props.type === "select" && (
        <select
          name={props.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        >
          <option value="">{props.placeholder}</option>
          {Array.isArray(props.options)&&props.options?.map((item) => {
            return <option value={item.value as string}><img
            src={showpassword}
            alt="img"            
          />{item.label}</option>;
          })}
        </select>
      )}
      {props.type === "checkbox" &&
        Array.isArray(props.options)&&props.options.map((item) => {
          return (
            <>
              <input type={props.type} id={item.value as string} name={props.name as string} value={item.value as string} onChange={props.handleChange}
          onBlur={props.handleBlur}/>
              <label htmlFor={item.value as string}>{item.label}</label>
            </>
          );
        })
        }
        {props.type === "textarea" &&
        <textarea rows={7} name="comments" placeholder={props.placeholder} onChange={props.handleChange}
        onBlur={props.handleBlur}></textarea>
        }
    </div>
  );
}

// Default Props
Input.defaultProps = {
  minLength: 0,
  maxLength: 5,
  readOnly: false,
  required: false,
  options: [],
};

export default Input;
