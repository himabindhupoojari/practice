import wapp from '../../assets/images/whatsapp.png';

export interface TableProps {
  rows: RowType[];
  columns: Coltype[];
  haschildObject?: (val: RowType) => string | number;
  rowClick?: (row: RowType) => void;
  columnClick?: (row: RowType) => void;
  btnClick?: (row: RowType) => void;  
  onSelectedRowsChange?: (selectedRows: number[]) => void;
}

export type CellValue = string | number | object ;

export interface Coltype {  
  [key: string]: string | boolean
}

export interface RowType {  
  [key: string]: CellValue;
}

export const handleHeaderCheckbox =(e: React.ChangeEvent<HTMLInputElement>, props:TableProps)=>{
  if (e.target.checked) {
      const allRowIds = props.rows.map((row) => row.id);
      // setSelectedRows(allRowIds as number[]);
      if (props.onSelectedRowsChange) {
        props.onSelectedRowsChange(allRowIds as number[]);
      }
      return (allRowIds as number[])
    } else {
      // setSelectedRows([]);
      if (props.onSelectedRowsChange) {
        props.onSelectedRowsChange([]);
      }
      return ([]);
    }
}

export const columns: Coltype[] = [
  {
    label: "Id",
    id: "id",
    minWidth: "60px",       
    colHover:false,
  },
  {
    label: "Name",
    id: "name",
    minWidth: "170px",       
    colHover:false,
  },
  {
    label: "User Name",
    id: "username",
    minWidth: "150px",       
    colHover:false,
  },
  {
    label: "Email",
    id: "email",
    minWidth: "180px",        
    colHover:false,
  },
  {
    label: "Address",
    id: "address",
    minWidth: "180px",    
    img:"",    
    colHover:false,
  },
  {
    label: "Message",
    id: "",
    minWidth: "70px",
    onClick: true,
    img:wapp,    
    colHover:true,
  },
  {
    label: "Action",
    id: "",
    minWidth: "100px",
    onClick: true,
    button:true,
    colHover:true,
  },  
];
