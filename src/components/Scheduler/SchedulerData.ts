import { title } from "process";
import { Coltype, RowType } from "../Table/TableInterfaces";

export const SchedulerListData: RowType[] = [
  {
    id: "0",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "1",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "2",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "3",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "4",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "5",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
];

export const ScheduleListColumns: Coltype[] = [
  {
    checkbox: true,
    label: "",
    minWidth: "0px",
    colHover: true,
  },
  {
    id: "id",
    label: "Id",
    minWidth: "50px",
  },
  {
    id: "title",
    label: "Label",
    minWidth: "50px",
  },
  {
    id: "created_dt",
    label: "Created Date",
    minWidth: "50px",
  },
  {
    id: "assigned_to",
    label: "Assigned To",
    minWidth: "50px",
  },
];

export const scheduleMonthArray = [
  { id: 0, value: "Jan", month: "January" },
  { id: 1, value: "Feb", month: "February" },
  { id: 2, value: "Mar", month: "March" },
  { id: 3, value: "Apr", month: "April" },
  { id: 4, value: "May", month: "May" },
  { id: 5, value: "Jun", month: "June" },
  { id: 6, value: "Jul", month: "July" },
  { id: 7, value: "Aug", month: "August" },
  { id: 8, value: "Sep", month: "September" },
  { id: 9, value: "Oct", month: "October" },
  { id: 10, value: "Nov", month: "November" },
  { id: 11, value: "Dec", month: "December" },
];

export const scheduleTimeArrayMinutes = Array.from({ length: 60 }, (v, i) => ({  
  min: `${i}`,
}));

export const scheduleTimeArray = Array.from({ length: 24 }, (v, i) => ({
  id: i,
  time: `${i}`,
  min:scheduleTimeArrayMinutes
}));

export const scheduleTaskData = [
  {
    id: 0,
    month: "Jan",
    from_time: "9:00",
    to_time:"10:30,",
    text: "task assigned",
    name: "active",
  },
  {
    id: 0,
    month: "Feb",
    from_time: "20:00",
    to_time:"21:30,",
    text: "task completed",
    name: "completed",
  },
];


