import React from "react";

interface InputType {
  type: string;
  name: string;
  id: string;
  value: string | number;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function Input(props: InputType) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        // value={props.type === "number" ? Number(props.value) : props.value}
        value={props.type === "number" && !props.value ? "" : props.value}
        placeholder={props.placeholder}
        maxLength={props.type !== "number" ? props.maxLength : undefined}
        max={props.type === "number" ? props.maxLength : undefined}
        minLength={props.type !== "number" ? props.minLength : undefined}
        min={props.type === "number" ? props.minLength : undefined}
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
            props.handleBlur(event as unknown as React.FocusEvent<HTMLInputElement>);
          }
        }}        
      />
    </div>
  );
}

// Default Props
Input.defaultProps = {
  minLength: 0,
  maxLength: 5,
  readOnly: false,
  required: false,
};

export default Input;
