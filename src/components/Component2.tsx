import React, { useState } from "react";

const array = [{ id: "", name: "", city: "", address: "", phnno: "" }];

function Component2() {
  const [arr, setArray] = useState<
    {
      id: string;
      name: string;
      city: string;
      address: string;
      phnno: string;
    }[]
  >([array[0]]);

  const add = () => {
    // arr.push(...array);
    setArray((prevval) => [...prevval, ...array]);
  };

  const deleteRow = (indexToRemove: number) => {
    setArray((prevval) =>
      prevval.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setArray((prevArr) => {
      // Copy the previous array and update the specific item with the new value
      return prevArr.map((item, index) => {
        if (index === arr.length - 1) {
          // Update only the last item added
          return { ...item, [name]: value };
        }
        return item;
      });
    });
  };

  const submit = () => {
    // this part will check whether all the objects are null or not if any of the object has the null values it wont push those objects into array
    // const filteredArr = arr.filter((item) => {
    //   // Check if all values in the object are empty strings
    //   const isEmpty = Object.values(item).every((value) => value === "");
    //   // Return true if the object is not empty, false otherwise
    //   return !isEmpty;
    // });

    // this part will check whether all the objects are null or not if any of the object has the null values it wont push those objects into array and in this case it will show atleast one object in array so that the first row wont be removed from the array.

    // Filter out objects with all values as null
    const filteredArr = arr.filter((item) =>
      Object.values(item).some((value) => value !== null && value !== "")
    );

    // Ensure that at least one object remains in the array
    if (filteredArr.length === 0 && arr.length === 1) {
      filteredArr.push(arr[0]);
    }

    console.log(filteredArr);
    setArray(filteredArr);
  };

  return (
    <div className="table">
      {arr.map((item, index) => {
        return (
          <div className="row">
            {Object.keys(item).map((key) => {
              return (
                <div className="column">
                  <input
                    type="text"
                    name={key}
                    onChange={handleChange}
                    placeholder={key}
                    style={{ marginRight: 10 }}
                  />
                </div>
              );
            })}

            <div className="column">
              {index === 0 ? (
                <button onClick={add}>Add</button>
              ) : (
                <button onClick={() => deleteRow(index)}>Delete</button>
              )}
            </div>
          </div>
        );
      })}
      <button onClick={submit} className="submit">Submit</button>
    </div>
  );
}

export default Component2;
