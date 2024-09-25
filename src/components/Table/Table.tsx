// import "./table.scss";
// import { CellValue, RowType, handleHeaderCheckbox, TableProps } from "./TableInterfaces";
// import { useState } from "react";


// function Table(props: TableProps) {
//   const [selectedRows, setSelectedRows] = useState<number[]>([]);

//   const handleHeaderCheckboxChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {    
//     setSelectedRows(handleHeaderCheckbox(e, props));
//   };

//   const handleRowCheckboxChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     rowId: number
//   ) => {
//     const isChecked = e.target.checked;
//     const newSelectedRows = isChecked
//       ? [...selectedRows, rowId]
//       : selectedRows.filter((id) => id !== rowId);

//     setSelectedRows(newSelectedRows);
//     if (props.onSelectedRowsChange) {
//       props.onSelectedRowsChange(newSelectedRows);
//     }    
//   };

//   return (
//     <div className="table_Container">
//       <table>
//         <thead>
//           <tr>
//             {props.columns.map((col) => {
//               return (
//                 <>
//                   <th
//                     style={{ width: `${col.minWidth}` }}
//                     key={col.id as string}
//                   >
//                     {col.hasOwnProperty("checkbox") && (
//                       <input
//                         type="checkbox"
//                         onChange={handleHeaderCheckboxChange}
//                         checked={selectedRows.length === props.rows.length}
//                       />
//                     )}
//                     {col.label}
//                   </th>
//                 </>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {props.rows.map((row) => {
//             return (
//               <tr
//                 key={row.id as number}
//                 onClick={
//                   !props.columnClick
//                     ? () => props.rowClick && props.rowClick(row as RowType)
//                     : undefined
//                 }
//                 onDoubleClick={
//                   props.columnClick
//                     ? () => props.rowClick && props.rowClick(row as RowType)
//                     : undefined
//                 }
//               >
//                 {props.columns.map((col) => {
//                   const val: CellValue = row[col.id as string];                                    

//                   return (
//                     <td
//                       style={{
//                         width: `${col.minWidth}`,
//                         cursor: col.colHover ? "pointer" : "unset",
//                       }}
//                       key={col.id as string}
//                       onClick={() => {
//                         if (col.colHover) {
//                           if (col.img) {
//                             if (props.columnClick) {
//                               props.columnClick(row as RowType);
//                             }
//                           }
//                           if (col.button) {
//                             if (props.btnClick) {
//                               props.btnClick(row as RowType);
//                             }
//                           }
//                         }
//                       }}
//                     >
//                       {typeof val !== "object" &&
//                         !val &&
//                         col.hasOwnProperty("checkbox") && (
//                           <input
//                             type="checkbox"
//                             onChange={(e) => handleRowCheckboxChange(e, row.id as number)}
//                             checked={selectedRows.includes(row.id as number)}
//                           />
//                         )}

//                       {typeof val === "object" &&
//                         val &&
//                         props.haschildObject &&
//                         props.haschildObject(val as RowType)}

//                       {typeof val !== "object" &&
//                         !val &&
//                         col.hasOwnProperty("img") && (
//                           <img src={col.img as string} alt="img" />
//                         )}

//                       {typeof val !== "object" &&
//                         !val &&
//                         col.hasOwnProperty("button") && (
//                           <button>Click Me</button>
//                         )}

//                       {typeof val !== "object" &&
//                         val &&
//                         !col.hasOwnProperty("img") &&
//                         val}

//                       {typeof val !== "object" &&
//                         !val &&
//                         !col.hasOwnProperty("img") &&
//                         !col.hasOwnProperty("button") &&
//                         !col.hasOwnProperty("checkbox") &&
//                         "N/A"}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

// Table.defaultProps = {
//   haschildObject: (val: RowType) => "",
//   rowClick: (row: RowType) => {},
//   btnClick: (row: RowType) => {},  
// };


import "./table.scss";
import { CellValue, RowType, handleHeaderCheckbox, TableProps } from "./TableInterfaces";
import { ReactNode, useState } from "react";

function Table(props: TableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleHeaderCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRows(handleHeaderCheckbox(e, props));
  };

  const handleRowCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, rowId: number) => {
    const newSelectedRows = e.target.checked
      ? [...selectedRows, rowId]
      : selectedRows.filter((id) => id !== rowId);

    setSelectedRows(newSelectedRows);
    props.onSelectedRowsChange?.(newSelectedRows);
  };

  // const renderCellContent = (col: any, row: RowType) => {
  //   const val: CellValue = row[col.id as string];

  //   if (col.checkbox) {
  //     return (
  //       <input
  //         type="checkbox"
  //         onChange={(e) => handleRowCheckboxChange(e, row.id as number)}
  //         checked={selectedRows.includes(row.id as number)}
  //       />
  //     );
  //   }

  //   if (col.img && typeof val !== "object" && !val) {
  //     return <img src={col.img as string} alt="img" />;
  //   }

  //   if (col.button && typeof val !== "object" && !val) {
  //     return <button onClick={() => props.btnClick?.(row)}>Click Me</button>;
  //   }

  //   if (props.haschildObject && typeof val === "object" && val) {
  //     return props.haschildObject(val as RowType);
  //   }

  //   return typeof val !== "object" && val ? val : "N/A";
  // };

  const renderCellContent = (col: any, row: RowType) => {
    const val: CellValue = row[col.id as string];
  
    // Handle checkbox column
    if (col.checkbox) {
      return (
        <input
          type="checkbox"
          onChange={(e) => handleRowCheckboxChange(e, row.id as number)}
          checked={selectedRows.includes(row.id as number)}
        />
      );
    }
  
    // Handle image column
    if (col.img) {
      return val ? <img src={val as string} alt="img" /> : "N/A";
    }
  
    // Handle button column
    if (col.button) {
      return <button onClick={() => props.btnClick?.(row)}>Click Me</button>;
    }
  
    // Handle child object rendering
    if (props.haschildObject && val) {
      return props.haschildObject(val as RowType);
    }
  
    // Default case: render the cell value or "N/A"
    return val ?? "N/A";
  };
  

  return (
    <div className="table_Container">
      <table>
        <thead>
          <tr>
            {props.columns.map((col) => (
              <th style={{ width: col.minWidth as string }} key={col.id as string}>
                {col.checkbox && (
                  <input
                    type="checkbox"
                    onChange={handleHeaderCheckboxChange}
                    checked={selectedRows.length === props.rows.length}
                  />
                )}
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr
              key={row.id as number}
              onClick={
                !props.columnClick ? () => props.rowClick?.(row as RowType) : undefined
              }
              onDoubleClick={
                props.columnClick ? () => props.rowClick?.(row as RowType) : undefined
              }
            >
              {props.columns.map((col) => (
                <td
                  style={{ width: col.minWidth as string, cursor: col.colHover ? "pointer" : "unset" }}
                  key={col.id as string}
                  onClick={() => col.colHover && col.img && props.columnClick?.(row as RowType)}
                >
                  {/* {renderCellContent(col, row)} */}
                  {renderCellContent(col, row) as ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

Table.defaultProps = {
  haschildObject: () => "",
  rowClick: () => {},
  btnClick: () => {},
};
