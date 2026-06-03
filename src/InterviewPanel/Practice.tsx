import React, { useState } from 'react'
import './style.css';

type RowType = {
    id: number;
    name: string;
    age: number;
};

type ColumnType = {
    id: keyof RowType;
    label: string;
};

const columnsData: ColumnType[] = [
    {
        id: "name",
        label: "Name"
    },
    {
        id: "age",
        label: "Age"
    }
]

const rowsData: RowType[] = [
    {
        id: 0,
        name: "robin",
        age: 35
    },
    {
        id: 1,
        name: "robin1",
        age: 25
    },
    {
        id: 2,
        name: "robin2",
        age: 15
    },
    {
        id: 3,
        name: "robin3",
        age: 45
    },
    {
        id: 4,
        name: "robin4",
        age: 55
    },
    {
        id: 5,
        name: "robin5",
        age: 65
    },
    {
        id: 6,
        name: "robin6",
        age: 75
    },
    {
        id: 7,
        name: "robin7",
        age: 85
    },
    {
        id: 8,
        name: "robin8",
        age: 95
    },
    {
        id: 9,
        name: "robin9",
        age: 5
    }
]

function Practice() {

    const [data, setData] = useState<RowType[]>(rowsData);

    const rowDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    const addRow = () => {
        setData((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                name: `robin${prev.length + 1}`,
                age: 20
            }
        ]);
    };

    const updateRow = (id: number) => {
        setData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        name: `${item.name} Updated`,
                        age: item.age + 1
                    }
                    : item
            )
        );
    };

    return (
        <div>Practice
            <h2>Table Add/Delete Row</h2>
            <div className='table'>
                <div className='columns'>
                    {columnsData.map((item) => {
                        return (
                            <div className='column'>
                                <p>{item.label}</p>
                            </div>
                        )
                    })}
                </div>
                {data.map((row: RowType) => {
                    return (
                        <div className='rows' key={row.id}>
                            {columnsData.map((column: ColumnType) => {
                                const val = row[column.id];
                                return (
                                    <div className='row' key={column.id}>
                                        <p>{val}</p>
                                    </div>
                                )
                            })}
                            <button onClick={() => rowDelete(row.id)}>Delete Row</button>
                            <button onClick={() => updateRow(row.id)}>
                                Update Row
                            </button>
                        </div>
                    )
                })}
                <button onClick={addRow}>Add Row</button>
            </div>
        </div>
    )
}

export default Practice