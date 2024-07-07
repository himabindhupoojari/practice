import React, { useEffect, useState } from "react";
import Table from "./Table";
import { tableData } from "./TableData";
import { RowType, columns } from "./TableInterfaces";

function TableComponent() {
  const [rowData, setRowData] = useState<RowType[]>([]);

  useEffect(() => {
    setRowData(tableData);
  }, []);

  const getChildData = (val: RowType) => {
    return `${val.city || "N/A"},  ${val.zipcode || "N/A"}`;
  };

  const rowClick = (row: RowType) => {
    alert(`Row clicked ${row.id}`);
  };

  const colClick = (row: RowType) => {
    alert(`Column clicked ${row.id}`);
  };

  const onButtonClick = (row: RowType) => {
    alert(`Button clicked ${row.id}`);
  };

  return (
    <div>
      <Table
        rows={rowData}
        columns={columns}
        haschildObject={getChildData}
        rowClick={rowClick}
        columnClick={colClick}
        btnClick={onButtonClick}        
      />
    </div>
  );
}

export default TableComponent;
