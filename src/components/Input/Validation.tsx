import { FormField } from "./FormPractice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const charsRegex = /^[A-Za-z]+$/; // Charecter expression without space

const charsRegexWithSpace = /^[A-Za-z\s]+$/; // Charecter expression with space


export const onBlurvalidation = (
  item: FormField,
  value: string | number | boolean
) => {
  if (item.required && !value) {
    return `${item.label} is required.`;
  }

  if (item.type === "text" && typeof value === "string") {
    console.log(charsRegexWithSpace.test(value), 'CRWS');
    if (value.length < item.minLength) {
      return `${item.label} has minimum length of ${item.minLength} characters long and maximum of ${item.maxLength}`;
    }    
    if (!item.isAlphaNumeric && !charsRegexWithSpace.test(value)) {         
      return `${item.name} is not a alphanumeric it accepts only charecters`;
    }    
  }

  if (
    item.type === "email" &&
    typeof value === "string" &&
    !emailRegex.test(value)
  ) {
    return "Enter a valid email address.";
  }

  if (item.type === "number") {
    const numberValue = Number(value);
    if (numberValue < item.minLength || numberValue > item.maxLength) {
      return `${item.label} should be between ${item.minLength} and ${item.maxLength}.`;
    }
  }

  return null;
};


// const alphaNumericRegex = /^[a-zA-Z0-9]+$/; // Aplha Numeric without space
// const alphanumericSpaceRegex = /^[a-zA-Z0-9 ]+$/; // Alpha Nmeric with space
