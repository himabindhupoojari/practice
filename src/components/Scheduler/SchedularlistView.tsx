import React, { useState } from 'react'
import Table from '../Table/Table'
import { ScheduleListColumns, SchedulerListData } from './SchedulerData'
import { RowType } from '../Table/TableInterfaces'

function SchedularlistView() {

    const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectedRowsChange = (newSelectedRows: number[]) => {
    setSelectedRows(newSelectedRows);
    console.log(`Selected row IDs: ${newSelectedRows}`);
  };

  return (
    <div>
      <Table rows={SchedulerListData} columns={ScheduleListColumns}  onSelectedRowsChange={handleSelectedRowsChange}/>

      <div>
        <h3>Selected Row IDs:</h3>
        <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
      </div>

    </div>
  )
}

export default SchedularlistView
