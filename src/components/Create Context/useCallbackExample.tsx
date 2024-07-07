import React, { useEffect, useState } from "react";

function UseCallBack() {
  const [dataArray, setDataArray] = useState([
    {
      id: 163283,
      asset: "HDFC",
    },
    {
      id: 163283,
      asset: "Axis Nifty Smallcap 50 Index Fund-Reg(G)",
    },

    {
      id: 163284,
      asset: "HDFC Asset Management Company Ltd.",
    },
    {
      id: 163283,
      asset: " Nifty",
    },
    {
      id: 163284,
      asset: "HDFC Company Ltd.",
    },
    {
      id: 163285,
      asset: "Axis",
    },
  ]);

  interface Newarr {
    [key: string]: any; // Allow any string index
    id: number;
    asset: string;
  }

  // let Output: Newarr[] = [];

  const groupBy = (array: Newarr[], key: string) => {
    return array.reduce((acc: { [key: string]: Newarr[] }, obj: Newarr) => {
      const idval = obj[key];
      console.log(idval);
      
      if (!acc[idval]) {
        acc[idval] = [];
      }
      acc[idval].push(obj);
      return acc;
    }, {});
  };

  const output = groupBy(dataArray, "id");
  console.log(output);
  // console.log(Object.keys(output).length);

  return <div>{/* Your JSX */}</div>;
}

export default UseCallBack;
